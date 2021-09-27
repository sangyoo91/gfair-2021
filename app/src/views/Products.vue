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
      <div class="categories-wrapper">
          <div class="category-item-wrapper" :class="{
            active: !$route.params.categoryName || $route.params.categoryName === 'all'
          }" v-on:click="setRouteCategory('all')">
            <div class="category-item">

              <div class="title">
                {{$t('cat_all')}}
              </div>
              <div class="company-count">
                {{allProducts.length}} Products
              </div>
            </div>
          </div>
          <div class="category-item-wrapper" :class="{
            active: $route.params.categoryName === 'beauty-health'
          }" v-on:click="setRouteCategory('beauty-health')">
            <div class="category-item">
              <div class="date">
                {{$t('date_beauty')}}
              </div>
              <div class="title">
                {{$t('cat_beauty')}}
              </div>
              <div class="company-count">
                {{getCompanyCountByCategoryName('beauty-health')}} Products
              </div>
            </div>
          </div>
          <div class="category-item-wrapper" :class="{
            active: $route.params.categoryName === 'consumer-products'
          }" v-on:click="setRouteCategory('consumer-products')">
            <div class="category-item">
              <div class="date">
                {{$t('date_consumer')}}
              </div>
              <div class="title">
                {{$t('cat_consumer')}}
              </div>
              <div class="company-count">
                {{getCompanyCountByCategoryName('consumer-products')}} Products
              </div>
            </div>
          </div>
          <div class="category-item-wrapper" :class="{
            active: $route.params.categoryName === 'electronics-electrical-products'
          }" v-on:click="setRouteCategory('electronics-electrical-products')">
            <div class="category-item">
              <div class="date">
                {{$t('date_electronics')}}
              </div>
              <div class="title">
                {{$t('cat_electronics')}}
              </div>
              <div class="company-count">
                {{getCompanyCountByCategoryName('electronics-electrical-products')}} Products
              </div>
            </div>
          </div>
          <div class="category-item-wrapper" :class="{
            active: $route.params.categoryName === 'industrial-medical-products'
          }" v-on:click="setRouteCategory('industrial-medical-products')">
            <div class="category-item">
              <div class="date">
                {{$t('date_industrial')}}
              </div>
              <div class="title">
                {{$t('cat_industrial')}}
              </div>
              <div class="company-count">
                {{getCompanyCountByCategoryName('industrial-medical-products')}} Products
              </div>
            </div>
          </div>
        </div>
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
    ProductItem
  }
}
</script>


<style lang="stylus" scoped>
.page
  background-color: #F6F6F6

.mast
  min-height: 33vh
  background: linear-gradient(150deg,#281483 15%,#8f6ed5 70%,#d782d9 94%)
  padding-top: calc( var(--navbar-height) + var(--navbar-sub-height))
  padding-top: calc( var(--navbar-height) )
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


.categories-wrapper
  margin-top: -40px
  background-color: white
  border-radius: 4px
  // border: 1px solid #EFEFEF
  box-shadow: 0 8px 16px rgba(black, 0.075), 0 -8px 8px rgba(black, 0.075)
  display: grid
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr
  overflow: hidden
  // display: flex
  // align-items: center
  // justify-content: center

.category-item
  position: relative
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  text-align: center
  padding: 16px 8px
  height: 100%
  .date
    font-size: 12px
    margin-bottom: 6px
    padding: 4px
    background-color: #F5F5F5
    border-radius: 2px
  .title
    font-size: 16px
    @media screen and (max-width: 991px)
      font-size: 0.95rem
    @media screen and (max-width: 768px)
      font-size: 0.875rem
  .company-count
    margin-top: 8px
    font-size: 12px
  &:before
    position: absolute
    bottom: 0
    left: 0
    right: 0
    content: ""
    height: 4px
    // background-color: var(--color-primary)
    background: linear-gradient(150deg,#281483 15%,#8f6ed5 70%,#d782d9 94%)
    opacity: 0
.category-item-wrapper.active .category-item
  // background-color: rgba(#5e72e4)
  .title
    font-weight: 700
  &:before
    opacity: 1



</style>