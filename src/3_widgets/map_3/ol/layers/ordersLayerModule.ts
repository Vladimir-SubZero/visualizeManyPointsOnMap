import { Vector as VectorSource } from 'ol/source';
import Point from 'ol/geom/Point';
import { ordersSource } from '@/3_widgets/map_3/ol/source/orders.ts'
import { Feature } from 'ol'
import { orderIconsModule } from '@/3_widgets/map_3/utils/getMapIcons.ts'
import VectorImageLayer from 'ol/layer/VectorImage'

export const ordersLayerModule = (function () {
  const ordersLayer = new VectorImageLayer<VectorSource<Feature<Point>>>({
    source: ordersSource,
    style: function (feature) {
      return orderIconsModule.getOrderIcon(feature as Feature<Point>);
    },
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



