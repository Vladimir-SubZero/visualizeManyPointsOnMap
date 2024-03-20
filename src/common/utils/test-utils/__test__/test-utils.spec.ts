import {
  getSelectorByTestId,
  getComponentId,
  testIdAttribute,
  getIdAndTestIdParams,
} from '@/common/utils/test-utils/test-utils';

describe('Тесты для test-utils', () => {
  describe('getComponentId', () => {
    it('возвращает собранный или преобразованный id', () => {
      expect(getComponentId(null as unknown as string)).toBe('');
      expect(getComponentId(1)).toBe('1');
      expect(getComponentId('id')).toBe('id');
      expect(getComponentId('id', 'postfix')).toBe('id_postfix');
    });
  });

  describe('getIdAndTestIdParams', () => {
    it('возвращает собранный или преобразованный id', () => {
      expect(getIdAndTestIdParams(null as unknown as string)).toStrictEqual({});
      expect(getIdAndTestIdParams('')).toStrictEqual({});
      expect(getIdAndTestIdParams('id')).toStrictEqual({ id: 'id', [testIdAttribute]: 'id' });
      expect(getIdAndTestIdParams('id', 'data-anotherAttr')).toStrictEqual({ id: 'id', ['data-anotherAttr']: 'id' });
    });
  });

  describe('getSelectorByTestId', () => {
    it('возвращает собранный селектор data-attribute по testId или переданному параметру', () => {
      expect(getSelectorByTestId(null as unknown as string)).toBe('');
      expect(getSelectorByTestId(1)).toBe(`[${testIdAttribute}=1]`);
      expect(getSelectorByTestId('id')).toBe(`[${testIdAttribute}=id]`);
      expect(getSelectorByTestId('id', 'postfix')).toBe(`[${testIdAttribute}=id_postfix]`);
      expect(getSelectorByTestId('id', 'postfix', 'data-anotherAttr')).toBe('[data-anotherAttr=id_postfix]');
      expect(getSelectorByTestId('id', '', 'data-anotherAttr')).toBe('[data-anotherAttr=id]');
    });
  });
});
