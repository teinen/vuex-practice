<template>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item">
        <router-link to="/" class="pure-menu-link">Home</router-link>
      </li>
      <li class="pure-menu-item">
        <router-link to="/cart" class="pure-menu-link">Cart ({{ cartCount }})</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'cartCount'
    ])
  }
}
</script>

<style lang="scss">

</style>
