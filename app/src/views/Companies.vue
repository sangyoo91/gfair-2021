<template>
  <div class="page">
    <section class="mast">
      <div class="container">
        <div class="title">
          <h1>{{$t('companies_mast_title')}}</h1>
          <p>{{$t('companies_mast_desc')}}</p>
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
    </div>
    <div class="container">
      <div v-if="companies.length > 0">
        <div class="table">
          <div class="table-row table-head-row">
            <div class="cell">BN</div>
            <div class="cell">Company Name</div>
            <div class="cell">Products</div>
            <!-- <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div> -->
          </div>
          <div v-for="company in companies" :key="company.id" class="table-row">
            <div class="cell">
              {{company.boothNumber}}
            </div>
            <div class="cell">
              <router-link :to="{
                name: 'Company',
                params: {
                  companyId: company.id
                }
              }">{{company.name[lang]}}</router-link>
            </div>
            <div class="cell">
              <span v-if="company.products.length > 0">
                {{company.products[0].name[lang] ? company.products[0].name[lang] : company.products[0].name.en}}
              </span>
              <span v-if="company.products.length > 1" class="light">
                and {{company.products.length - 1}} more
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    getCompanyCountByCategoryName(cat) {
      return this.allCompanies.filter((c)=> c &&  c.category && c.category.id === cat).length
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
    allCompanies() {
      return this.$store.getters['getCompanies']
    },
    companies() {
      let companies = this.allCompanies
      let param = this.$route.params.categoryName
      if (!param || param === 'all' || ![
        'beauty-health',
        'consumer-products',
        'electronics-electrical-products',
        'industrial-medical-products'
      ].includes(param)) {
        return companies
      } else {
        return companies.filter((c)=> c.category && c.category.id === param)
      }
    },
    lang() {
      return this.$i18n.locale
    }
  }
}
</script>


<style lang="stylus" scoped>

.mast
  min-height: 33vh
  background: linear-gradient(150deg,#281483 15%,#8f6ed5 70%,#d782d9 94%)
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

    // text-align: center

.table
  color: #5a5658
  margin-top: 32px

.table-head-row
  background-color: #F5F5F5

.table-row
  display: grid
  grid-template-columns: minmax(48px, 72px) 1fr 2fr
  border-bottom: 1px solid #efefef
  &.table-head-row
  &:last-child
    border: 0

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