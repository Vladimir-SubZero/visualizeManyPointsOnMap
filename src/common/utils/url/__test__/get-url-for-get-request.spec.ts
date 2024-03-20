import { getUrlForGetRequest } from '@/common/utils/url/get-url-for-get-request';
import { UnknownRecord } from '@/common/types/frontend-utility-types';

describe('getUrlForGetRequest()', () => {
  const baseUrl = 'baseUrl';
  const params = {
    param1: 'one',
    param2: 7,
    param3: [1, 2, 3, 'data'],
  };
  it(`Получает url - строку для GET - запроса, исходя и полученных параметров`, () => {
    expect(getUrlForGetRequest('', {})).toBe('');

    expect(getUrlForGetRequest(baseUrl, undefined as unknown as UnknownRecord)).toBe(baseUrl);
    expect(getUrlForGetRequest(baseUrl, [] as unknown as UnknownRecord)).toBe(baseUrl);
    expect(getUrlForGetRequest(baseUrl, baseUrl as unknown as UnknownRecord)).toBe(baseUrl);
    expect(getUrlForGetRequest(baseUrl, null as unknown as UnknownRecord)).toBe(baseUrl);
    expect(getUrlForGetRequest(baseUrl, {})).toBe(baseUrl);

    expect(getUrlForGetRequest(baseUrl, params)).toBe(baseUrl + '?' + 'param1=one&param2=7&param3=1,2,3,data');
  });
});
