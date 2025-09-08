<script setup lang="ts">
const props = defineProps({
  content: Array,
});
</script>

<template>
  <ul>
    <li v-for="(item, i) in content" :key="i" v-html="item"></li>
  </ul>
</template>