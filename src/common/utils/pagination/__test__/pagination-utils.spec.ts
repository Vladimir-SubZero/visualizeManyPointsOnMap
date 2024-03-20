import { getPaginationItemsPositionData } from '../index';

describe('Общие утилиты пагинации', () => {
  describe('getPaginationItemsPositionData()', () => {
    const testCases: [
      description: string,
      params: Parameters<typeof getPaginationItemsPositionData>[0],
      result: ReturnType<typeof getPaginationItemsPositionData>,
    ][] = [
      /** case 1 */
      [
        'Если нет элементов для пагинации',
        {
          selectedPageIndex: 0,
          maxItemsCountOnPage: 0,
          totalItemsCount: 0,
        },
        {
          currentItemsStartNumber: 0,
          currentItemsEndNumber: 0,
          totalItemsCount: 0,
        },
      ],
      /** case 2 */
      [
        'Если выбрана первая страница пагинации',
        {
          selectedPageIndex: 0,
          maxItemsCountOnPage: 50,
          totalItemsCount: 300,
        },
        {
          currentItemsStartNumber: 1,
          currentItemsEndNumber: 50,
          totalItemsCount: 300,
        },
      ],
      /** case 3 */
      [
        'Если выбрана третья страница пагинации',
        {
          selectedPageIndex: 2,
          maxItemsCountOnPage: 50,
          totalItemsCount: 300,
        },
        {
          currentItemsStartNumber: 150,
          currentItemsEndNumber: 200,
          totalItemsCount: 300,
        },
      ],
      /** case 4 */
      [
        'Если выбрана последняя страница пагинации',
        {
          selectedPageIndex: 4,
          maxItemsCountOnPage: 50,
          totalItemsCount: 300,
        },
        {
          currentItemsStartNumber: 250,
          currentItemsEndNumber: 300,
          totalItemsCount: 300,
        },
      ],
      /** case 5 */
      [
        'Если максимальное кол-во элементов на странице невалидно и выбрана первая страница',
        {
          selectedPageIndex: 0,
          maxItemsCountOnPage: 0, // !!! <= 0
          totalItemsCount: 300,
        },
        {
          currentItemsStartNumber: 1,
          currentItemsEndNumber: 300,
          totalItemsCount: 300,
        },
      ],
      /** case 6 */
      [
        'Если максимальное кол-во элементов на странице превышает общее количество',
        {
          selectedPageIndex: 0,
          maxItemsCountOnPage: 50,
          totalItemsCount: 30,
        },
        {
          currentItemsStartNumber: 1,
          currentItemsEndNumber: 30,
          totalItemsCount: 30,
        },
      ],
    ];

    test.each(testCases)('%p', (_, params, result) => {
      expect(getPaginationItemsPositionData(params)).toStrictEqual(result);
    });
  });
});
