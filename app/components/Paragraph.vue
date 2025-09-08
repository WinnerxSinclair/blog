<script setup lang="ts">
const props = defineProps({
  content: String,
});
</script>

<template>
  <p class="section" v-html="content"></p>
</template>

<style scoped>
.section{
  padding: .4rem 0;
  white-space: pre-line;
}
</style>