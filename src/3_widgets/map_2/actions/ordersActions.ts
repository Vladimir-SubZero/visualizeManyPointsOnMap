import { Nullable } from '@/6_shared/types/frontend-utility-types.ts'
import { Order } from '@/6_shared/types/dto-types.ts'
import { getFeatureByOrder } from '@/3_widgets/map_1/ol/features/getFeatureByOrder.ts'
import { Feature } from 'ol'
import Point from 'ol/geom/Point'
import { ordersClusteredSource, ordersSource } from '@/3_widgets/map_1/ol/source/orders.ts'


export const loadOrdersOnGisMap = (orders: Nullable<Order[]>) => {
  if (!orders) return;

  const allCreatedFeatures = createFeaturesByAllOrders(orders)

  ordersSource.clear();
  ordersClusteredSource.clear();

  ordersSource.addFeatures(allCreatedFeatures);
  ordersClusteredSource.addFeatures(allCreatedFeatures);
};


const createFeaturesByAllOrders = (allOrders: Order[]): Feature<Point>[] => {
  let counter = allOrders.length;
  const features = [];
  while (counter) {
    const currentStop = allOrders[counter - 1];
    features.push(getFeatureByOrder(currentStop))
    counter--;
  }
  return features
};
