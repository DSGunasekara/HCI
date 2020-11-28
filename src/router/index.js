import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Withdraw from "@/views/Withdraw";
import Login from "@/views/Login";
import TransactionComplete from "@/views/TransactionComplete";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/withdraw',
    name: 'Withdraw',
    component: Withdraw
  },
  {
    path: '/complete',
    name: 'Complete',
    component: TransactionComplete
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode:"history",
  routes
})

export default router
