import { getIdAllOrdersFromBags } from '@/common/utils/filter-utils';

const allOrders = [
  { id: 1, bag: 'KE01' },
  { id: 2, bag: 'KE01' },
  { id: 3, bag: 'KE02' },
  { id: 4, bag: 'KE02' },
  { id: 5, bag: 'KE03' },
  { id: 6, bag: 'KE03' },
  { id: 7, bag: 'KE04' },
  { id: 8, bag: 'KE04' },
  { id: 9, bag: 'KE04' },
  { id: 10, bag: 'KE05' },
];
const ordersForPlanning = [
  { id: 10, bag: 'KE05' },
  { id: 12, bag: 'KE01' },
  { id: 13, bag: 'KE03' },
  { id: 14, bag: 'KE06' },
];

const resultArray = [
  { id: 1, bag: 'KE01' },
  { id: 2, bag: 'KE01' },
  { id: 5, bag: 'KE03' },
  { id: 6, bag: 'KE03' },
  { id: 10, bag: 'KE05' },
  { id: 12, bag: 'KE01' },
  { id: 13, bag: 'KE03' },
  { id: 14, bag: 'KE06' },
];

describe('Тесты для filter-utils', () => {
  it('правильно получает одинаковые объекты', () => {
    expect(getIdAllOrdersFromBags(allOrders, ordersForPlanning)).toStrictEqual(resultArray);
  });
});
