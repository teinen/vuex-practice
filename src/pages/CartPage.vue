<template>
  <div>
    <h1>Shopping Cart</h1>
    <div v-if="cartCount === 0">
      Cart is empty. Please add some products!
    </div>
    <div v-else v-for="product in cartProducts" :key="product.id">
      <p>{{ product.name }}</p>
      <p>{{ product.price }}</p>
      <p>{{ product.quantity }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'cartProducts',
      'cartCount'
    ])
  }
}
</script>

<style lang="scss">

</style>
