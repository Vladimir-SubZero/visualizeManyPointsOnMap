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
    <el-menu-item index="1">
      <router-link to="/visualizeManyPointsOnMap">
        <div class="wrapLink">
          <span class="titleLink">Карта №1</span>
          <span class="subTitleLink">Без оптимизаций</span>
        </div>
      </router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/map_2">
        <div class="wrapLink">
          <span class="titleLink">Карта №2</span>
          <span class="subTitleLink">Кеширование текстур</span>
        </div>
      </router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to="/map_3">
        <div class="wrapLink">
          <span class="titleLink">Карта №3</span>
          <span class="subTitleLink">Растрирование</span>
        </div>
      </router-link>
    </el-menu-item>
    <el-menu-item index="4">
      <router-link to="/map_4">
        <div class="wrapLink">
          <span class="titleLink">Карта №4</span>
          <span class="subTitleLink">Статические стили</span>
        </div>
      </router-link>
    </el-menu-item>
    <el-menu-item index="5">
      <router-link to="/map_5">
        <div class="wrapLink">
          <span class="titleLink">Карта №5</span>
          <span class="subTitleLink">Кластеризация</span>
        </div>
      </router-link>
    </el-menu-item>
    <el-menu-item index="6">
      <router-link to="/map_6">
        <div class="wrapLink">
          <span class="titleLink">Карта №6</span>
          <span class="subTitleLink">WebGL</span>
        </div>
      </router-link>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const activeIndex = ref('2');

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
      .wrapLink
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column
      .titleLink
        font-size: 16px
        line-height: 16px
        color: white
        margin-bottom: 4px

      .subTitleLink
        font-size: 12px
        line-height: 12px
        color: #bdbfd2
</style>
