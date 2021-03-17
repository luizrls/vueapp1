import Dashboard from "@/views/AreaLogada/Dashboard.vue";
import Forms from "@/views/AreaLogada/Forms.vue";
import User from "@/views/AreaLogada/User.vue";
import About from "@/views/AreaNaoLogada/About.vue";
import Contact from "@/views/AreaNaoLogada/Contact.vue";
import Home from "@/views/AreaNaoLogada/Home.vue";
import Pricing from "@/views/AreaNaoLogada/Pricing.vue";
import Products from "@/views/AreaNaoLogada/Products.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import MainLayout from "@/components/mainLayout/MainLayout.vue";
import PublicLayout from "@/components/publicLayout/PublicLayout.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
    meta: { layout: PublicLayout },
  },
  {
    name: "About",
    path: "/About",
    component: About,
    meta: { layout: PublicLayout },
  },
  {
    name: "Contact",
    path: "/Contact",
    component: Contact,
    meta: { layout: PublicLayout },
  },
  {
    name: "Pricing",
    path: "/Pricing",
    component: Pricing,
    meta: { layout: PublicLayout },
  },
  {
    name: "Products",
    path: "/Products",
    component: Products,
    meta: { layout: PublicLayout },
  },
  {
    name: "Dashboard",
    path: "/Dashboard",
    component: Dashboard,
    meta: { layout: MainLayout },
  },
  {
    name: "Forms",
    path: "/Forms",
    component: Forms,
    meta: { layout: MainLayout },
  },
  {
    name: "User",
    path: "/User",
    component: User,
    meta: { layout: MainLayout },
  },

  { path: "*", component: PageNotFound },
];

export default routes;
