<template>
  <div id="app">
    <Navbar/>
    <div class="app-content" :class="{
      'has-notice': notice
    }">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {db} from '@/fb'

export default {
  components: {
    Navbar,
    Footer
  },
  created() {
    this.loadCompanies()
    this.loadCodes()
  },
  methods: {
    async loadCodes() {
      // console.log("request Load Codes")
      const data = await db.collection('codes').get()
      this.$store.commit("SET_CODES_FROM_DOCS", data.docs)
      // console.log("loadCodes", data)
    },
    async loadCompanies() {
      // console.log("request Load Companies")
      const data = await db.collection('companies').get()
      this.$store.commit("SET_COMPANIES_FROM_DOCS", data.docs)
      // console.log("loadCompanies", data)
    }
  },
  computed: {
    notice() {
      return this.$store.getters.getNotice
    }
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
  color: #2F2E41
body
  display: flex
  width: 100%
  min-height: 100%
  overflow-x: hidden

#app
  flex: 1
  display: flex
  flex-direction: column
  overflow-x: hidden

.app-content
  flex: 1
  &.has-notice
    padding-top: calc( var(--navbar-height) + var(--navbar-sub-height))

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
