import shop from '@/api/shop'

const state = {
  addedProducts: [],
  lastCheckout: null
}

const actions = {

}

const mutations = {
  add_to_cart (state, productId) {
    state.lastCheckout = null

    // check if exists product in added
    const existing = state.addedProducts.find(p => p.id === productId)

    if (existing) {
      existing.quantity++
    } else {
      state.addedProducts.push({
        id: productId,
        quantity: 1
      })
    }
  }
}

const getters = {
  cartProducts (state, getters, rootState) {
    return state.addedProducts.map(({ id, quantity }) => {
      // find the product from root state (products.js)
      const product = rootState.products.products.find(p => p.id === id)

      return {
        id,
        name: product.name,
        price: product.price,
        quantity
      }
    })
  },
  cartCount (state) {
    let totalCount = 0
    state.addedProducts.forEach(({ quantity }) => {
      totalCount += quantity
    })
    return totalCount
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}