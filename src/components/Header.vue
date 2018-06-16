<template>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item">
        <router-link to="/" class="pure-menu-link">Home</router-link>
      </li>
      <li class="pure-menu-item">
        <router-link to="/cart" class="pure-menu-link">Cart</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.pure-menu {
  padding-bottom: 10px;
  border-bottom: solid 1px #d8d8d8;
}
</style>
