<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a href="#" class="navbar-brand">My App</a>
    <div class="collapse navbar-collapse" id="navbarSite">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a href="#" class="nav-link">Início</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link dropdown-toggle" id="dropdownSite" data-bs-toggle="dropdown" aria-expanded="false">Produtos</a>
                <div class="dropdown-menu" aria-labelledby="dropdownSite">
                    <a href="#" class="dropdown-item">Produto 1</a>
                    <!-- <div class="dropdown-divider"></div> -->
                    <a href="#" class="dropdown-item">Produto 2</a>
                    <a href="#" class="dropdown-item">Produto 3</a>
                    <a href="#" class="dropdown-item">Produto 4</a>
                </div>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contato</a>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
export default {
name: 'Navbar',
//   props: {
//     data: String
//   }
// components: {

//   }
}
</script>

<style scoped>

</style>