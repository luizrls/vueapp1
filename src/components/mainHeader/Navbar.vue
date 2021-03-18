<template>
<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Pratze</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-secondary" type="submit"><font-awesome-icon :icon="['fas', 'search']" /></button>
      </form>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item" v-for="(item, index) in menuData" v-bind:key="index">
          <a class="nav-link" v-bind:href="item.url">{{item.titulo}}</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <font-awesome-icon :icon="['fas', 'user-circle']" />
          </a>
          <ul id="v-for-object" class="dropdown-menu" aria-labelledby="navbarDropdown" >
            <li v-for="(item, index) in getUserOptions(false)" v-bind:key="index" >
              <a class="dropdown-item" href="#">{{item.opt}}</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          '            '
        </li>
      </ul>
      
    </div>
  </div>
</nav>
<!-- Navbar -->
</template>

<script>
export default {
name: 'Navbar',
props:['menu'],
data(){
  return {
    userOptions: [{opt:'Login'},{opt:'Preferences'}],
    menuData: this.menu
  }
},
methods: {
  getUserOptions: (logado) => {
    var opt = [];
    opt.push(logado? {opt:'Logout'} : {opt:'Login'});
    opt.push({opt:'Preferences'});
    return opt; 
  },
  getMenu: (menu) => {
    console.log(menu);
  },
},
// components: {

//   }
}



</script>

<style scoped>

</style>