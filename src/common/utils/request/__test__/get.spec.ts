import * as requestModule from '@/common/utils/request/send-request';
import { get } from '@/common/utils/request/get';
import Mock = jest.Mock;
import { RequestData, RequestSettings } from '@/common/types/frontend-data-types';
import { HTTP_METHODS } from '@/common/constants';
import { DEFAULT_REQUEST_META_DATA } from '@/common/utils/request/constants';

const requestMetaData = DEFAULT_REQUEST_META_DATA;
const reqSettings = { requestMetaData };

describe('Тесты для request utils. get()', () => {
  const mockFunction = jest.fn();
  const requestResult = '333';

  beforeAll(() => {
    (requestModule.sendRequest as Mock) = mockFunction.mockImplementation(() => requestResult);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  const url = 'some-url';

  it('Возвращает результат выполнения утилиты sendRequest()', () => {
    const callResult = get(url, {}, reqSettings);

    expect(callResult).toBe(requestResult);
  });

  it('Вызывает утилиту sendRequest() c правильными параметрами', () => {
    const data: RequestData = {
      id: 47,
    };
    const requestSettings: RequestSettings<unknown> = {
      ...reqSettings,
      responseType: 'json',
    };

    get(url, data, requestSettings);

    expect(mockFunction).toBeCalledTimes(1);
    expect(mockFunction.mock.calls[0][0]).toBe(url);
    expect(mockFunction.mock.calls[0][1]).toBe(HTTP_METHODS.GET);
    expect(mockFunction.mock.calls[0][2]).toStrictEqual(data);
    expect(mockFunction.mock.calls[0][3]).toStrictEqual(requestSettings);
    expect(mockFunction.mock.calls[0][4]).toBeUndefined();
  });

  it('Вызывает утилиту sendRequest() c правильными параметрами по умолчанию', () => {
    get(url, {}, reqSettings);

    expect(mockFunction).toBeCalledTimes(1);
    expect(mockFunction.mock.calls[0][0]).toBe(url);
    expect(mockFunction.mock.calls[0][1]).toBe(HTTP_METHODS.GET);
    expect(mockFunction.mock.calls[0][2]).toStrictEqual({});
    expect(mockFunction.mock.calls[0][3]).toStrictEqual(reqSettings);
    expect(mockFunction.mock.calls[0][4]).toBeUndefined();
  });
});
