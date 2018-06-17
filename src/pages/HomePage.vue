<template>
  <div>
    <h1>Product List</h1>
    <ul>
      <li v-for="item in items" :key=item.id>
        <span class="name">{{ item.name }}</span>
        <span class="price">{{ item.price }}</span>
        <span class="stock">{{ item.stock }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
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
