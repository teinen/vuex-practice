<template>
  <div>
    <h1>Products List</h1>
    <div class="container">
      <div v-for="product in products" :key=product.id>
        <product :product="product"></product>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product'

export default {
  data () {
    return {
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
  },
  components: {
    'product': Product,
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-flow: row nowrap;
}
</style>
