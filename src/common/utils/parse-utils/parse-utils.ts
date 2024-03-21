import { getRealType } from 'src/common/utils/type-check-utils/type-check-utils';

export function isNotEmptyString(str: unknown): str is string {
  return getRealType(str) === 'string' && Boolean((str as string)?.trim());
}

export function getStringOnly(str: unknown): string {
  return isNotEmptyString(str) ? str : '';
}

export function getNumberOnly(numb: unknown): number {
  return ['number'].includes(getRealType(numb)) ? (numb as number) : 0;
}

export function getNumericString(str: string): string {
  if (!isNotEmptyString(str)) return '';
  return str.replace(/\D/g, '');
}
export function getArrayOnly<InputItem, OutputItem = InputItem extends undefined ? InputItem : InputItem>(
  arr: InputItem[] | null | undefined,
): OutputItem[] {
  return (Array.isArray(arr) ? arr : []) as unknown as OutputItem[];
}
