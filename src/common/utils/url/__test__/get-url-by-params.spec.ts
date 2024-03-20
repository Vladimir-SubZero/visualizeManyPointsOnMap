import { getUrlByParams } from '@/common/utils/url/get-url-by-params';
import { StringifyOptions } from 'query-string';
import { UnknownRecord } from '@/common/types/frontend-utility-types';

describe('getUrlByParams()', () => {
  const baseUrl = 'baseUrl';
  const params = {
    param1: 'one',
    param2: 7,
    param3: [1, 2, 3, 'data'],
  };
  it(`Получает url - строку с GET - параметрами запроса, исходя из полученных аргументов и настроек`, () => {
    expect(getUrlByParams(undefined as unknown as StringifyOptions)('', {})).toBe('');

    expect(
      getUrlByParams(undefined as unknown as StringifyOptions)(baseUrl, undefined as unknown as UnknownRecord),
    ).toBe(baseUrl);
    expect(getUrlByParams(undefined as unknown as StringifyOptions)(baseUrl, [] as unknown as UnknownRecord)).toBe(
      baseUrl,
    );
    expect(getUrlByParams(undefined as unknown as StringifyOptions)(baseUrl, baseUrl as unknown as UnknownRecord)).toBe(
      baseUrl,
    );
    expect(getUrlByParams(undefined as unknown as StringifyOptions)(baseUrl, null as unknown as UnknownRecord)).toBe(
      baseUrl,
    );
    expect(getUrlByParams(undefined as unknown as StringifyOptions)(baseUrl, {})).toBe(baseUrl);

    expect(getUrlByParams(undefined as unknown as StringifyOptions)(baseUrl, params)).toBe(
      baseUrl + '?' + 'param1=one&param2=7&param3=1&param3=2&param3=3&param3=data',
    );
  });
});
