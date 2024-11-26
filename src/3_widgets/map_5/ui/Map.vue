<template>
  <div class="rootMap">
    <div class="rootMap__wrapMapAndLoader">
      <div class="rootMap__map">
        <div id="map" class="map"></div>
      </div>
      <div class="rootMap__loaderOrders">
        <LoaderOrders @loadOrders="loadOrders"/>
      </div>
    </div>
    <div class="root__counters">
      <PerformanceCounters />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Map',
};
</script>
<script setup lang="ts">

import { onMounted } from 'vue'
import { useOrdersStore } from '@/6_shared/services/pinia-stores/ordersStore'
import { useMap } from '../compositionUtils/useOlMap.ts';
import { loadOrdersOnGisMap } from '@/3_widgets/map_5/actions/ordersActions.ts'
import LoaderOrders from '@/6_shared/ui/LoaderOrders.vue'
import PerformanceCounters from '@/6_shared/ui/PerformanceCounters.vue';

const ordersStore = useOrdersStore()
useMap();

const loadOrders = async (countOrders: number) => {
  ordersStore.setActiveCountOrders(countOrders);
  await ordersStore.loadOrders(countOrders);
  loadOrdersOnGisMap(ordersStore.getOrders);
}

onMounted(() => {
  loadOrders(ordersStore.activeCountOrders)
})
</script>

<style lang="sass">
.rootMap
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  &__map
    width: 100%
  &__wrapMapAndLoader
    display: flex
    width: 100%
.map
  width: 100%
  height: 100%
.ol-zoom
  display: flex
  flex-direction: column
  width: 25px
  height: auto
  position: absolute
  bottom: 20px
  right: 10px
  border: none

.ol-zoom-in
  margin-bottom: 2px
  border-radius: 5px
.ol-zoom-out
  border-radius: 5px
.ol-rotate
  display: none

</style>
