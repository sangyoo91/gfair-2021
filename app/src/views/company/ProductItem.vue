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
        {{index+1}}.{{$getFromLang(product.name)}}
      </h2>
      <div class="product-desc" v-if="$getFromLang(product.features)">
        <h4 class="title">
          Product Features
        </h4>
        {{$getFromLang(product.features)}}
      </div>
      <div class="product-desc" v-if="$getFromLang(product.desc)">
        <h4 class="title">
          Product Specifications
        </h4>
        {{$getFromLang(product.desc)}}
      </div>
      <div class="product-desc" v-if="$getFromLang(product.others)">
        <h4 class="title">
          Others
        </h4>
        {{$getFromLang(product.others)}}
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
  border: 1px solid #EFEFEF
  margin-bottom: 16px
  display: flex

.product-images
  width: 300px + 32px
  margin-right: 16px
  padding: 16px
  border-right: 1px solid #EFEFEF

.swiper-image
  width: 300px
  height: 300px

  img
    display: block
    width: 100%
    height: 100%
    object-fit: contain
    object-position: center

.product-meta
  flex: 1
  padding: 16px

</style>