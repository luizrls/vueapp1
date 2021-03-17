<template>
    <div>
        <Header/>
        <Navigation/>
        <Content>
            <slot />
        </Content>
        <Footer/>
    </div>
    
</template>

<script>
    import Header from '@/components/mainHeader/Header.vue'
    import Navigation from '@/components/mainNavigation/Navigation.vue'
    import Content from '@/components/mainContent/Content.vue'
    import Footer from '@/components/mainFooter/Footer.vue'

export default {
    name: 'MainLayout',
    // props: {
    //     conteudo: {type: Object}
    // },
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