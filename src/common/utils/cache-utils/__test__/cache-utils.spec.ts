import { useCacheUtils } from '@/common/utils/cache-utils';
import { ref } from 'vue';

describe('useCacheUtils', () => {
  const cacheVersion = '1.0.0';
  const storageKey = 'test';
  const userGlobalId = ref('user-123');
  const parseReviewer = undefined;

  beforeEach(() => {
    localStorage.clear();

    jest.clearAllMocks();
  });

  afterAll(() => {
    localStorage.clear();
  });

  it('успешно устанавливает данные к кэш и извлекает их', () => {
    const { setCacheData, getCacheData } = useCacheUtils<Record<string, string>>({
      cacheVersion,
      storageKey,
      userGlobalId,
      parseReviewer,
    });
    const data = { name: 'John Doe' };

    setCacheData(data);

    expect(getCacheData()).toEqual(data);
  });

  it('не устанавливает данные к кэш, если не передан userGlobalId', () => {
    const { setCacheData, getCacheData } = useCacheUtils<Record<string, string>>({
      cacheVersion,
      storageKey,
      userGlobalId: ref(''),
      parseReviewer,
    });
    const data = { name: 'John Doe' };

    setCacheData(data);

    expect(getCacheData()).toBeNull();
  });

  it('не получает данные из кэша, если возникал ошибка сериализации занных', () => {
    const { setCacheData, getCacheData } = useCacheUtils<Record<string, string>>({
      cacheVersion,
      storageKey,
      userGlobalId,
      parseReviewer: () => {
        throw new Error('Error parsing data');
      },
    });
    const data = { name: 'John Doe' };

    setCacheData(data);

    expect(getCacheData()).toBeNull();
  });

  it('возвращает null если в localStorage устаревшая версия данных', () => {
    const data = { name: 'John Doe' };

    useCacheUtils<Record<string, string>>({
      cacheVersion: '0.0.0',
      storageKey,
      userGlobalId,
    }).setCacheData(data);

    const { getCacheData } = useCacheUtils<Record<string, string>>({
      cacheVersion: '1.0.0',
      storageKey,
      userGlobalId,
    });

    expect(getCacheData()).toBeNull();
  });
});
