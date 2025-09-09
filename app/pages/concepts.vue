<script setup lang="ts">
const baseQuery = `/api/blogs?type=concept`;
const { data: conceptDocs } = await useFetch(baseQuery);
const { data: series } = await useFetch('/api/concepts/series');


const state = reactive({
  sort: 'desc',
  series: 'any'
});

const filteredPosts = computed(() => {
  if(!conceptDocs) return [];
  let list = [...conceptDocs.value];
  if(state.sort === 'asc'){
    list.sort((a,b) => {
      if(a.createdAt < b.createdAt){
        return -1;
      }
      if(a.createdAt > b.createdAt){
        return 1;
      }
      return 0;
    });
  }

  if(state.series !== 'any'){
    list = list.filter((doc) => doc.series === state.series);
  }
  return list;
});

</script>

<template>
  <div>
    <h1 class="tac">Concepts</h1>

    <div class="flex jc gap">
      <div class="flex control">
        <label for="sort-select">Sort</label>
        <select name="sort" id="sort-select" v-model="state.sort">
          <option value="desc" selected>Newest</option>
          <option value="asc">Oldest</option>
        </select>
      </div>
      <div class="flex control">
        <label for="series-select">Series</label>
        <select name="series-select" id="series-select" v-model="state.series">
          <option value="any" selected>Any</option>
          <option v-for="name in series" :key="name" :value="name">{{ name }}</option>
          <option value="">No Series</option>
        </select>
      </div>
    </div>

    <PostCard :posts="filteredPosts" url="concepts" />
  </div>
</template>

<style scoped>
.control{
  gap: .2rem;
}
</style>