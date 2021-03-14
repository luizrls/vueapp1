<template>
    <div class="DefaultLayout">
        Main
        <Header/>
        <Navigation/>
        <Content/>
        <Footer/>
    </div>
</template>

<script>
    import Header from './Header.vue'
    import Navigation from './Navigation.vue'
    import Content from './Content.vue'
    import Footer from './Footer.vue'
export default {

name: 'DefaultLayout',
//   props: {
//     data: String
//   }
components: {
    Header,
    Navigation,
    Content,
    Footer
  }
}
</script>

<style scoped>

</style>