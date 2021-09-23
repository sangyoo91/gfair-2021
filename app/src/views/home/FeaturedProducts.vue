<template>
  <section class="section section--featured-products">
    <div class="container no-flex">
      <div class="text text-center">
        <h2>Featured Products</h2>
        <p>
          Here are some products that will be available.
        </p>
      </div>
      <div class="products-list">
        <div class="product-item" v-for="product, index in products" :key="index">
          <div class="product-thumb">
            <img :src="product.images[0].image.url"/>
          </div>
          <div class="product-meta">
            <router-link class="product-meta-head" :to="{
              name: 'Company',
              params: {
                companyId: product.companyId
              }
            }">
              <div class="product-company-name">
                <div class="logo">
                  <img :src="product.companyLogoUrl" alt="">
                </div>
                {{$getFromLang(product.companyName)}}
              </div>
              <div class="product-name">
                {{$getFromLang(product.name)}}
              </div>

            </router-link>
            <div class="product-desc">
              <div class="line-clamp">
                {{$getFromLang(product.desc)}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <Button class="btn-see-all" :color="'primary'">
        {{$t('products_see_all')}}
      </Button>
    </div>
  </section>
</template>

<script>
import Button from '@/components/el/button'
export default {
  computed: {
    products() {
      return this.$store.getters['getRandomProducts'](6)
    },
  },
  components: {
    Button
  }
}
</script>

<style lang="stylus" scoped>

.products-list
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-gap: 15px

.product-item
  border: 1px solid #EFEFEF

.product-thumb
  position: relative
  width: 100%
  border-bottom: 1px solid #EFEFEF
  img
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    width: 100%
    height: 100%
    object-fit: cover
    object-position: center

.product-thumb:before
  display: block
  padding-top: 56.25%
  content: ""

// .product-meta-head



.product-meta-head
  display: block
  padding: 8px 16px
  border-bottom: 1px solid #EFEFEF
  text-decoration: none
  &:hover
    text-decoration: underline
    text-decoration-color: var(--color-primary)

.product-company-name
  display: flex
  align-items: center
  text-decoration: none
  color: var(--color-primary)
  font-size: 14px
  margin-bottom: 4px
  .logo
    width: 32px
    height: 32px
    margin-right: 4px
    border: 1px solid #DDD
  .logo img
    width: 100%
    height: 100%
    object-fit: contain

.product-name
  font-size: 18px
  // margin-bottom: 8px
  font-weight: bold
  color: #333

.product-desc
  font-size: 14px
  color: #666
  padding: 16px

.btn-see-all
  width: 100%
  margin-top: 2rem
</style>