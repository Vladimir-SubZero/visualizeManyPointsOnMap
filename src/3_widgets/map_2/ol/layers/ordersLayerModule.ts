import VectorImageLayer from 'ol/layer/VectorImage';
import { Vector as VectorSource } from 'ol/source';
import Point from 'ol/geom/Point';
import { ordersClusteredSource, ordersSource } from '@/3_widgets/map_1/ol/source/orders.ts'
import { Feature } from 'ol'
import { getOrderIcon } from '@/3_widgets/map_1/utils/getMapIcons.ts'

export const ordersLayerModule = (function () {
  const ordersLayer = new VectorImageLayer<VectorSource<Feature<Point>>>({
    source: ordersSource,
    style: function (feature) {

      return getOrderIcon(feature as Feature<Point>);

    },
    zIndex: 10,
  });
  const ordersClusteredLayer = new VectorImageLayer<VectorSource<Feature<Point>>>({
    source: ordersClusteredSource,
    zIndex: 11,
  });
  ordersLayer.setProperties({ title: 'ordersLayer' }, true);
  ordersClusteredLayer.setProperties({ title: 'ordersLayer' }, true);
  return {
    getOrdersLayer() {
      return ordersLayer;
    },
    getOrdersClusteredLayer() {
      return ordersClusteredLayer;
    },
  };
})();
