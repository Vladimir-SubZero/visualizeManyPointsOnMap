<script setup lang="ts">
import Menu from '@/6_shared/ui/Menu.vue';

</script>

<template>
  <div class="root">
    <div class="root__menu"><Menu /></div>
    <div class="root__content">
      <router-view></router-view>
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
      flex-direction: column
    &__map
      width: 100%
    &__wrapMapAndLoader
      display: flex
      width: 100%
</style>
