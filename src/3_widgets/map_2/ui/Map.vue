<template>
  <div class="rootMap">
    <div id="map" class="map"></div>

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


const ordersStore = useOrdersStore()
useMap();

onMounted(() => {

  ordersStore.loadOrders(100)
})
</script>

<style lang="sass">
  .rootMap
      width: 100%
      height: 100%
      display: flex
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
