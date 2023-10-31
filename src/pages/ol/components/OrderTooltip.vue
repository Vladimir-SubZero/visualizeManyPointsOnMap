<template>
  <div>Tooltip</div>
</template>

<script lang="ts">
  export default {
    name: 'OrderTooltip',
  };
</script>
<script lang="ts" setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    message: {
      type: String,
      required: false,
      default: '1',
    },
  });

  console.log(props.message);
</script>

<style lang="sass" scoped></style>
