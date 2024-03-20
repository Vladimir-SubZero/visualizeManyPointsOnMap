import { isNotEmptyString } from '@/common/utils/parse-utils/parse-utils';

export const testIdAttribute = 'data-testId';

export const getComponentId = (id: string | number, additionalPostfix = ''): string => {
  if (!id) return '';

  return additionalPostfix ? `${id}_${additionalPostfix}` : String(id);
};

export const getIdAndTestIdParams = (id: string, testIdAttributeName = testIdAttribute) =>
  isNotEmptyString(id) ? { id: id, [testIdAttributeName]: id } : {};

export const getSelectorByTestId = (
  id: string | number,
  additionalPostfix = '',
  attribute = testIdAttribute,
): string => {
  if (!id) return '';

  return `[${attribute}=${getComponentId(id, additionalPostfix)}]`;
};
