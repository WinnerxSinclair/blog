<script setup lang="ts">
import Title from '~/components/Title.vue'
import Paragraph from '~/components/Paragraph.vue';
import List from '~/components/List.vue';
import Code from '~/components/Code.vue';
import Image from '~/components/Image.vue'
import { formatDate } from '#imports';
definePageMeta({
  alias: ['/concepts/:id', '/projects/:id'],
})
const route = useRoute();
const { data: post } = await useFetch(`/api/blogs/${route.params.id}`);
console.log(post.value)

const { data: nextPost } = 
  await useFetch(`/api/blogs/next`, {
    query: { 
      series: post.value.series,
      seriesNumber: post.value.seriesNumber + 1
    }
  });

console.log(nextPost.value);
const formattedDate = formatDate(post.value.createdAt);
const componentMap = {
  'title': Title,
  'paragraph': Paragraph,
  'list': List,
  'code': Code,
  'image': Image
}
</script>

<template>
  <div class="everything-wrapper" v-if="post">
    <div class="content-wrapper">
      <div class="head-wrap">
        <h1>{{ post.title }}</h1>
        <div>{{ formattedDate }}</div>
        <div class="italics">{{ post.series }} #{{ post.seriesNumber }}</div>
        <div class="pad-1">{{ post.subtitle }}</div>
        <div class="flex gap">
          <img class="icon" v-for="icon in post.icons" :key="icon" :src="`/${icon}`" alt="">
        </div>
      </div>
      <component 
        v-for="(comp, i) in post.content" :key="i" 
        v-bind="comp"  
        :is="componentMap[comp.type]"    
      />
      <div v-if="nextPost" class="next-post-wrap">
        <div>Next in Series:</div>
        <NuxtLink class="next-post-link" :to="nextPost.slug">{{ post.series }} #{{ post.seriesNumber + 1 }}: {{ nextPost.title }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon{
  width: 30px;
}
.everything-wrapper{
  display: flex;
  justify-content: center;
}
.content-wrapper{
  width: clamp(350px, 100%, 75ch);
  padding: 1rem;
}
.italics{
  font-style: italic;
}
.pad-1{
  padding: .4rem 0;
}
.head-wrap{
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.815);
}
.next-post-wrap{
  margin-top: 2rem;
  display: inline-block;
}
.next-post-wrap > div{
  font-weight: bold;
}
.next-post-link{
  color: rgb(214, 112, 214);
}
</style>