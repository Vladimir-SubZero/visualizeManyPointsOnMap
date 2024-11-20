import { Nullable } from '@/6_shared/types/frontend-utility-types.ts'
import { Order } from '@/6_shared/types/dto-types.ts'
import { getFeatureByOrder } from '@/3_widgets/map_3/ol/features/getFeatureByOrder.ts'
import { Feature } from 'ol'
import Point from 'ol/geom/Point'
import { ordersSource } from '@/3_widgets/map_3/ol/source/orders.ts'
import { useOrdersStore } from '@/6_shared/services/pinia-stores/ordersStore'


export const loadOrdersOnGisMap = (orders: Nullable<Order[]>) => {
  const startDurationScripts = window.performance.now();
  const ordersStore = useOrdersStore()
  if (!orders) return;
  const allCreatedFeatures = createFeaturesByAllOrders(orders);

  ordersSource.clear();

  ordersSource.addFeatures(allCreatedFeatures);
  const endDurationScripts = window.performance.now();
  const timeScripts = endDurationScripts - startDurationScripts;
  ordersStore.setDurationScripts(timeScripts);
};


const createFeaturesByAllOrders = (allOrders: Order[]): Feature<Point>[] => {
  let counter = allOrders.length;
  const features = [];
  while (counter) {
    const currentStop = allOrders[counter - 1];
    features.push(getFeatureByOrder(currentStop));
    counter--;
  }
  return features
};
