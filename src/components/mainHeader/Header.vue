<template>
<!-- http://via.placeholder.com/1920x700 -->
<div class='header'>
    <Navbar v-bind:menu="menu"/>
</div>
</template>

<script>
import Navbar from "@/components/mainHeader/Navbar"
import {menu} from "./Config.ts"
export default {
    name: 'header',
    data() {
        return {
            menu: menu
        }
    },
//   props: {
//     data: String
//   }

    components:{
        Navbar
    }
}
</script>

<style scoped>

</style>