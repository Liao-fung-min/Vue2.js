import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Alex from '../views/Alex.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/alex',
    name: 'alex',
    component: Alex
  },
]

const router = new VueRouter({
  routes
})

export default router
