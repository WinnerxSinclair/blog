<script setup lang="ts">

const { data: blogMeta } = await useFetch('/api/blogs/home');

</script>

<template>
  <div> 
    <section class="content tac">
      <h1 class="tac hero-font">JAM Blog</h1>
      <img class="hero tac" src="https://cdn.pixabay.com/photo/2022/09/08/17/15/cafe-7441426_640.png" alt="">
      <p class="tac">
        Hello, I'm Jonathan, a novice web dev. I write about concepts I'm learning and projects I'm
        working on. Expect to see most frontend in Vue.js, backend in Express or Nuxt, and MongoDB for database.
      </p>
      
      <!-- <p>
        Greetings voyager. My name is Jonathan and this is my tech blog. Currently I'm 
        a novice web developer trying my best to learn stuff. There's a lot of stuff...that's why I made this blog:
        to share what I'm learning in hopes to teach myself and others. 
        <br>
        <br>
        My focus is in web dev, and you'll
        usually see me using Vue stuff for frontend and MongoDB for database. For server I either use Express or
        Nuxt. Then there's Vite, CSS, HTML, TypeScript, etc etc...I'll discuss concepts and make projects for all this stuff. Check
        out whatever you're interested in below.
      </p> -->
    </section>
    
    <main class="content">
      <section>
        <div class="flex ac gap">
          <h2 class="tac">Recent Project Updates</h2>
          <NuxtLink class="all-btn a-btn" to="/projects">View All Projects</NuxtLink>
        </div>
        <PostCard :posts="blogMeta.projects" url="projects" />
      </section>

      <section>
        <div class="flex ac gap">
          <h2 class="tac">Recent Concepts Updates</h2>
          <NuxtLink class="all-btn a-btn" to="/concepts">View All Concepts</NuxtLink>
        </div>
        <PostCard :posts="blogMeta.concepts" url="concepts" />
      </section>
    </main>
  </div>
</template>

<style scoped>
.content{
  max-width: 75ch;
  margin: 0 auto;
}
.content > section{
  margin-top: 2rem;
}
.icon{
  width: 25px;
}
ul{
  list-style: none;
}
.all-btn{
  padding: .2em .5em;
  /* background: white; */
}
/* .blog-list{
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
} */
.series-info{
  font-style: italic;
}


.hero{
  width: 225px;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
}

</style>

