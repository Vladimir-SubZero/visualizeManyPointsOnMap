import { getValidArrayItems } from '../index';

describe('Общие утилиты валидации', () => {
  describe('getValidArrayItems()', () => {
    const testCases: [
      description: string,
      items: string[] | number[],
      allowedItems: string[] | number[],
      result: ReturnType<typeof getValidArrayItems>,
    ][] = [
      ['Если получены только числа', [1, 2, 3], [3, 4], [3]],
      ['Если получены только строки', ['1', '2', '3'], ['3', '4'], ['3']],
      ['Если для проверки строк получены числа', ['1', '2', '3'], [3, 4], ['3']],
      ['Если для проверки чисел получены строки', [1, 2, 3], ['3', '4'], [3]],
      ['Если для проверки строк получен пустой массив', ['1', '2', '3'], [], []],
      ['Если для проверки чисел получен пустой массив', [1, 2, 3], [], []],
      ['Если проверяемый массив невалидный', { length: 3 } as unknown as string[], [3, 4], []],
      ['Если проверяющий массив невалидный', ['1', '2', '3'], { length: '1' } as unknown as string[], []],
      ['Если все аргументы невалидны', null as unknown as string[], 'null' as unknown as string[], []],
    ];

    test.each(testCases)('%p', (_, items, allowedItems, result) => {
      expect(getValidArrayItems(items, allowedItems)).toStrictEqual(result);
    });
  });
});
