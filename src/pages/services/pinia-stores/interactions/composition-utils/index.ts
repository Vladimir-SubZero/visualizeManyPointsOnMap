// import { onBeforeMount, onUnmounted } from 'vue';
// import { eventEmitter } from '@/features/planning/planning-page-event-emitter';
// import { usePlanningServerDataStore } from '@/features/planning/pages/orders-planning-page/services/pinia-stores/planning-server-data';
// import { useDistributionCentersStore } from '@/common/services/pinia-stores/distribution-centers';
// import {
//   BodyUnscheduledStops,
//   Run,
//   Scene,
//   ScheduledStop,
//   SchedulingZones,
//   Orders,
// } from '@/common/types/dto-types';
// import { gisMapFeaturesOfStopsModule } from '@/features/planning/pages/orders-planning-page/modules/planning-map/composition-utils/features/stops/featuresModuleStore';
// import {
//   addOrders,
//   loadStopsOnGisMap,
//   updateOrders,
//   removeOrders,
// } from '@/features/planning/pages/orders-planning-page/modules/planning-map/composition-utils/source/stops/useActionsOfStops';
// import cloneDeep from 'lodash/cloneDeep';
// import { updatePlanningMap } from '@/features/planning/pages/orders-planning-page/modules/planning-map/composition-utils/useInitMap';
// import { moduleForManagingRouteLayersOnGisMap } from '@/features/planning/pages/orders-planning-page/modules/planning-map/composition-utils/layers/moduleForManagingRouteLayersOnGisMap';
// import { useLocationIconsLayer } from '@/features/planning/pages/orders-planning-page/modules/planning-map/composition-utils/layers/useLocationIconsLayer';
// import { usePlanningUiInteractionStore } from '@/features/planning/pages/orders-planning-page/services/pinia-stores/ui-interactions';




// export const useInitListeners = (): void => {

//   const removeOrdersFromGisMap = (ordersIds: number[]): void => {
//     removeOrders(ordersIds);
//   };
//   const addOrdersToGisMap = (orders: Array<Orders>): void => {
//     addOrders(orders);
//   };

//   const updateOrdersOnGisMap = (data: {
//     newOrders: Array<Orders>;
//     oldOrdersIds?: number[];
//   }): void => {
//     updateOrders(data.newOrders, data.oldOrdersIds);
//   };


//   onBeforeMount(() => {
//     eventEmitter.on('removeOrdersFromGisMap', removeOrdersFromGisMap);
//     eventEmitter.on('addOrdersToGisMap', addOrdersToGisMap);
//     eventEmitter.on('updateOrdersOnGisMap', updateOrdersOnGisMap);
//   });

//   onUnmounted(() => {
//     eventEmitter.removeListener('removeOrdersFromGisMap', removeOrdersFromGisMap);
//     eventEmitter.removeListener('addOrdersToGisMap', addOrdersToGisMap);
//     eventEmitter.removeListener('updateOrdersOnGisMap', updateOrdersOnGisMap);
//   });
// };
