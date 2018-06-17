<template>
  <div class="app">
    <div class="header">
      <header-bar></header-bar>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'app',
  components: {
    'header-bar': Header
  },
}
</script>

<style lang="scss">
body {
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.app {
  padding: 10px;
}

.main {

}
</style>
