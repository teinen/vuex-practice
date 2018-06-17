import shop from '@/api/shop'

const state = {
  products: []
}

const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit('recieve_products', products)
    })
  },
  addToCart ({ commit }, product) {
    commit('add_to_cart', product.id)
  }
}

const mutations = {
  recieve_products (state, products) {
    state.products = products
  },
  add_to_cart (state, productId) {
    state.products.find(p => p.id === productId).stock--
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