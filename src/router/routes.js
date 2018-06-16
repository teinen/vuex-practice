import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'

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
      name: 'about',
      path: '/about',
      component: AboutPage
    },
  ]
})

export default router