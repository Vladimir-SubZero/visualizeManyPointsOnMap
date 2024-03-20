import { mapCoordinateForRouteAlongRoad } from '@/common/utils/mapedCoordinateForRouteAlongRoad';
type RoutePoints = [number, number][];
type Result = [number, number, number, number][];
const routePoints: RoutePoints = [
  [0, 1],
  [2, 3],
  [4, 5],
  [6, 7],
  [8, 9],
  [10, 11],
  [12, 13],
  [14, 15],
];
const res: Result = [
  [0, 1, 2, 3],
  [2, 3, 4, 5],
  [4, 5, 6, 7],
  [6, 7, 8, 9],
  [8, 9, 10, 11],
  [10, 11, 12, 13],
  [12, 13, 14, 15],
];

describe('mapCoordinateForRouteAlongRoad()', () => {
  it('Проверка на вход и выход соответствующих данных', () => {
    expect(mapCoordinateForRouteAlongRoad(routePoints)).toStrictEqual(res);
  });
});
