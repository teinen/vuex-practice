<template>
  <div class="product-item">
    <h1>Product Page</h1>
    <span class="name">{{ product.name }}</span>
    <span class="price">{{ product.price }}</span>
    <span class="stock">{{ product.stock }}</span>
    <div class="button-area">
      <router-link to="/" class="pure-button">Back</router-link>
      <button
        @click="addToCart(product)"
        class="pure-button pure-button-primary"
        :disabled="!product.stock"
      >{{ product.stock > 0 ? 'Add To Cart' : 'Out of Stock' }}</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  mounted () {
    this.getAllProducts()
  },
  computed: {
    ...mapGetters([
      'allProducts'
    ]),
    product () {
      let id = parseInt(this.$route.params.id)
      return this.allProducts.find(p => p.id === id) || {}
    }
  },
  methods: {
    ...mapActions([
      'getAllProducts',
      'addToCart'
    ])
  }
}
</script>

<style lang="scss" scoped>
.product-item {
  display: flex;
  flex-flow: column nowrap;

  span {
    display: block;
    margin-top: 15px;

    &.name {
      font-size: 2.0rem;
      font-weight: bold;
    }

    &.price {
      font-size: 1.5rem;

      &::before {
        content: '$ ';
      }
    }

    &.stock {
      font-size: 1.5rem;

      &::before {
        content: 'stock: ';
      }
    }
  }
}

.button-area {
  display: flex;
  flex-flow: row nowrap;
  margin: 25px 0px;

  .pure-button {
    width: 120px;
    margin-right: 10px;
  }
}

</style>
