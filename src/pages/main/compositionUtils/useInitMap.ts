import { Map } from "ol";
import { DragPan } from 'ol/interaction';
import Kinetic from 'ol/Kinetic';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import { XYZ } from 'ol/source';

import { onMounted, onUnmounted } from 'vue'

let map: Map;
let initMap: () => void;

export const getMapInstance = (): Map => {
  return map as Map;
};

export const updateMap = (): void => {
  if (map) {
    map.dispose();
  }

  initMap();
};

export const useInitMap = (): void => {
    initMap = async (): Promise<void> => {
     
  
      map = new Map({
        interactions: [
          new DragPan({
            kinetic: new Kinetic(-50, 30, 1000),
            condition: (e) => true,
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
    
  
    
    };
  
    onMounted(() => {
      updateMap()
    });
    onUnmounted(() => {
      
    });
  };
  