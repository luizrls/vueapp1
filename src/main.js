import Vue from "vue";
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from "@/router";
import App from "./App.vue";
import vuejquery from "vue-jquery";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;
library.add(faUserSecret);
Vue.component("font-awesome-icon", FontAwesomeIcon);

//Vue.use(BootstrapVue)
//Vue.use(IconsPlugin)
Vue.use(vuejquery);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
