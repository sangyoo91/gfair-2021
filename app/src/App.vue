<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer
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

h1, h2, h3
  font-weight: 400
  line-height: 1.5
h1
  font-size: 2.5rem
h2
  font-size: 2rem
h3
  font-size: 1.75rem
p
  line-height: 1.7
  font-size: 1rem
  font-weight: 300
</style>
