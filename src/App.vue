<script setup lang="ts">
import Menu from './common/components/Menu.vue';
import LoaderOrders from '@/common/components/LoaderOrders.vue'
</script>

<template>
  <div class="root">
    <div class="root__menu"><Menu /></div>
    <div class="root__content">
      <div class="root__map">
        <router-view></router-view>
      </div>
      <div class="root__loaderOrders">
        <LoaderOrders/>
      </div>
    </div>

  </div>
</template>

<style scoped lang="sass">
  .root
    display: flex
    flex-direction: column
    width: 100%
    height: 100%
    &__menu
      width: 100%
      height: 60px
    &__content
      display: flex
      width: 100%
    &__map
      width: 100%
</style>
