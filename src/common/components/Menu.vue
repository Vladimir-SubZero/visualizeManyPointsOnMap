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
      <el-menu-item index="1"><router-link to="/ol">Open Layers</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/laflet">Laflet</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to="/yandex">Яндекс</router-link></el-menu-item>
      <el-menu-item index="4"><router-link to="/google">Google</router-link></el-menu-item>
    </el-menu>
</template>
  
<script lang="ts" setup>
  import { ref } from 'vue'
  
  const activeIndex = ref('1')

  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  

<script lang="ts">
export default {
    name: 'Menu', 
}
</script>


<style lang='sass' scoped>
.root
    width: 100%
    height: 100%
    display: flex
    flex-direction: row
    color: #ccc
    &__menu_ol
        color: red

</style>