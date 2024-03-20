import { getUrlForSpringGetRequest } from '@/common/utils/url/get-url-for-spring-get-request';
import { UnknownRecord } from '@/common/types/frontend-utility-types';

describe('getUrlForSpringGetRequest()', () => {
  const baseUrl = 'baseUrl';
  const params = {
    param1: 'one',
    param2: 7,
    param3: [1, 2, 3, 'data'],
  };
  it(`Получает url - строку для GET запроса с каждым параметром отдельно, исходя и полученных параметров`, () => {
    expect(getUrlForSpringGetRequest('', {})).toBe('');

    expect(getUrlForSpringGetRequest(baseUrl, undefined as unknown as UnknownRecord)).toBe(baseUrl);
    expect(getUrlForSpringGetRequest(baseUrl, [] as unknown as UnknownRecord)).toBe(baseUrl);
    expect(getUrlForSpringGetRequest(baseUrl, baseUrl as unknown as UnknownRecord)).toBe(baseUrl);
    expect(getUrlForSpringGetRequest(baseUrl, null as unknown as UnknownRecord)).toBe(baseUrl);
    expect(getUrlForSpringGetRequest(baseUrl, {})).toBe(baseUrl);

    expect(getUrlForSpringGetRequest(baseUrl, params)).toBe(
      baseUrl + '?' + 'param1=one&param2=7&param3=1&param3=2&param3=3&param3=data',
    );
  });
});
