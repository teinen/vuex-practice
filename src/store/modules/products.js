import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: 'Google Home Mini',
        price: 49.01,
        stock: 3
      },
      {
        id: 2,
        name: 'Amazon Echo Dot',
        price: 50.99,
        stock: 5
      },
      {
        id: 3,
        name: 'Fire TV Stick',
        price: 45.99,
        stock: 8
      }
    ]
  }
})

export default store