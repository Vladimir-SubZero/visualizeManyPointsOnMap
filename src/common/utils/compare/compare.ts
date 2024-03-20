import { Comparer, SortOrder } from './types';

export const mapSortOrder = (sortOrder: SortOrder = 'ASC') => (sortOrder === 'ASC' ? 'DESC' : 'ASC');

export const sumComparers = <T>(...comparerList: Comparer<T>[]): Comparer<T> => {
  return (v1, v2) => {
    let result: ReturnType<Comparer<T>> = 0;
    for (const comparer of comparerList) {
      result = comparer(v1, v2);

      if (result !== 0) {
        return result;
      }
    }

    return result;
  };
};
export const reverse = <T>(comparer: Comparer<T>): Comparer<T> => {
  return (v1, v2) => {
    const result = comparer(v1, v2);

    return result === 0 ? result : (-result as 1 | -1);
  };
};

export const order = <T>(comparer: Comparer<T>, sortOrder: SortOrder = 'ASC'): Comparer<T> => {
  return sortOrder === 'ASC' ? comparer : reverse(comparer);
};

export const compare = <T>(prop: keyof T): Comparer<T> => {
  return (a: T, b: T) => {
    if (a[prop] === b[prop]) {
      return 0;
    }

    return a[prop] > b[prop] ? 1 : -1;
  };
};

export const compareNested = <T extends J, J extends Record<keyof J, K>, K>(prop: keyof J) => {
  return (propNested: keyof K): Comparer<T> => {
    return (a: T, b: T) => {
      if (a[prop][propNested] === b[prop][propNested]) {
        return 0;
      }

      return a[prop][propNested] > b[prop][propNested] ? 1 : -1;
    };
  };
};
