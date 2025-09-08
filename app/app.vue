<script setup lang="ts">
const colorMode = useColorMode();
function changeTheme(color: 'light' | 'dark'){
  colorMode.preference = color;
}

</script>

<template>
  <header class="pad">
    <nav class="flex jsb">
      <NuxtLink to="/">JM</NuxtLink>
      <div class="flex gap-4">
        <NuxtLink to="/projects">Projects</NuxtLink>
        <NuxtLink to="/concepts">Concepts</NuxtLink>
        <div class="light-dark">
          <button class="theme-btn" @click="changeTheme('dark')" v-if="colorMode.value !== 'dark'">
            <img class="img-svg" src="./assets/icons/lightmode.svg" alt="">
          </button>
          <button class="theme-btn" @click="changeTheme('light')" v-else>
            <img class="img-svg" src="./assets/icons/darkmode-light.svg" alt="">
          </button>
        </div>
      </div>
      <div></div>
    </nav>
  </header>

  <NuxtPage />
</template>

<style scoped>
.theme-btn{
  background: none;
  padding: 0;
  box-shadow: none;
  cursor: pointer;
  line-height: 0;
}
.theme-btn:hover{
  background: rgba(128, 128, 128, 0.212);
}
</style>
