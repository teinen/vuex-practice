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

}

.header {
  border-bottom: solid 1px #d8d8d8;
  width: 100%;
  padding: 15px;
}

.main {
  width: 100%;
  padding: 0px 20px;
}
</style>
