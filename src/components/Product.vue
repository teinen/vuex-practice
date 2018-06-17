<template>
  <div class="item">
    <router-link :to="{name: 'product', params: {id: product.id}}">
      <span class="name">{{ product.name }}</span>
    </router-link>
    <span class="price">{{ product.price }}</span>
    <span class="stock">{{ product.stock }}</span>
  </div>
</template>

<script>
export default {
  props: ['product']
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
}
</style>
