import { Map } from 'ol';
import { DragPan } from 'ol/interaction';
import Kinetic from 'ol/Kinetic';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import { XYZ } from 'ol/source';

//Pattern singleton
export class OpenLayersMap {
  private static mapInstance: Map;
  private static createMapInstance() {
    return new Map({
      interactions: [
        new DragPan({
          kinetic: new Kinetic(-50, 30, 1000),
          condition: () => true,
        }),
      ],
      view: new View({
        center: [4173480.1573393, 7497711.1493924055],
        zoom: 10,
      }),
      layers: [
        new Tile({
          source: new XYZ({
            url: 'http://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}',
            tilePixelRatio: 2,
          }),
          // source: new OSM()
        }),
      ],
      target: 'map',
    });
  }
  public static getMap() {
    if (!OpenLayersMap.mapInstance) {
      OpenLayersMap.mapInstance = OpenLayersMap.createMapInstance();
    }
    return OpenLayersMap.mapInstance;
  }

  public static updateMap() {
    OpenLayersMap.getMap()?.dispose();
    OpenLayersMap.mapInstance = OpenLayersMap.createMapInstance();
  }

  public static destroyMap() {
    OpenLayersMap.getMap()?.dispose();
  }
}
