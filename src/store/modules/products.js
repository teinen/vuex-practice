import shop from '@/api/shop'

const state = {
  products: []
}

const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit('recieve_products', products)
    })
  }
}

const mutations = {
  recieve_products (state, products) {
    state.products = products
  }
}

const getters = {
  allProducts (state) {
    return state.products
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}