<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <DefaultLayout />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Comments from './components/feedback/Comments.vue'
import DefaultLayout from './components/layout/DefaultLayout.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    DefaultLayout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
