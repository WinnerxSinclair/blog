<script setup lang="ts">
const { data: projectDocs } = await useFetch(`/api/blogs?type=project`)
console.log(projectDocs.value);
</script>

<template>
  <div>
    <h1 class="tac">Projects</h1>
    <PostCard :posts="projectDocs" url="projects" />
  </div>
</template>