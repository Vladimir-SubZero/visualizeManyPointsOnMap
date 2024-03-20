import { getNumberOnly } from '@/common/utils/parse-utils/parse-utils';

export const getMaxListItemsCountValue = (val: string | number): number => {
  const res = Math.ceil(getNumberOnly(Number(String(val))));

  return res > 0 ? res : 0;
};

export const isValidMaxListItemsCountValue = (val: number): boolean => {
  const stringVal = String(val);

  return Boolean(!stringVal.includes('.') && !stringVal.includes(',') && getNumberOnly(val) > 0);
};
