<template>
  <div id="app">
    <font-awesome-icon icon="user-secret" />
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
      
  </div>
</template>

<script>
import MainLayout from '@/components/mainLayout/MainLayout.vue'


export default {
  name: 'App',
  components: {
    MainLayout
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
