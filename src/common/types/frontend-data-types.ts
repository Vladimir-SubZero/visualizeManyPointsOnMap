import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ResponseBodyOrders } from '@/common/types/dto-types'
import { DATA_STATES, HTTP_METHODS } from '@/common/constants'
import { UnknownRecord } from '@/common/types/frontend-utility-types'
export type JsTypesInLowerCase =
  | 'string'
  | 'number'
  | 'null'
  | 'boolean'
  | 'undefined'
  | 'object'
  | 'array'
  | 'symbol'
  | 'function'
  | 'map'
  | 'set'
  | 'formdata'
  | 'error'
  | 'date';

export type RequestSettings = {
  headers?: Record<string, string>;
  abortSignal?: AxiosRequestConfig['signal'];
};
export type RequestData = UnknownRecord | string | FormData;

export type BackendApiResponse<Data = ResponseBodyOrders> = AxiosResponse<Data>;
export type BackendApiError<Data = unknown> = Partial<AxiosResponse<Data>>;

export type HttpMethod = keyof typeof HTTP_METHODS;

export type DataStateKey = keyof typeof DATA_STATES;