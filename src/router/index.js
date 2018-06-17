import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/pages/HomePage'
import CartPage from '@/pages/CartPage'
import ProductPage from '@/pages/ProductPage'

Vue.use(VueRouter)

const router = new VueRouter({
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
    {
      name: 'product',
      path: '/product/:id',
      component: ProductPage
    },
  ]
})

export default router