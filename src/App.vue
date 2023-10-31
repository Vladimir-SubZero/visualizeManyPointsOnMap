<script setup lang="ts">
  import Menu from './common/components/Menu.vue';
</script>

<template>
  <div class="root">
    <div class="root__menu"><Menu /></div>
    <div class="root__contentPages">
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
</style>
