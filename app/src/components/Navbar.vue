<template>
<div class="navbar-outer">
  <div class="navbar">
    <Notice v-on:click="closeNotice" v-if="notice"/>
    <div class="container">
      <router-link class="navbar-logo" :to="{name: 'Home'}">
        <svgLogo class="svg"/>
        <div class="text">
          2021 GOOD MERCHANDISE
          <br> ONLINE TRADE ENQUIRY KOREA
        </div>
      </router-link>

      <div class="menu">
        <button v-on:click="gotoCompanies" class="menu-item">
          {{$t('companies')}}
        </button>
        <Button>
          {{$t('apply_now')}}
        </Button>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import Button from '@/components/el/button'
import svgLogo from '@/components/svg/svgLogo'
import Notice from '@/components/Notice'

export default {
  data() {
    return {
      notice: true
    }
  },
  methods: {
    closeNotice() {
      this.notice = false
    },
    gotoCompanies() {
      if (this.$route.name !== "Companies")
        this.$router.push({name: 'Companies'})
    }
  },
  components: {
    svgLogo,
    Button,
    Notice
  }
}
</script>

<style lang="stylus" scoped>

.navbar-outer
  position: fixed
  top: 0
  left: 0
  right: 0
  z-index: 999

.navbar
  height: calc( var(--navbar-height) + 16px )
  color: white



.container
  // margin: 0 auto
  // padding: 0 16px
  height: 100%
  display: flex
  align-items: center
  justify-content: space-between

a.navbar-logo
  height: 40px
  display: flex
  align-items: center
  user-select: none
  color: white
  text-decoration: none
  outline: 0
  border-radius: 4px

  &:focus
    box-shadow: 0 0 0 4px rgba(white, 0.25)

.navbar-logo svg
  display: block
  width: auto
  height: 100%
  fill: currentColor

.navbar-logo .text
  font-size: 12px
  font-weight: 700
  margin-left: 4px

.navbar .menu button
  margin-left: 8px

button.menu-item
  outline: 0
  border: 0
  padding: 6px 6px
  border-radius: 4px
  background-color: transparent
  color: rgba(white, 1.0)
  &:hover
    background-color: rgba(white, 0.15)
  &:focus
    box-shadow: 0 0 0 4px rgba(white, 0.25)


</style>