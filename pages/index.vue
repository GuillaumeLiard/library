<template>
  <section class="container">
    <div class="main">
      <!-- <app-logo/> -->
      <h1 class="title">
        specs
      </h1>
      <div class="content">
        Première partie.
      </div>
      <Tree/>
      <nuxt-link to="/library">Library</nuxt-link>
    </div>
  </section>
</template>

<script>
import Tree from '~/components/Tree.vue'

export default {
  components: {
    Tree
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.main {
  width: 100%;
  height: 100%;
  background-color: hsl(240, 20%, 70%);;
}
</style>
