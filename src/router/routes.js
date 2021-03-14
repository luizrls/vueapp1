import Home from '@/views/Home.vue'
import Users from '@/views/Users.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import MainLayout from '@/components/mainLayout/MainLayout.vue'

const routes = [
    {name: 'home', path:'/', component: Home, meta :{layout: MainLayout}},
    {name: 'users', path:'/users', component: Users, meta :{layout: MainLayout}},
    { path: "*", component: PageNotFound }
]

export default routes