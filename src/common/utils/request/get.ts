import { BackendApiResponse, RequestData, RequestSettings } from '@/common/types/frontend-data-types';
import { sendRequest } from '@/common/utils/request/send-request';
import { HTTP_METHODS } from '@/common/constants';

export const get = <T, P>(url: string, data: P, requestSettings: RequestSettings<P>): Promise<BackendApiResponse<T>> =>
  sendRequest<T, P>(url, HTTP_METHODS.GET, data, requestSettings);
