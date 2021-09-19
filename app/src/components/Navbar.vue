<template>
<div class="navbar-outer">
  <div class="navbar">
    <Notice v-on:click="closeNotice" v-if="notice"/>
    <div class="navbar-inner">
      <div class="navbar-logo">
        <svgLogo class="svg"/>
        <div class="text">
          2021 GOOD MERCHANDISE
          <br> ONLINE TRADE ENQUIRY KOREA
        </div>
      </div>

      <Button>
        {{$t('apply_now')}}
      </Button>

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



.navbar-inner
  max-width: 1024px + 16px
  margin: 0 auto
  padding: 0 16px
  height: 100%
  display: flex
  align-items: center
  justify-content: space-between

.navbar-logo
  height: 40px
  display: flex
  align-items: center
  user-select: none

.navbar-logo svg
  display: block
  width: auto
  height: 100%
  fill: currentColor

.navbar-logo .text
  font-size: 12px
  font-weight: 700
  margin-left: 4px
</style>