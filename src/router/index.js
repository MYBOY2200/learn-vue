import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/slot',
    name: 'Slot',
    component: () => import('../views/slot/Slot.vue')
  },
  {
    path: '/props',
    name: 'Props',
    component: () => import('../views/props单向数据流/PropsFather.vue')
  },
  {
    path: '/mixins',
    name: 'Mixins',
    component: () => import('../views/mixins/Mixins.vue')
  },
  {
    path: '/emit',
    name: 'Emit',
    component: () => import('../views/emit传参/EmitFather.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
