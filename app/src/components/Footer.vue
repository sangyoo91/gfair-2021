<template>
  <div class="footer">
    <div class="container">

      <div class="footer-logo">
        <svgLogo class="svg"/>
        <div class="text">
          GOOD MERCHANDISE ONLINE TRADE ENQUIRY KOREA
          <div class="copyright">Copyright TRADE MEET KOREA. All rights reserved.</div>
        </div>
      </div>

      <div class="language-selector">
        <label>{{$t('lang')}}</label>
        <div class="dropdown" v-on:click="openDropdown" :class="{
          'is-open': isDropdownOpen
        }">
          <div class="menu" v-if="isDropdownOpen">
            <div class="item" v-for="lang, index in langs" :key="index" v-on:click="selectLang(lang.lang, $event)">
              {{lang.label}}
            </div>
          </div>
          <div class="menu" v-else>
            <div class="item">
              {{currentLang.label}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import svgLogo from '@/components/svg/svgLogo'

export default {
  data() {
    return {
      langs: [
        {
          lang: "en",
          label: "English"
        },
        {
          lang: "vn",
          label: "Tiếng Việt"
        }
      ],
      isDropdownOpen: false
    }
  },
  components: {
    svgLogo
  },
  methods: {
    openDropdown() {
      if (!this.isDropdownOpen) {
        this.isDropdownOpen = true
      }
    },
    selectLang(lang, e) {
      e.stopPropagation()
      e.stopImmediatePropagation()
      if (this.langs.find((l)=> l.lang === lang)) {
        this.$i18n.locale = lang
      }
      this.isDropdownOpen = false
    }
  },
  computed: {
    currentLang() {
      return this.langs.find((l)=> l.lang === this.$i18n.locale)
    }
  }
}
</script>



<style lang="stylus" scoped>

.footer
  padding: 32px 0 128px
  background-color: #EFEFEF

.container
  display: flex
  align-items: center
  justify-content: space-between
  max-width: 1024px + 16px
  margin: 0 auto
  padding: 0 16px

.footer-logo
  height: 40px
  display: flex
  align-items: center
  user-select: none
  color: #A0A0A0

.footer-logo svg
  display: block
  width: auto
  height: 100%
  fill: currentColor

.footer-logo .text
  font-size: 12px
  font-weight: 700
  margin-left: 4px
  .copyright
    font-weight: 400
    font-size: 12px

.language-selector label
  font-size: 12px
  display: none
.language-selector .dropdown
  position: relative
  width: 240px
  height: 40px
  border: 1px solid rgba(black, 0.15)
  border-radius: 4px
  // overflow: hidden
  background-color: white
  .item
    height: 38px
    line-height: 38px
    padding: 0 8px

.dropdown .menu
  position: absolute
  top: 0
  right: 0
  left: 0

// .dropdown.is-open
//   overflow: visible

.dropdown.is-open .menu
  position: absolute
  top: 50%
  right: -8px
  left: -8px
  background-color: white
  transform: translate3d(0, -50%, 0)
  padding: 8px
  border-radius: 8px
  box-shadow: 0 4px 8px rgba(50, 50, 93, 0.05), 0 3px 9px rgba(0, 0, 0, 0.08)

  .item:hover
    background-color: rgba(black, 0.015)

</style>
