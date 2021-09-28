<template>
  <div class="page" v-if="company">
    <section class="mast">
      <div class="container">

      </div>
    </section>
    <div class="container">
      <section class="section--page">
        <div class="strip">
          <router-link class="strip-title" :to="{
            name: 'Companies', params: {
              categoryName: company.category.id
            }
          }">
            {{company.boothNumber}} |
            {{lang && lang === 'en' ? company.category.nameEN : (company.category.nameVN ? company.category.nameVN : company.category.nameEN)}}
          </router-link>
        </div>

        <div class="company-head">
          <div class="company-logo">
            <img :src="company.logo.image.url" alt="" v-if="company.logo && company.logo.image">
          </div>
          <div class="text">
            <div class="company-name">
              {{$getFromLang(company.name)}}
            </div>
          </div>
        </div>

        <div class="company-body">
          <div class="company-desc">
            <p>
              {{$getFromLang(company.desc)}}
            </p>
          </div>
        </div>

        <div class="company-products">

          <h1 class="company-products-title">
            Products ({{company.products.length}})
          </h1>

          <div class="products-list">
            <ProductItem :product="product" :index="index" v-for="product, index in company.products" :key="index"/>
          </div>
        </div>

      </section>
    </div>
  </div>
</template>

<script>
import ProductItem from "@/views/company/ProductItem"
export default {
  mounted () {
    window.scrollTo(0, 0)
  },
  computed: {
    company() {
      return this.$store.getters['getCompanyById'](this.$route.params.companyId)
    },
    lang() {
      return this.$i18n.locale
    },
  },
  components: {
    ProductItem
  }
}
</script>


<style lang="stylus" scoped>
.page
  background-color: #EFEFEF
.mast
  min-height: 33vh
  background: linear-gradient(150deg,#281483 15%,#8f6ed5 70%,#d782d9 94%)
  padding-top: calc( var(--navbar-height) + var(--navbar-sub-height))
  padding-top: calc( var(--navbar-height) )
  display: flex
  align-items: center
  color: white

.section--page
  position: relative
  // padding-top: calc(var(--navbar-height) + 30px)
  color: #2F2E41
  background-color: white
  margin-top: -10vh
  padding: 32px
  border-radius: 4px
  border: 1px solid #DEDEDE
  box-shadow: 0 4px 8px rgba(black, 0.1)
  @media screen and (max-width: 991px)
    padding: 16px
  @media screen and (max-width: 480px)
    margin-left: -15px
    margin-right: -15px
    border-radius: 0
    box-shadow: 0

.strip
  position: absolute
  top: -16px
  left: 0
  transform: translate3d(0, -100%, 0)
  width: 100%
  padding: 8px
  display: flex
  align-items: center
  justify-content: space-between
  border-radius: 2px
  background-color: #EFEFEF
  color: #5a5a5a
  margin-bottom: 2rem
  box-shadow: 0 4px 8px rgba(black, 0.1)
  @media screen and (max-width: 480px)
    box-shadow: 0
    top: 0
    border-radius: 0
    margin: 0
    border-top: 1px solid #D0D0D0
    border-bottom: 1px solid #D0D0D0
    font-size: 14px



.strip-title
  color: #5a5a5a
  text-decoration: none
  &:hover
    text-decoration: underline

.company-head
  display: flex
  align-items: center
  @media screen and (max-width: 640px)
    display: block
  .company-logo
    width: 80px
    height: 80px
    border-radius: 8px
    border: 1px solid #EFEFEF
    box-shadow: 0 8px 16px rgba(black, 0.1)
    margin-right: 15px
    @media screen and (max-width: 640px)
      margin: 0 auto 1rem
  .company-logo img
    display: block
    width: 100%
    height: 100%
    object-fit: contain
    padding: 8px
  .text
    flex: 1
    @media screen and (max-width: 640px)
      flex: 0
      text-align: center
      font-size: 18px


.company-name
  font-size: 40px
  font-weight: 600
  color: #5a5a5a
  @media screen and (max-width: 640px)
    font-size: 24px
  @media screen and (max-width: 540px)
    font-size: 21px

.company-body
  margin-top: 2rem

.company-desc
  font-weight: 300
  line-height: 1.4
  font-size: 1rem
  padding: 0 0 1.5rem
  margin: 0 0 2rem
  color: #2F2E41
  border-bottom: 1px solid #EFEFEF

h1.company-products-title
  margin: 0 0 1rem
  font-size: 1.875rem
  @media screen and (max-width: 640px)
    font-size: 1.5rem
  @media screen and (max-width: 540px)
    font-size: 1.25rem

</style>