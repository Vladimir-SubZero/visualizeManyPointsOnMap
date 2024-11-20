import { get } from '@/6_shared/utils/request/get';
import { BackendApiResponse, RequestSettings } from '@/6_shared/types/frontend-data-types';

import { RequestParams, ResponseBodyOrders } from '@/6_shared/types/dto-types'

export const baseApiUrl = '/gis/gis-api';
export const ordersApiUrl = `${baseApiUrl}/orders`;

export const requestOrders = (
  params: RequestParams,
  abortSignal?: RequestSettings['abortSignal'],
): Promise<BackendApiResponse<ResponseBodyOrders>> => {
  return get(ordersApiUrl, params, {
    abortSignal,
  });
};
