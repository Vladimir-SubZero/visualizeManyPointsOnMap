type Result = [number, number, number, number][];
type ResultItem = Result[number];
export const mapCoordinateForRouteAlongRoad = (coordsRoutePoints: number[][]): Result => {
  const mapCoordinates = coordsRoutePoints.reduce<Result>((acc, currentValue, index) => {
    let lastArray: ResultItem;
    let long: number;
    let lat: number;
    let newLastArray;
    if (index === 0) {
      return [[...currentValue]] as unknown as Result;
    } else if (index === 1) {
      return [[...acc[0], ...currentValue]] as unknown as Result;
    } else {
      lastArray = acc[index - 2];
      long = lastArray[2];
      lat = lastArray[3];
      newLastArray = [long, lat, ...currentValue];
      const newArray = [...acc, [...newLastArray]];
      return newArray as unknown as Result;
    }
  }, []);
  return mapCoordinates;
};
