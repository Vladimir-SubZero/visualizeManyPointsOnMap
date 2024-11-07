<script setup lang="ts">

import { useOrdersStore } from '@/6_shared/services/pinia-stores/ordersStore'
import { LoadingOrdersCount } from '@/6_shared/constants'

const ordersStore = useOrdersStore()
const loadOrders = (count: number) => {
  ordersStore.loadOrders(count)
}

</script>

<template>
  <div class="listOrders">
    <div class="counterOrders">Загрузить заказы</div>
    <div class="list">
      <div v-for="count in LoadingOrdersCount" class="counterTile" @click="loadOrders(count)">
        <div> {{count}}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.listOrders
  width: 210px
  background: #f6f3ff
  color: #000
  .counterOrders
    border-bottom: 1px solid #000
  .counterTile
    height: 30px
    border-bottom: 1px solid #0007
    display: flex
    align-items: center
    padding: 4px
    cursor: pointer
    &_number
      font-size: 12px
      margin-right: 5px
</style>