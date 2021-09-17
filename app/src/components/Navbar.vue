<template>
  <div class="navbar">
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
</template>

<script>
import Button from '@/components/el/button'
import svgLogo from '@/components/svg/svgLogo'

export default {
  components: {
    svgLogo,
    Button
  }
}
</script>

<style lang="stylus" scoped>

.navbar
  position: fixed
  top: 16px
  left: 0
  right: 0
  height: var(--navbar-height)
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