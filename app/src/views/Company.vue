<template>
  <div class="page" v-if="company">
    <section class="section--company-mast">
      <div class="container">
        <div class="strip">
          <div class="strip-title">
            {{company.boothNumber}} |
            {{lang && lang === 'en' ? company.category.nameEN : (company.category.nameVN ? company.category.nameVN : company.category.nameEN)}}
          </div>
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
            {{$getFromLang(company.desc)}}
          </div>
        </div>

        <div class="company-products">

          <h1 class="company-products-title">
            Products ({{company.products.length}})
          </h1>

          <div class="products-list">
            <ProductItem :product="product" :index="index" v-for="product, index in company.products" :key="index"/>>
          </div>
        </div>

      </div>
    </section>
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
.section--company-mast
  padding-top: calc(var(--navbar-height) + 30px)
  color: #333

.strip
  width: 100%
  padding: 8px
  display: flex
  align-items: center
  justify-content: space-between
  border-radius: 2px
  background-color: #EFEFEF
  color: #5a5a5a
  margin-bottom: 2rem

.company-head
  display: flex
  align-items: center
  .company-logo
    width: 80px
    height: 80px
    border-radius: 8px
    border: 1px solid #EFEFEF
    box-shadow: 0 8px 16px rgba(black, 0.1)
    margin-right: 15px
  .company-logo img
    display: block
    width: 100%
    height: 100%
    object-fit: contain
    padding: 8px
  .text
    flex: 1

.company-name
  font-size: 40px
  font-weight: 600
  color: #5a5a5a

.company-body
  margin-top: 2rem

.company-desc
  font-weight: 300
  line-height: 1.4
  font-size: 1rem
  color: #333

</style>