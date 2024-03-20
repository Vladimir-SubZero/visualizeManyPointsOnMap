import { getMaxListItemsCountValue, isValidMaxListItemsCountValue } from '@/common/utils/list-view-data-utils';

describe('Тесты для list-view-data-utils', () => {
  describe('getMaxListItemsCountValue(), получает валидное число для количества элементов списка. ', () => {
    const cases: [itemsCount: number | string, result: number][] = [
      [50, 50],
      [11, 11],
      [12.5, 13],
      [12.1, 13],
      [-1, 0],
      [0, 0],
      ['50', 50],
      ['50.5', 51],
      ['50,001', 0],
      [[] as unknown as number, 0],
    ];

    test.each(cases)('Число элементов - %p, резульатат - %p, ', (itemsCount: number | string, result: number) => {
      expect(getMaxListItemsCountValue(itemsCount)).toBe(result);
    });
  });

  describe(
    'isValidMaxListItemsCountValue(), проверяет на валидность максимально возможное число элементов списка. ' +
      'Число должно быть больше нуля',
    () => {
      const cases: [itemsCount: number, result: boolean][] = [
        [50, true],
        [11, true],
        [12.5, false],
        [-1, false],
        [0, false],
        ['50' as unknown as number, false],
        [[] as unknown as number, false],
      ];

      test.each(cases)('Число элементов - %p, резульатат - %p, ', (itemsCount: number, result: boolean) => {
        expect(isValidMaxListItemsCountValue(itemsCount)).toBe(result);
      });
    },
  );
});
