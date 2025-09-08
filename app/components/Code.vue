<script setup lang="ts">
const props = defineProps({
  content: String,
  lang: String,
});
</script>

<template>
  
  <Shiki class="section" :lang="lang" :code="content" />
  
</template>

<style scoped>
.section{
  padding: .4rem 0;
}
</style>