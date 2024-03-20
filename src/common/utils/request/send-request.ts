import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { appInternalEventEmitter } from '@/common/internal-event-emitter';
import {
  BackendApiError,
  BackendApiResponse,
  HttpMethod,
  RequestData,
  RequestSettings,
  TypedBackendResponse,
} from '@/common/types/frontend-data-types';
import { authErrorInterceptorInstance } from '@/common/utils/request/axios-interceptors/auth-error-interceptor';
import { appRequestAbortControllersMap } from '@/common/request-abort-controller';
import { getRealType, isNotNullable } from '@/common/utils/type-check-utils/type-check-utils';
import { UnknownRecord } from '@/common/types/frontend-utility-types';
import { HTTP_METHODS } from '@/common/constants';
import { getUrlForSpringGetRequest } from '@/common/utils/url/get-url-for-spring-get-request';
import { appExternalEventEmitterForLegacyApp } from '@/common/external-event-emitter-for-legacy-app';
import cloneDeep from 'lodash/cloneDeep';
import { DEFAULT_REQUEST_HEADERS, DEFAULT_REQUEST_META_DATA } from '@/common/utils/request/constants';
import {
  getUserAccountNameHeaderData,
  setUserAccountNameToBrowser,
} from '@/common/utils/request/user-account-name-utils';
import { useLegacyEventEmitter } from '@/common/external-event-emitter-for-legacy-app/utils/use-legacy-event-emitter';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: '/', //http://localhost:3011',
});

appExternalEventEmitterForLegacyApp.on('changeUserAccountName', (accountName: string) => {
  setUserAccountNameToBrowser(accountName);
});

appInternalEventEmitter.on('cancelRequests', () => {
  for (const abortController of Array.from(appRequestAbortControllersMap.keys())) {
    abortController.abort();
  }

  appRequestAbortControllersMap.clear();
});
export function sendRequest<T, P>(
  url: string,
  method: HttpMethod,
  data: P,
  requestSettings: RequestSettings<P> = {
    headers: DEFAULT_REQUEST_HEADERS,
    requestMetaData: DEFAULT_REQUEST_META_DATA,
  },
): Promise<BackendApiResponse<T>> {
  const {
    responseType = 'json',
    headers = {},
    abortSignal: specialAbortSignal,
    requestMetaData,
    showLoader = true,
    converter,
  } = requestSettings;

  const { emitRequestStart, emitRequestEndSuccess, emitRequestEndError } = useLegacyEventEmitter(showLoader);

  const finalRequestMetaData: RequestSettings<P>['requestMetaData'] = {
    ...cloneDeep(requestMetaData),
  };

  const finalHeaders: AxiosRequestConfig['headers'] = {
    ...headers,
    ...getUserAccountNameHeaderData(),
  };
  let finalRequestData: RequestData = {};

  if (getRealType(data) === 'object') {
    if (converter) {
      const convertedData = converter(data);
      convertedData ? (finalRequestData = convertedData) : null;
    } else {
      finalRequestData = {
        // TODO Узнать для чего именно нужно поле "snapshot_date" бекенду и в каждом ли запросе
        // snapshot_date: getBrowserCurrentTimeStamp(),
        ...(data as UnknownRecord),
      };
    }
  } else {
    finalRequestData = data as RequestData;
  }

  const finaRequestUrl =
    method === HTTP_METHODS.GET && getRealType(finalRequestData) === 'object'
      ? getUrlForSpringGetRequest(url, finalRequestData as UnknownRecord)
      : url;
  const commonAbortController: AbortController = new AbortController();
  const commonAbortSignal: AbortSignal = commonAbortController.signal;
  const finalAbortSignal: AbortSignal | undefined = specialAbortSignal || commonAbortSignal;
  const shouldAbortByCommonAbort = Boolean(!specialAbortSignal);

  if (shouldAbortByCommonAbort) {
    appRequestAbortControllersMap.set(commonAbortController, undefined);
  }

  const requestConfig: AxiosRequestConfig = {
    method,
    url: finaRequestUrl,
    responseType,
    data: finalRequestData,
    headers: finalHeaders,
    signal: finalAbortSignal,
  };

  appInternalEventEmitter.emit('requestStarted');
  emitRequestStart(finalRequestMetaData);

  const isTypedBackendResponse = (data: T | TypedBackendResponse): data is TypedBackendResponse => {
    return data && 'success' in data && ('comments' in data || 'errors' in data);
  };
  return new Promise<BackendApiResponse<T>>((resolve, reject) => {
    return axiosInstance
      .request<T>(requestConfig)
      .then((response: BackendApiResponse<T>) => {
        if (isTypedBackendResponse(response.data) && !response.data.success) {
          emitRequestEndError(finalRequestMetaData, response.data);
        } else {
          resolve(response);
          emitRequestEndSuccess(finalRequestMetaData);
        }
      })
      .catch((error: BackendApiError) => {
        console.log('error', error);
        reject(error);
        emitRequestEndError(finalRequestMetaData);
      })
      .finally(() => {
        appInternalEventEmitter.emit('requestCompleted');
      });
  });
}

axiosInstance.interceptors.response.use(undefined, (error: AxiosError | unknown) =>
  authErrorInterceptorInstance.handleError(error),
);
