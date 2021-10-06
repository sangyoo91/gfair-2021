<template>

  <section class="section section--categories">
    <div class="container">
      <div class="text text-center">
        <h2>{{$t('home_cat_title')}}</h2>
        <p>
          {{$t('home_cat_text')}}
        </p>
      </div>
      <div class="categories-wrapper">
        <!-- v-on:click="setRouteCategory(category.id)" -->
        <div class="category-item"  v-for="category in categories" :key="category.id">
          <div class="category-product-images">
            <div v-for="product in getRandomProductsByCategoryId({
              categoryId: category.id, num: 1
            })" :key="product.id" class="category-product-image">
              <img :src="product.images[0].image.url" alt="">
              <!-- {{product}} -->
            </div>
          </div>
          <div class="date">
            {{$t(category.i18n.date)}}
          </div>
          <div class="title">
            {{$t(category.i18n.cat)}}
          </div>
          <router-link :to="{
            name: 'Companies',
            params: {
              categoryId: category.id
            }
          }">
            View Companies
          </router-link>
          <!-- <div class="company-count">
            {{getCompanyCountByCategoryName('Beauty & Health')}} Companies
          </div> -->
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          id: 'beauty-health',
          imgNum: 1,
          i18n: {
            date: 'date_beauty',
            cat: 'cat_beauty'
          }
        },
        {
          id: 'consumer-products',
          imgNum: 1,
          i18n: {
            date: 'date_consumer',
            cat: 'cat_consumer'
          }
        },
        {
          id: 'electronics-electrical-products',
          imgNum: 1,
          i18n: {
            date: 'date_electronics',
            cat: 'cat_electronics'
          }
        },
        {
          id: 'industrial-medical-products',
          imgNum: 1,
          i18n: {
            date: 'date_industrial',
            cat: 'cat_industrial'
          }
        },
      ]
    }
  },
  methods: {
    getCompanyCountByCategoryName(cat) {
      return this.companies.filter((c)=> c &&  c.category && c.category.nameEN === cat).length
    },
    setRouteCategory(categoryName) {
      this.$router.push({
        name: "Companies",
        params: {
          categoryName: categoryName
        }
      })
    },
    getRandomProductsByCategoryId({categoryId, num}) {
      return this.$store.getters.getRandomProductsByCategoryId({
        categoryId: categoryId, num: num
      })
    }
  },
}
</script>

<style lang="stylus" scoped>

.categories-wrapper
  display: grid
  align-items: center
  justify-content: center
  grid-template-columns: 1fr 1fr 1fr 1fr
  margin-top: 40px
  grid-gap: 8px
  width: 100%
  max-width: 100%
  // margin: 40px -8px 0
  @media screen and (max-width: 991px)
    grid-template-columns: 1fr 1fr
    grid-gap: 16px


.category-product-images
  position: relative
  width: 100%
  // padding: 8px
  background: white
  // border-radius: 8px
  border: 1px solid #DEDEDE
  overflow: hidden
  &:before
    display: block
    padding-top: 70%
    content: ""

.category-product-image
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  width: 100%
  height: 100%

.category-product-image img
  display: block
  width: 100%
  height: 100%
  object-fit: cover
  object-position: center

.category-item
  // cursor: pointer
  display: flex
  height: 100%
  align-items: center
  justify-content: center
  flex-direction: column
  text-align: center
  background-color: #EFEFEF
  // border-radius: 16px
  padding: 12px
  border: 1px solid #D7d7d7
  .date
    font-size: 0.875rem
    margin-top: 8px
    color: #666
  .title
    font-size: 1rem
    height: 48px
    display: flex
    align-items: center
  // &:hover
  //   transform: scale(1.025)
  a
    color: var(--color-primary)
    font-size: 13px
    text-decoration: none
  a:hover
    text-decoration: underline


</style>