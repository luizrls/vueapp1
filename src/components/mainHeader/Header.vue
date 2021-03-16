<template>
<div class='header'>
    Header
    <Navbar />
</div>
</template>

<script>
import Navbar from "@/components/mainHeader/Navbar"
export default {
    name: 'header',
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