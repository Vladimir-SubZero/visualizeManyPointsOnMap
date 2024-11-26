import { Vector as VectorSource } from 'ol/source';
import Point from 'ol/geom/Point';
import { ordersSource } from '@/3_widgets/map_4/ol/source/orders.ts'
import { Feature } from 'ol'
import VectorLayer from 'ol/layer/Vector'

export const ordersLayerModule = (function () {
  const ordersLayer = new VectorLayer<VectorSource<Feature<Point>>>({
    source: ordersSource,
    renderBuffer: 40,
    zIndex: 10,
  });
  ordersLayer.setProperties({ title: 'ordersLayer' }, true);
  return {
    getOrdersLayer() {
      return ordersLayer;
    },
  };
})();



