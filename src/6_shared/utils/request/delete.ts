import {
  BackendApiResponse,
  RequestSettings,
  } from '@/6_shared/types/frontend-data-types';
import { HTTP_METHODS } from '@/6_shared/constants';
import { sendRequest } from '@/6_shared/utils/request/send-request';

export const del = <T, P>(
  url: string,
  data: P,
  requestSettings: RequestSettings,
): Promise<BackendApiResponse<T>> =>
  sendRequest<T, P>(url, HTTP_METHODS.DELETE, data, requestSettings);
