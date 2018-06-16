import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/pages/HomePage'
import CartPage from '@/pages/CartPage'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomePage
    },
    {
      name: 'cart',
      path: '/cart',
      component: CartPage
    },
  ]
})

export default router