<script setup lang="ts">
const props = defineProps({
  path: String,
});
</script>

<template>
  <img :src="`/images/${path}`" alt="">
</template>

<style scoped>

</style>