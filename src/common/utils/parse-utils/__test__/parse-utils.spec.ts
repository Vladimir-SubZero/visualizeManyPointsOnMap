import {
  isNotEmptyString,
  getStringOnly,
  getNumericString,
  getNumberOnly,
} from '@/common/utils/parse-utils/parse-utils';

describe('Тесты для parse-utils', () => {
  describe('isNotEmptyString(): boolean', () => {
    it('возвращает признак пустой строки', () => {
      expect(isNotEmptyString(null)).toBeFalsy();
      expect(isNotEmptyString(undefined)).toBeFalsy();
      expect(isNotEmptyString(true)).toBeFalsy();
      expect(isNotEmptyString(false)).toBeFalsy();
      expect(isNotEmptyString('')).toBeFalsy();
      expect(isNotEmptyString('   ')).toBeFalsy();
    });

    it('возвращает признак не пустой строки', () => {
      expect(isNotEmptyString('строка')).toBeTruthy();
      expect(isNotEmptyString('   строка   ')).toBeTruthy();
      expect(isNotEmptyString('true')).toBeTruthy();
      expect(isNotEmptyString('false')).toBeTruthy();
      expect(isNotEmptyString('   leading spaces')).toBeTruthy();
      expect(isNotEmptyString('trailing spaces   ')).toBeTruthy();
    });
  });

  describe('getNumericString()', () => {
    it('возвращает строку только с цифровыми символами', () => {
      expect(getNumericString('-+=,.0123456789')).toBe('0123456789');
      expect(getNumericString('a-3s.q1w4\n')).toBe('314');

      expect(getNumericString('')).toBe('');
      expect(getNumericString(null as unknown as string)).toBe('');
      expect(getNumericString(undefined as unknown as string)).toBe('');
      expect(getNumericString([1, 2, 3] as unknown as string)).toBe('');
      expect(getNumericString({ id: 7 } as unknown as string)).toBe('');
    });
  });

  describe('getStringOnly()', () => {
    it('возвращает полученный аргумент - строку, если аргумент не является строкой - возвращает пустую строку', () => {
      expect(getStringOnly('-+=,.0123456789')).toBe('-+=,.0123456789');
      expect(getStringOnly('a-3s.q1w4\n')).toBe('a-3s.q1w4\n');

      expect(getStringOnly('')).toBe('');
      expect(getStringOnly(null as unknown as string)).toBe('');
      expect(getStringOnly(undefined as unknown as string)).toBe('');
      expect(getStringOnly([1, 2, 3] as unknown as string)).toBe('');
      expect(getStringOnly({ id: 7 } as unknown as string)).toBe('');
    });
  });

  describe('getNumberOnly()', () => {
    it('возвращает полученный аргумент - число, если аргумент не является числом - ' + 'возвращает ноль', () => {
      expect(getNumberOnly('-+=,.0123456789')).toBe(0);
      expect(getNumberOnly('a-3s.q1w4\n')).toBe(0);
      expect(getNumberOnly('')).toBe(0);
      expect(getNumberOnly(null)).toBe(0);
      expect(getNumberOnly(undefined)).toBe(0);
      expect(getNumberOnly([1, 2, 3])).toBe(0);
      expect(getNumberOnly({ id: 7 })).toBe(0);

      expect(getNumberOnly(0)).toBe(0);
      expect(getNumberOnly(1)).toBe(1);
      expect(getNumberOnly(-2222)).toBe(-2222);
      expect(getNumberOnly(33333)).toBe(33333);
    });
  });
});
