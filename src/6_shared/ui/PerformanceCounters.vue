<script setup lang="ts">
import { computed } from 'vue'
import { useOrdersStore } from '@/6_shared/services/pinia-stores/ordersStore'

const ordersStore = useOrdersStore()

const durationRequest = computed(() => {
  return Math.abs(ordersStore.getDurationRequest.toFixed(2))
})

const durationScripts = computed(() => {
  return Math.abs(ordersStore.getDurationScripts.toFixed(2))
})



</script>

<template>
  <div class="performanceCounters">
    <div class="durationRequest"><span>Длительность запроса:</span> <span> {{durationRequest}} ms</span> </div>
    <div class="durationRequest"><span>Длительность выполнения скриптов:</span> <span> {{durationScripts}} ms</span></div>
  </div>
</template>

<style scoped lang="sass">
.performanceCounters
  background: #f6f3ff
  color: #000
  display: flex
  flex-direction: column
  align-items: flex-start
  padding: 10px
</style>