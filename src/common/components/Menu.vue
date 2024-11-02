<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item index="1"><router-link to="/visualizeManyPointsOnMap">Карта №1</router-link></el-menu-item>
    <el-menu-item index="2"><router-link to="/laflet">Карта №2</router-link></el-menu-item>
    <el-menu-item index="3"><router-link to="/yandex">Карта №3</router-link></el-menu-item>

  </el-menu>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const activeIndex = ref('1');

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

onMounted(() => {
  router.push('/visualizeManyPointsOnMap')
})

</script>

<script lang="ts">
  export default {
    name: 'PageMenu',
  };
</script>

<style lang="sass" scoped>
  .root
      width: 100%
      height: 100%
      display: flex
      flex-direction: row
      color: #ccc
      &__menu_ol
          color: red
</style>
