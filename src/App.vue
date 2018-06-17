<template>
  <div class="app">
    <div class="header">
      <header-bar></header-bar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    'header-bar': Header
  },
  name: 'app'
}
</script>

<style lang="scss">
body {
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.app {
  padding: 10px;

}
</style>
