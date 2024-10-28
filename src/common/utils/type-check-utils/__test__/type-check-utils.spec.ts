import {describe, it, expect, test } from 'vitest'
import { getRealType, isObject } from '@/common/utils/type-check-utils/type-check-utils';

describe('Тесты для type-check-utils', () => {
  describe('getRealType()', () => {
    it('Возвращает реальный тип js-объекта, в нижнем регистре', () => {
      expect(getRealType(undefined)).toBe('undefined');
      expect(getRealType(true)).toBe('boolean');
      expect(getRealType(1)).toBe('number');
      expect(getRealType('')).toBe('string');
      expect(getRealType({})).toBe('object');
      expect(getRealType([])).toBe('array');
      expect(getRealType(null)).toBe('null');
      expect(getRealType(Symbol('Sym'))).toBe('symbol');
      expect(getRealType(() => ({}))).toBe('function');
      expect(getRealType(new Map())).toBe('map');
      expect(getRealType(new Set())).toBe('set');
    });
  });

  describe('isObject()', () => {
    const cases: [data: unknown, result: boolean][] = [
      [{}, true],
      [{ id: 1 }, true],
      [new Map(), false],
      [new Set(), false],
      ['', false],
      ['object', false],
      [555, false],
    ];

    test.each(cases)('', (data, result) => {
      expect(isObject(data)).toBe(result);
    });
  });
});
