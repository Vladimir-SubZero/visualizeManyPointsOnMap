import { JsTypesInLowerCase } from '@/common/types/frontend-data-types';
import { EmptyRecord, UnknownRecord } from '@/common/types/frontend-utility-types';

type InputData = unknown | (() => UnknownRecord);

export function getRealType(param: InputData): JsTypesInLowerCase {
  const realType: string = Object.prototype.toString.apply(param);

  return realType.slice(8, realType.length - 1).toLowerCase() as JsTypesInLowerCase;
}

export function isObject(param: InputData): param is EmptyRecord {
  return getRealType(param) === 'object';
}

export const assertNever = (value: never): never => {
  throw new Error('received value is not appropriate: ' + value)!;
};

export function isNotNullable<T>(elem: T | null | undefined): elem is T {
  return elem != null;
}

export function hasKey<T extends Record<string, unknown>, K extends string>(
  obj: T,
  key: K,
): obj is T & Record<K, unknown> {
  return key in obj;
}
