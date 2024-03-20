import { Ref } from 'vue';

export const addOrRemove = <T>(item: T, itemSet: Ref<Set<T>>) => {
  if (itemSet.value.has(item)) {
    itemSet.value.delete(item);
  } else {
    itemSet.value.add(item);
  }
};

export const getSelectedRange = <T>(last: T, current: T, list: T[]): T[] => {
  const lastIndex = list.indexOf(last);
  const currentIndex = list.indexOf(current);
  let stopsNew;
  if (lastIndex < currentIndex) {
    stopsNew = list.slice(lastIndex, currentIndex + 1);
  } else {
    stopsNew = list.slice(currentIndex, lastIndex + 1);
  }

  return stopsNew;
};

export const getSelectedRangeById = <T extends K, K = { id: string }>(list: T[], id: keyof K) => {
  return (last: T[keyof K], current: T[keyof K]): T[] => {
    const lastIndex = list.findIndex((s) => s[id] === last);
    const currentIndex = list.findIndex((s) => s[id] === current);
    let stopsNew;
    if (lastIndex < currentIndex) {
      stopsNew = list.slice(lastIndex, currentIndex + 1);
    } else {
      stopsNew = list.slice(currentIndex, lastIndex + 1);
    }

    return stopsNew;
  };
};
