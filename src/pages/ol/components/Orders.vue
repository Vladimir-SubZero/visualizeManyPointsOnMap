<template>
  <div class="rootOrders">
    <div id="map" class="map"></div>
    <div class="listOrders">
      <div class="counterOrders">Всего заказов: 8</div>
      <div class="list">
        <div v-for="(order, key) in orders" :key="key" class="orderTile">
          <div class="orderTile_number">{{ order.id }}</div>
          <div>{{ order.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'OrdersOnMap',
  };
</script>
<script setup lang="ts">
  import { useMap } from '../compositionUtils/useOlMap.ts';
  import { orders } from '../../../common/data/index.ts'
  useMap();
  
</script>

<style lang="sass">
  .rootOrders
      width: 100%
      height: 100%
      display: flex
  .map
      width: 100%
      height: calc(100vh - 60px)
  .ol-zoom
      display: flex
      flex-direction: column
      width: 25px
      height: auto
      position: absolute
      bottom: 20px
      right: 10px
      border: 1px solid #fcf
      border: none

  .ol-zoom-in
      margin-bottom: 2px
      border-radius: 5px
  .ol-zoom-out
      border-radius: 5px
  .ol-rotate
      display: none
  .listOrders
      width: 210px
      background: #fff4ea
      color: #000
  .counterOrders
      border-bottom: 1px solid #000
  .orderTile
    height: 30px
    border-bottom: 1px solid #0007
    display: flex
    align-items: center
    padding: 4px
    &_number
      font-size: 12px
      margin-right: 5px
</style>
