<template>
<div class="navbar-outer">
  <Notice v-on:click="closeNotice" v-if="notice"/>
  <div class="navbar">
    <div class="container">
      <router-link class="navbar-logo" :to="{name: 'Home'}">
        <svgLogo class="svg"/>
        <div class="text">
          2021 GOOD MERCHANDISE
          <br> ONLINE TRADE MEET KOREA
        </div>
      </router-link>

      <div class="menu">
        <button v-on:click="gotoCompanies" class="menu-item">
          {{$t('companies')}}
        </button>
        <Button v-on:click="gotoApplication">
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
    }
  },
  methods: {
    closeNotice() {
      this.$store.commit("SET_NOTICE", false)
    },
    gotoCompanies() {
      if (this.$route.name !== "Companies")
        this.$router.push({name: 'Companies'})
    },
    gotoApplication() {
      if (this.$route.name !== "ApplyNow")
        this.$router.push({name: 'ApplyNow'})
    }
  },
  computed: {
    notice() {
      return this.$store.getters.getNotice
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
  height: calc( var(--navbar-height))
  color: #333
  background-color: white
  border-bottom: 1px solid #EFEFEF


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
  color: var(--color-primary)
  text-decoration: none
  outline: 0
  border-radius: 4px

  &:focus
    box-shadow: 0 0 0 4px rgba(#5e72e4, 0.25)

  @media screen and (max-width: 768px)
    height: 32px
    font-size: 14px
  @media screen and (max-width: 640px)
    height: 27px
    font-size: 12px
    .text
      display: none


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
  color: #666
  &:hover
    background-color: rgba(black, 0.075)
  &:focus
    box-shadow: 0 0 0 4px rgba(#5e72e4, 0.25)
  @media screen and (max-width: 768px)
    font-size: 14px
  @media screen and (max-width: 640px)
    font-size: 13px


</style>