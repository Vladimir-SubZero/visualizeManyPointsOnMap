import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  GenericAbortSignal,
  CreateAxiosDefaults
} from 'axios'
import {
  BackendApiError,
  BackendApiResponse,
  HttpMethod,
  RequestData,
  RequestSettings,
} from '@/common/types/frontend-data-types';

import { authErrorInterceptorInstance } from '@/common/utils/request/axios-interceptors/auth-error-interceptor';
import { appRequestAbortControllersMap } from '@/common/request-abort-controller';
import { getRealType } from '@/common/utils/type-check-utils/type-check-utils';
import { UnknownRecord } from '@/common/types/frontend-utility-types';
import { HTTP_METHODS } from '@/common/constants';
import { getUrlForSpringGetRequest } from '@/common/utils/url/get-url-for-spring-get-request';

import { DEFAULT_REQUEST_HEADERS } from '@/common/utils/request/constants';

const config = {
  baseURL: '/'
} as CreateAxiosDefaults

export const axiosInstance: AxiosInstance = axios.create(config);


export function sendRequest<T, P>(
  url: string,
  method: HttpMethod,
  data: P,
  requestSettings: RequestSettings = {
    headers: DEFAULT_REQUEST_HEADERS,
  },
): Promise<BackendApiResponse<T>> {
  const {
    responseType = 'json',
    headers = {},
    abortSignal: specialAbortSignal,
  } = requestSettings;


  const finalHeaders: AxiosRequestConfig['headers'] = {
    ...headers,
  };
  let finalRequestData: RequestData = {};

  if (getRealType(data) === 'object') {
    finalRequestData = {
      ...(data as UnknownRecord),
    };
  } else {
    finalRequestData = data as RequestData;
  }

  const finaRequestUrl =
    method === HTTP_METHODS.GET && getRealType(finalRequestData) === 'object'
      ? getUrlForSpringGetRequest(url, finalRequestData as UnknownRecord)
      : url;
  const commonAbortController: AbortController = new AbortController();
  const commonAbortSignal: GenericAbortSignal = commonAbortController.signal;
  const finalAbortSignal: GenericAbortSignal | undefined = specialAbortSignal || commonAbortSignal;
  const shouldAbortByCommonAbort = Boolean(!specialAbortSignal);

  if (shouldAbortByCommonAbort) {
    appRequestAbortControllersMap.set(commonAbortController, undefined);
  }

  const requestConfig = {
    method,
    url: finaRequestUrl,
    responseType,
    data: finalRequestData,
    headers: finalHeaders,
    signal: finalAbortSignal,
  } as AxiosRequestConfig<P>;


  return new Promise<BackendApiResponse<T>>((resolve, reject) => {
    return axiosInstance
      .request<T>(requestConfig)
      .then((response: BackendApiResponse<T>) => {
          resolve(response);
      })
      .catch((error: BackendApiError) => {
        console.log('error', error);
        reject(error);
      })
      .finally(() => {
        // common result
      });
  });
}

axiosInstance.interceptors.response.use(undefined, (error: AxiosError | unknown) =>
  authErrorInterceptorInstance.handleError(error),
);
