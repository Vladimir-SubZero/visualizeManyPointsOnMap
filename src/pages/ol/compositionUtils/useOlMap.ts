import { OpenLayersMap } from './../utils/OpenLayersMap';
import { onMounted, onUnmounted } from 'vue';

//Применить паттерн flyweight

export const useMap = (): void => {
  onMounted(() => {
    OpenLayersMap.updateMap();
  });
  onUnmounted(() => {
    OpenLayersMap.destroyMap();
  });
};
