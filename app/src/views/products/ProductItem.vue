<template>
  <div class="product-item">
    <router-link class="product-company" :to="{
      name: 'Company', params: {
        companyId: product.companyId
      }
    }">
      <div class="product-company-logo">
        <img :src="product.companyLogoUrl" alt="" loading="lazy">
      </div>
      <div class="product-company-name">{{$getFromLang(product.companyName)}}</div>
    </router-link>
    <div class="product-image-wrapper">
      <div class="product-image">
        <img :src="product.images[0].thumb.url" alt="" v-if="product.images[0] && product.images[0].image"  loading="lazy">
      </div>
    </div>
    <div class="product-meta">

      <router-link class="product-name" :to="{
        name: 'Company', params: {
          companyId: product.companyId
        }
      }">
        {{$getFromLang(product.name)}}
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  props: [
    'product'
  ]
}
</script>

<style lang="stylus" scoped>

.product-item
  border: 1px solid #DEDEDE
  height: 100%
  box-shadow: 0 4px 8px rgba(black, 0.05)
  background-color: white

.product-company
  display: flex
  align-items: center
  border-bottom: 1px solid #DEDEDE
  text-decoration: none
  color: #666
  &:hover
    text-decoration: underline
.product-company-logo
  width: 27px
  height: 27px
  margin-right: 4px
  border-right: 1px solid #DEDEDE
  padding: 2px
  img
    width: 100%
    height: 100%
    object-fit: contain
.product-company-name
  font-size: 13px
  color: #666
  text-decoration-color: #666


.product-image-wrapper
  padding: 12px

.product-image
  position: relative
  width: 100%
  border: 1px solid #DEDEDE
  // border-bottom: 1px solid #DEDEDE
  background-color: #F5F5F5
  &:before
    display: block
    content: ""
    padding-top: 100%
  img
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    object-fit: contain
    width: 100%
    height: 100%

.product-name
  display: block
  padding: 0 12px 12px
  font-size: 14px
  font-weight: bold
  color: black
  text-decoration: none
  &:hover
    text-decoration: underline
</style>