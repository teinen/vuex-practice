<template>
  <div class="item">
    <router-link :to="{name: 'product', params: {id: product.id}}">
      <span class="name">{{ product.name }}</span>
    </router-link>
    <span class="price">{{ product.price }}</span>
    <span class="stock">{{ product.stock }}</span>
    <button
      @click="addToCart(product)"
      class="add-button"
      :disabled="!product.stock"
    >{{ product.stock > 0 ? 'Add To Cart' : 'Out of Stock' }}</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: [
    'product'
  ],
  methods: {
    ...mapActions([
      'addToCart'
    ])
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-flow: column nowrap;
  width: 200px;
  height: 200px;
  margin-right: 10px;
  border: solid 1px #d8d8d8;

  .name {
    display: block;
    font-size: 1.3rem;
    text-align: center;
    padding: 10px;
    background-color: #d8d8d8;
  }

  .price {
    font-size: 1.2rem;
    margin: 10px 10px 0px 10px;

    &::before {
      content: '$ ';
    }
  }

  .stock {
    font-size: 1.2rem;
    margin: 10px 0px 0px 10px;

    &::before {
      content: 'stock: ';
    }
  }

  .add-button {
    width: 120px;
    height: 30px;
    margin: auto;
  }
}
</style>
