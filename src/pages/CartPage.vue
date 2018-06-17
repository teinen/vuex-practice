<template>
  <div>
    <h1>Shopping Cart</h1>
    <div v-if="cartCount === 0">
      Cart is empty. Please add some products!
    </div>
    <div class="cart-products">
      <span class="name title">Name</span>
      <span class="title">Price</span>
      <span class="title">Quantity</span>
      <span class="title">Total Amount</span>
    </div>
    <div v-for="product in cartProducts" :key="product.id" class="cart-products">
      <span class="name">{{ product.name }}</span>
      <span class="price">{{ product.price }}</span>
      <span class="quantity">{{ product.quantity }}</span>
      <span class="total price">{{ product.price * product.quantity }}</span>
    </div>
    <div class="cart-products">
      <span class="name"></span>
      <span></span>
      <span></span>
      <span class="price title">{{ totalAmount }}</span>
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
    ]),
    totalAmount () {
      return this.cartProducts.reduce((total, product) => {
        return total + (product.price * product.quantity)
      }, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-products {
  display: flex;
  flex-flow: row nowrap;
  border-bottom: solid 1px #d8d8d8;
  padding: 15px 0px;

  span {
    display: block;
    width: 200px;
    font-size: 1.2rem;

    &.title {
      font-size: 1.4rem;
      font-weight: bold;
    }

    &.name {
      width: 350px;
    }

    &.price {
      &::before {
        content: '$ ';
      }
    }
  }
}
</style>
