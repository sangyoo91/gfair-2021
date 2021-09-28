<template>
  <div class="page">
    <section class="mast">
      <div class="container">
        <div class="title">
          <h1>{{$t('products_mast_title')}}</h1>
          <p>{{$t('products_mast_desc')}}</p>
        </div>
      </div>
    </section>
    <div class="container">
      <CategoriesHeader/>
    </div>
    <div class="container">
      <div v-if="products.length > 0" class="products-list">
        <ProductItem :product="product" div v-for="product in products" :key="product.id"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from '@/views/products/ProductItem'
import CategoriesHeader from '@/components/CategoriesHeader'
export default {
  data() {
    return {}
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    getCompanyCountByCategoryName(cat) {
      return this.allProducts.filter((c)=> c &&  c.categoryId && c.categoryId === cat).length
    },
    setRouteCategory(categoryName) {
      if (this.$route.params.categoryName !== categoryName) {
        this.$router.replace({
          name: this.$route.name,
          params: {
            categoryName: categoryName
          }
        })
      }
    },
  },
  computed: {
    allProducts() {
      return this.$store.getters['getProducts']
    },
    products() {
      let products = this.allProducts
      let param = this.$route.params.categoryName
      if (!param || param === 'all' || ![
        'beauty-health',
        'consumer-products',
        'electronics-electrical-products',
        'industrial-medical-products'
      ].includes(param)) {
        return products
      } else {
        return products.filter((c)=> c.categoryId && c.categoryId === param)
      }
    },
    lang() {
      return this.$i18n.locale
    },
  },
  components: {
    ProductItem,
    CategoriesHeader
  }
}
</script>


<style lang="stylus" scoped>
.page
  background-color: #F6F6F6

.mast
  min-height: 400px
  background: linear-gradient(150deg,#281483 15%,#8f6ed5 70%,#d782d9 94%)
  padding-top: calc( var(--navbar-height) )
  padding-top: calc( var(--navbar-height) + var(--navbar-sub-height))
  display: flex
  align-items: center
  color: white

  .title h1
    margin: 0
    font-size: 32px
    @media screen and (max-width: 991px)
      font-size: 27px
    @media screen and (max-width: 768px)
      font-size: 24px
      text-align: center
  p
    @media screen and (max-width: 991px)
      font-size: 0.95rem
    @media screen and (max-width: 768px)
      font-size: 0.875rem
      text-align: center

.products-list
  display: grid
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr
  grid-gap: 16px
  padding-top: 16px
  @media screen and (max-width: 1200px)
    grid-template-columns: 1fr 1fr 1fr 1fr
  @media screen and (max-width: 991px)
    grid-template-columns: 1fr 1fr 1fr
  @media screen and (max-width: 768px)
    grid-template-columns: 1fr 1fr


.cell
  padding: 8px
  font-size: 14px
  .table-head-row &
    // font-weight: bold
  span.light
    opacity: 0.5
  a
    color: var(--color-primary)




</style>