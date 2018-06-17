<template>
  <div>
    <h1>Products List</h1>
    <div class="container">
      <div v-for="product in allProducts" :key=product.id>
        <product :product="product"></product>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Product from '@/components/Product'

export default {
  components: {
    'product': Product,
  },
  mounted () {
    this.getAllProducts()
  },
  computed: {
    ...mapGetters([
      'allProducts'
    ])
  },
  methods: {
    ...mapActions([
      'getAllProducts'
    ])
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-flow: row nowrap;
}
</style>
