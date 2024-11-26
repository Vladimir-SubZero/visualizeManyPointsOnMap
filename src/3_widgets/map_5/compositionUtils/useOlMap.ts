import { OpenLayersMap } from '../utils/OpenLayersMap.ts';
import { onMounted, onUnmounted } from 'vue';
// import { draw, drawVectorLayer } from '@/3_widgets/map_5/ol/interactions'

//Применить паттерн flyweight

export const useMap = (): void => {
  onMounted(() => {

    OpenLayersMap.updateMap();
    // OpenLayersMap.getMap().addLayer(drawVectorLayer)
    // OpenLayersMap.getMap().addInteraction(draw())
  });
  onUnmounted(() => {
    OpenLayersMap.destroyMap();
  });
};
