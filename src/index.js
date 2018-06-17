import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import { sync } from 'vuex-router-sync';

sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})