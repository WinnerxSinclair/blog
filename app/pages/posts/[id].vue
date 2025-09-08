<script setup lang="ts">
import Title from '~/components/Title.vue'
import Paragraph from '~/components/Paragraph.vue';
import List from '~/components/List.vue';
import Code from '~/components/Code.vue';
import Image from '~/components/Image.vue'
definePageMeta({
  alias: ['/concepts/:id', '/projects/:id'],
})
const route = useRoute();
const { data: post } = await useFetch(`/api/blogs/${route.params.id}`);
console.log(post.value);

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
</style>