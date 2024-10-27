import { get } from '@/common/utils/request/get';
import { BackendApiResponse, RequestSettings } from '@/common/types/frontend-data-types';

import { RequestParams, ResponseBodyOrders } from '@/common/types/dto-types'

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
