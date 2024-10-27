import queryString, { StringifiableRecord, StringifyOptions } from 'query-string';
import { PartialRecord } from '@/common/types/frontend-utility-types';
import { isNotEmptyString } from '@/common/utils/parse-utils/parse-utils';
import { getRealType } from '@/common/utils/type-check-utils/type-check-utils';

export function getUrlByParams(queryStringSettings: StringifyOptions) {
  return function (baseUrl = '', params: PartialRecord<string, unknown>): string {
    if (!isNotEmptyString(baseUrl)) return '';
    if (getRealType(params) !== 'object' || !Object.keys(params).length) return baseUrl;

    return baseUrl + '?' + queryString.stringify(params as StringifiableRecord, queryStringSettings);
  };
}
