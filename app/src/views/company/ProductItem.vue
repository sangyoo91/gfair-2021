<template>
  <div class="product-item">

    <!-- <div class="product-images">
      <div class="product-image" v-for="image, index in product.images" :key="index">
        <img :src="image.image.url" alt="">
      </div>
    </div> -->
    <div class="product-images">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="image, index in product.images" :key="index">
          <div class="swiper-image">
            <img :src="image.image.url"/>
          </div>
        </swiper-slide>
        <!-- <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide> -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="product-meta">
      <h2 class="product-name">
        <!-- {{index+1}}.  -->
        {{$getFromLang(product.name)}}
      </h2>
      <div class="product-desc" v-if="$getFromLang(product.features)">
        <h4 class="title">
          Product Features
        </h4>
        <p>{{$getFromLang(product.features)}}</p>
      </div>
      <div class="product-desc" v-if="$getFromLang(product.desc)">
        <h4 class="title">
          Product Specifications
        </h4>
        <p>{{$getFromLang(product.desc)}}</p>
      </div>
      <div class="product-desc" v-if="$getFromLang(product.others)">
        <h4 class="title">
          Others
        </h4>
        <p>{{$getFromLang(product.others)}}</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  props: [
    'product', 'index'
  ]
}
</script>

<style lang="stylus" scoped>

.product-desc
  white-space: pre-line

.product-desc h4.title
  margin-top: 0

.product-item
  padding: 0
  border: 1px solid #EAEAEA
  margin-bottom: 16px
  display: flex
  @media screen and (max-width: 640px)
    display: block

.product-images
  width: 300px + 32px
  height: 100%
  // margin-right: 16px
  padding: 16px
  @media screen and (max-width: 991px)
    width: 240px + 32px
  @media screen and (max-width: 768px)
    width: 188px + 32px
  @media screen and (max-width: 640px)
    width: 100%

.swiper-image
  width: 300px
  height: 300px
  @media screen and (max-width: 991px)
    width: 240px
    height: 240px
  @media screen and (max-width: 768px)
    width: 188px
    height: 188px
  @media screen and (max-width: 640px)
    width: 100%

  img
    display: block
    width: 100%
    height: 100%
    object-fit: contain
    object-position: center

.product-meta
  flex: 1
  padding: 16px
  border-left: 1px solid #EFEFEF
  @media screen and (max-width: 640px)
    border: 0
    border-top: 1px solid #EFEFEF

.swiper-pagination-bullet-active
  background-color: var(--color-primary)

h2.product-name
  margin: 0 0 2rem
  font-size: 21px
  font-weight: bold
  color: #333

.product-desc
  margin: 0 0 1rem

  .title
    margin: 0 0 0.875rem
    font-size: 0.95rem
    color: #333

  p
    margin: 0
    font-size: 0.95rem
    color: #303030

</style>