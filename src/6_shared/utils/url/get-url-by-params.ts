import queryString, { StringifiableRecord, StringifyOptions } from 'query-string';
import { PartialRecord } from '@/6_shared/types/frontend-utility-types';
import { isNotEmptyString } from '@/6_shared/utils/parse-utils/parse-utils';
import { getRealType } from '@/6_shared/utils/type-check-utils/type-check-utils';

export function getUrlByParams(queryStringSettings: StringifyOptions) {
  return function (baseUrl = '', params: PartialRecord<string, unknown>): string {
    if (!isNotEmptyString(baseUrl)) return '';
    if (getRealType(params) !== 'object' || !Object.keys(params).length) return baseUrl;

    return baseUrl + '?' + queryString.stringify(params as StringifiableRecord, queryStringSettings);
  };
}
