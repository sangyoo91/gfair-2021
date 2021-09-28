<template>
  <div class="categories-wrapper">
    <div class="category-item-wrapper" :class="{
      active: !$route.params.categoryName || $route.params.categoryName === 'all'
    }" v-on:click="setRouteCategory('all')">
      <div class="category-item">

        <div class="title">
          {{$t('cat_all')}}
        </div>
        <div class="company-count">
          {{allCompanies.length}} Companies
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
          {{getCompanyCountByCategoryName('beauty-health')}} Companies
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
          {{getCompanyCountByCategoryName('consumer-products')}} Companies
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
          {{getCompanyCountByCategoryName('electronics-electrical-products')}} Companies
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
          {{getCompanyCountByCategoryName('industrial-medical-products')}} Companies
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'baseRoute'
  ],
  methods: {
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
    getCompanyCountByCategoryName(cat) {
      return this.allCompanies.filter((c)=> c &&  c.category && c.category.id === cat).length
    },
  },
  computed: {
    allCompanies() {
      return this.$store.getters['getCompanies']
    },
  }
}
</script>

<style lang="stylus" scoped>


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
  @media screen and (max-width: 640px)
    grid-template-columns: 1fr

.category-item
  cursor: pointer
  user-select: none
  position: relative
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  text-align: center
  padding: 16px 8px
  height: 100%
  &:hover
    background-color: rgba(#5e72e4, 0.025)
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
  @media screen and (max-width: 768px)
    .active &
      background-color: rgba(#5e72e4, 0.05)
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
    @media screen and (max-width: 768px)
      opacity: 0

</style>