import {
  Order,
  ResponseBodyOrders
} from '../../../common/dto-types'

import { territories } from '../data/territories';
import { getRandomLonOrLat } from './get-random-lon-lat';
import { getRandomBoolean } from './get-random-boolean';
import { getRandomNumber } from './get-random-number';

type Location = {
  latitude: number;
  longitude: number;
};
type TerritoryIdWithCoordinates = {
  [key: number]: Location[];
};
export const getOrders = (
  countOrders: number,
): ResponseBodyOrders => {
  const countTerritories = territories.length;
  const countCoordinatesInTerritory = Math.floor(countOrders / countTerritories);

  //Функция проверяет, входит ли точка с координатами в полигон или нет
  const coordsInPolygon = (
    lon: number,
    lat: number,
    longs: number[],
    lats: number[],
  ): boolean => {
    const npol = longs.length;
    let j = npol - 1;
    let c = false;
    for (let i = 0; i < npol; i++) {
      if (
        ((lats[i] <= lat && lat < lats[j]) ||
          (lats[j] <= lat && lat < lats[i])) &&
        lon >
          ((longs[j] - longs[i]) * (lat - lats[i])) / (lats[j] - lats[i]) +
            longs[i]
      ) {
        c = !c;
      }
      j = i;
    }
    return c;
  };


  //Распределим координаты по зонам
  const territoryIdWithCoordinates: TerritoryIdWithCoordinates = {};
  territories.forEach((territory) => {
    const polygon = JSON.parse('[[' + territory.area.replace(/\|/g, '],[') + ']]');
    const longs = []; // Массив X-координат полигона
    const lats = []; // Массив Y-координат полигона
    let minLat = null;
    let maxLat = null;
    let minLong = null;
    let maxLong = null;

    polygon.forEach((corner) => {
      lats.push(corner[0]);
      longs.push(corner[1]);
      const checkMinMax = (coord, min, max) => {
        const minMax: {
          min: null | number;
          max: null | number;
        } = {
          min: null,
          max: null,
        };
        if (min) {
          if (Number(min) > Number(coord)) {
            minMax.min = Number(coord);
          } else {
            minMax.min = Number(min);
          }
        } else {
          minMax.min = Number(coord);
        }
        if (max) {
          if (Number(max) < Number(coord)) {
            minMax.max = coord;
          } else {
            minMax.max = max;
          }
        } else {
          minMax.max = Number(coord);
        }
        return minMax;
      };
      const minMaxLat = checkMinMax(corner[0], minLat, maxLat);
      const minMaxLong = checkMinMax(corner[1], minLong, maxLong);
      minLat = minMaxLat.min;
      maxLat = minMaxLat.max;
      minLong = minMaxLong.min;
      maxLong = minMaxLong.max;
    });
    const extendOfPolygon = [
      [minLong, minLat],
      [maxLong, maxLat],
    ];
    let i = 0;
    if (countCoordinatesInTerritory > 0) {
      while (i < countCoordinatesInTerritory) {
        const longitude = getRandomLonOrLat(
          extendOfPolygon[0][0],
          extendOfPolygon[1][0],
        );
        const latitude = getRandomLonOrLat(
          extendOfPolygon[0][1],
          extendOfPolygon[1][1],
        );
        if (coordsInPolygon(longitude, latitude, longs, lats)) {
          const location = {
            latitude,
            longitude,
          };
          if (!territoryIdWithCoordinates[territory.id]) {
            territoryIdWithCoordinates[territory.id] = [location];
          } else {
            territoryIdWithCoordinates[territory.id] = [
              ...territoryIdWithCoordinates[territory.id],
              location,
            ];
          }
          i++;
        }
      }
    } else {
      console.log('countCoordinatesInTerritory < 0 ');
    }
  });
  const getOrder = (
    coords: Location,
    zoneId: number,
    isDrop: boolean,
  ): Order => {

    return {
      orderId: getRandomNumber(200000, 100),
      name: 'Заказ_' + this.orderId,
      status: 'new',
      location: {
        id: getRandomNumber(200000, 100),
        address: 'г Раменское, Молодежная ул, д 20',
        latitude: coords.latitude,
        longitude: coords.longitude,
      },
      isDrop: isDrop,
      clientName: 'Иван',
      isValid:true,
      duration: getRandomNumber(200000, 100),
      volume: getRandomNumber(200000, 100),
      weight: getRandomNumber(200000, 100),
      isKGT:  getRandomBoolean(),
      schedulingZoneId: zoneId,
      schedulingZoneName: 'Центральная',
      contactNumber: '8-913-' + getRandomNumber(1000, 100).toString() + '-' + getRandomNumber(100, 10).toString() + '-' + getRandomNumber(100, 10).toString(),
      contactPerson: '',
      clientBarcode: ''
    };
  };

  const getBodyOrders = (
    orders: Order[],
  ): ResponseBodyOrders => {
    return {
      orders: orders,
      total: orders.length,
      success: true,
      errors: [],
      warnings: [],
      infos: [],
    };
  };

  const getAllOrders = (
    territoryIdWithCoordinates: TerritoryIdWithCoordinates,
  ): Order[] => {
    const allOrders: Order[] = [];
    for (const territoryId in territoryIdWithCoordinates) {
      const territoryCoordinates = territoryIdWithCoordinates[territoryId];
      for (let i = 0; i < territoryCoordinates.length; i++) {
        allOrders.push(
          getOrder(territoryCoordinates[i], Number(territoryId), getRandomBoolean()),
        );
      }
    }
    return allOrders;
  };
  return getBodyOrders(getAllOrders(territoryIdWithCoordinates));
};
