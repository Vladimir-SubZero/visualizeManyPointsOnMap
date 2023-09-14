
<template>
    <div class="root">
        <div id="map" class="map">qqq</div>
    </div>
</template>

<script setup lang="ts">
import { useInitMap } from '../compositionUtils/useInitMap.ts'

useInitMap()


</script>

<style scoped>
.root {
    width: 100%;
    height: 100%;
}
.map {
    width: 100vw;
    height: 100vh;
}
</style>