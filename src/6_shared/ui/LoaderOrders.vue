<script setup lang="ts">

import { useOrdersStore } from '@/6_shared/services/pinia-stores/ordersStore'
import { LoadingOrdersCount } from '@/6_shared/constants'
import { computed } from 'vue';


const emits = defineEmits<{
  (e: 'loadOrders', countOrders: number): void;
}>()

const ordersStore = useOrdersStore();
const activeItem = computed(() => ordersStore.activeCountOrders);


const loadOrders = (count: number) => {
  emits('loadOrders', count)
}

</script>

<template>
  <div class="listOrders">
    <div class="counterOrders">Загрузить заказы</div>
    <div class="list">
      <div
          v-for="count in LoadingOrdersCount"
          class="counterTile"
          :class="{'active': activeItem === count}"
          @click="loadOrders(count)"
      >
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
  .active
    background-color: #ffb882
</style>