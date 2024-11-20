import { getNumberOnly } from '@/6_shared/utils/parse-utils/parse-utils';

export const concatNumberAndString = (number: number, unitsString = 'px'): string => {
  const checkedNumber = getNumberOnly(number);

  return checkedNumber + unitsString;
};
