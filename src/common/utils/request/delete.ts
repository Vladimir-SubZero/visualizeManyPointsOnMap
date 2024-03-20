import { BackendApiResponse, RequestData, RequestSettings } from '@/common/types/frontend-data-types';
import { HTTP_METHODS } from '@/common/constants';
import { sendRequest } from '@/common/utils/request/send-request';

export const del = <T, P>(url: string, data: P, requestSettings: RequestSettings<P>): Promise<BackendApiResponse<T>> =>
  sendRequest<T, P>(url, HTTP_METHODS.DELETE, data, requestSettings);
