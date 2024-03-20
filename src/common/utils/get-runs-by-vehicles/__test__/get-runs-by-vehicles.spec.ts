import { getRunsByVehicles } from '../index';
import { Vehicle } from '../../../types/dto-types';

const validVehicles = [
  {
    id: 10,
    runs: [{ id: 1 }, { id: 2 }],
  },
  {
    id: 20,
    runs: [{ id: 3 }, { id: 4 }],
  },
] as unknown as Vehicle[];

const unValidVehicles = [
  {
    id: 10,
  },
  {
    id: 20,
    runs: [{ id: 3 }, { id: 4 }],
  },
] as unknown as Vehicle[];

const result1 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
const result2 = [{ id: 3 }, { id: 4 }];

describe('Тесты для getRunsByVehicles', () => {
  it('правильно получает runs из валидных данных', () => {
    expect(getRunsByVehicles(validVehicles)).toStrictEqual(result1);
  });
  it('правильно получает runs из невалидных данных', () => {
    expect(getRunsByVehicles(unValidVehicles)).toStrictEqual(result2);
  });
});
