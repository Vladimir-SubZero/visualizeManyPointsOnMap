import { Nullable } from '@/common/types/frontend-utility-types';
import { Ref } from 'vue';

export const useCacheUtils = <Data>({
  cacheVersion,
  userGlobalId,
  storageKey,
  parseReviewer,
}: {
  cacheVersion: string;
  storageKey: string;
  userGlobalId: Ref<string>;
  parseReviewer?: Parameters<JSON['parse']>[1];
}) => {
  type Cache = { [userGlobalId: string]: Data };

  const getFromLocalStorage = (storageKey: string): Nullable<Cache> => {
    try {
      return JSON.parse(localStorage.getItem(storageKey + '_' + cacheVersion) as string, parseReviewer);
    } catch (err) {
      console.error(err);
    }
    return null;
  };

  const setInLocalStorage = (storageKey: string, data: Cache): void => {
    try {
      localStorage.setItem(storageKey + '_' + cacheVersion, JSON.stringify(data));
    } catch (err) {
      console.error(err);
    }
  };

  const getCacheData = (): Nullable<Data> => {
    return getFromLocalStorage(storageKey)?.[userGlobalId.value] ?? null;
  };

  const setCacheData = (data: Data): void => {
    if (userGlobalId.value !== '') {
      const cache: { [p: string]: Data } = { [userGlobalId.value]: data };
      setInLocalStorage(storageKey, cache);
    }
  };

  return {
    getCacheData,
    setCacheData,
  };
};
