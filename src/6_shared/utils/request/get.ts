import {
  BackendApiResponse,
  RequestSettings,
} from '@/6_shared/types/frontend-data-types';
import { sendRequest } from '@/6_shared/utils/request/send-request';
import { HTTP_METHODS } from '@/6_shared/constants';

export const get = <T, P>(
  url: string,
  data: P,
  requestSettings: RequestSettings,
): Promise<BackendApiResponse<T>> =>
  sendRequest<T, P>(url, HTTP_METHODS.GET, data, requestSettings);
