import { RequestMetaData } from '@/common/types/frontend-data-types';

export const DEFAULT_REQUEST_META_DATA: RequestMetaData = {
  requestTitle: null,
};

export const DEFAULT_REQUEST_HEADERS: Record<string, string> = {
  'Content-type': 'application/json',
};
