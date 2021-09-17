<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="stylus">


*, *:before, *:after
  box-sizing: border-box

html
  font-size: 1rem
  height: 100%
  font-family: 'Open Sans', Arial, Helvetica, sans-serif

body
  display: flex
  width: 100%
  min-height: 100%

#app
  flex: 1

</style>
