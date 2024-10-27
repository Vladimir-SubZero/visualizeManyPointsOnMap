import {
  BackendApiResponse,
  RequestSettings,
} from '@/common/types/frontend-data-types';
import { sendRequest } from '@/common/utils/request/send-request';
import { HTTP_METHODS } from '@/common/constants';

export const post = <T, P>(
  url: string,
  data: P,
  requestSettings: RequestSettings,
): Promise<BackendApiResponse<T>> =>
  sendRequest<T, P>(url, HTTP_METHODS.POST, data, requestSettings);
