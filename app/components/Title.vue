<script setup lang="ts">
const props = defineProps({
  content: String,
});
</script>

<template>
  <div class="mt-3" v-html="content"></div>
</template>

<style scoped>

</style>