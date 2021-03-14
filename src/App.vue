<template>
  <div id="app">
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
      
  </div>
</template>

<script>
import MainLayout from '@/components/mainLayout/MainLayout.vue'
//  import HelloWorld from './components/HelloWorld.vue'
// import Comments from './components/feedback/Comments.vue'
// import DefaultLayout from './components/layout/DefaultLayout.vue'


export default {
  name: 'App',
  components: {
    MainLayout
    // HelloWorld,
    // DefaultLayout
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
