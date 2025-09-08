<script setup lang="ts">
import { formatDate } from '#imports';
const props = defineProps<{
  posts: any[],
  url: string
}>()


const modifiedPosts = computed(() => {
  return props.posts.map((post) => ({
    ...post,
    formattedDate: formatDate(post.createdAt)
  }))
});


</script>

<template>
  <ul class="blog-list">
    <li v-for="(post, i) in modifiedPosts" :key="post._id">
      <NuxtLink class="post" :to="`/${url}/${post.slug}`">
        <div class="flex jsb">
          <div>

            <div class="series-info">{{ post.series }} #{{ post.seriesNumber }}</div>
            <h3 class="post-title">{{ post.title }}</h3>
          </div>
          <div class="flex gap">
            <img class="icon" v-for="icon in post.icons" :key="icon" :src="`/${icon}`" alt="">
          </div>
          <div>{{ post.formattedDate || post.createdAt }}</div>
        </div>
        
        <p class="meta-description">
          Learning TypeScript from 0 with a Vue+Vite Todo app.
        </p>
      </NuxtLink>  
    </li>
  </ul>
</template>

<style scoped>
.icon{
  width: 25px;
  height: 25px;
}
.blog-list{
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  max-width: 75ch;
  margin-inline: auto;
}
.series-info{
  font-style: italic;
}
.post-title{
  font-family:'Times New Roman', Times, serif;
}
.post{
  display: block;
  padding: .5rem 1rem 1rem 1rem;
  background: var(--card-bg);
}
.meta-description{
  margin-top: .2rem;
}
</style>
