import { Run, Vehicle } from '@/common/types/dto-types';
import { getArrayOnly } from '@/common/utils/parse-utils/parse-utils';

export const getRunsByVehicles = (vehicles: Vehicle[]): Run[] => {
  const runs = vehicles.reduce<Run[]>((acc, vehicle, index): Run[] => {
    if (!vehicle.runs) return acc;
    return acc.concat(vehicle.runs) as Run[];
  }, []);
  return getArrayOnly(runs);
};
