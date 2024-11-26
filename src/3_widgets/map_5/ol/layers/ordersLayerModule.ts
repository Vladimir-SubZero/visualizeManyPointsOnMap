import { Vector as VectorSource } from 'ol/source'
import Point from 'ol/geom/Point';
import { ordersSource } from '@/3_widgets/map_5/ol/source/orders.ts'
import { Feature } from 'ol'
import VectorLayer from 'ol/layer/Vector'
import { OrdersCluster } from '@/3_widgets/map_5/ol/source/ordersCluster.ts'
import { orderIconsModule } from '@/3_widgets/map_5/utils/getMapIcons.ts'

export const ordersLayerModule = (function () {
  const clusterSource = new OrdersCluster({
    distance: 100,
  });
  clusterSource.setSource(ordersSource);

  const ordersLayer = new VectorLayer<VectorSource<Feature<Point>>>({
    style: (feature) => {
      return orderIconsModule.getOrderIcon(feature as Feature<Point>);
    },
    renderBuffer: 40,
    zIndex: 10,
  });
  ordersLayer.setSource(clusterSource as unknown as VectorSource<Feature<Point>>)
  ordersLayer.setProperties({ title: 'ordersLayer' }, true);
  return {
    getOrdersLayer() {
      return ordersLayer;
    },
  };
})();



