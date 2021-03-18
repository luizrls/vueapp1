<template>
<!-- http://via.placeholder.com/1920x700 -->
<div class='header'>
    <Navbar v-bind:menu="menu"/>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="http://via.placeholder.com/1920x700" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="http://via.placeholder.com/1920x700" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="http://via.placeholder.com/1920x700" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
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