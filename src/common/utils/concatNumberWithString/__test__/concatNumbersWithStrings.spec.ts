export type UnknownRecord = Record<string, unknown>;
export type JsTypesInLowerCase =
  | 'string'
  | 'number'
  | 'null'
  | 'boolean'
  | 'undefined'
  | 'object'
  | 'array'
  | 'symbol'
  | 'function'
  | 'map'
  | 'set'
  | 'formdata'
  | 'error'
  | 'date';


type InputData = unknown | (() => UnknownRecord);

export function getRealType(param: InputData): JsTypesInLowerCase {
  const realType: string = Object.prototype.toString.apply(param);

  return realType.slice(8, realType.length - 1).toLowerCase() as JsTypesInLowerCase;
}
export function getNumberOnly(numb: unknown): number {
  return ['number'].includes(getRealType(numb)) ? (numb as number) : 0;
}

export const concatNumberAndString = (number: number, unitsString = 'px'): string => {
  const checkedNumber = getNumberOnly(number);

  return checkedNumber + unitsString;
};

describe('concatNumberAndString()', () => {
  it('корректно добавляет значение к переданному числовому аргументу', () => {
    expect(concatNumberAndString(5)).toBe('5px');
    expect(concatNumberAndString(0)).toBe('0px');
    expect(concatNumberAndString(5, 'fr')).toBe('5fr');
  });

  it('корректно обрабатывает нечисловой аргумент', () => {
    expect(concatNumberAndString(null as unknown as number)).toBe('0px');
    expect(concatNumberAndString([1] as unknown as number)).toBe('0px');
    expect(concatNumberAndString('1' as unknown as number)).toBe('0px');
  });
});
