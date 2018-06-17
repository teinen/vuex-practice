<template>
  <div>
    <h1>Products List</h1>
    <ul>
      <li v-for="product in products" :key=product.id>
        <router-link
          :to="{name: 'product', params: {id: product.id}}"
          class="name"
        >
          {{ product.name }}
        </router-link>
        <span class="price">{{ product.price }}</span>
        <span class="stock">{{ product.stock }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [
        {
          id: 1,
          name: 'Google Home Mini',
          price: 49,
          stock: 3
        },
        {
          id: 2,
          name: 'Amazon Echo Dot',
          price: 50,
          stock: 5
        }
      ]
    }
  }
}
</script>

<style lang="scss">
li {
  list-style-type: none;
  margin: 10px 0px;
}

.name {
  font-weight: bold;
  font-size: 1.2rem;
}

.price {
  font-size: 1.2rem;

  &::before {
    content: '$';
  }
}

.stock {
  font-size: 1.2rem;

  &::before {
    content: 'Stock: ';
  }
}
</style>
