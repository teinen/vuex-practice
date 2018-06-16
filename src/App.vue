<template>
  <div>
    <!-- Header nav -->
    <header-comp></header-comp>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    'header-comp': Header
  }
}
</script>

<style lang="scss">
body {
  padding: 10px;
}
</style>
