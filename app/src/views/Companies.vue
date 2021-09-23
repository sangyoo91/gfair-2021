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
          <div class="category-item-wrapper">
            <div class="category-item">
              <div class="date">
                {{$t('date_beauty')}}
              </div>
              <div class="title">
                {{$t('cat_beauty')}}
              </div>
              <div class="company-count">
                {{getCompanyCountByCategoryName('Beauty & Health')}} Companies
              </div>
            </div>
          </div>
          <div class="category-item-wrapper">
            <div class="category-item">
              <div class="date">
                {{$t('date_consumer')}}
              </div>
              <div class="title">
                {{$t('cat_consumer')}}
              </div>
              <div class="company-count">
                {{getCompanyCountByCategoryName('Consumer Products')}} Companies
              </div>
            </div>
          </div>
          <div class="category-item-wrapper">
            <div class="category-item">
              <div class="date">
                {{$t('date_electronics')}}
              </div>
              <div class="title">
                {{$t('cat_electronics')}}
              </div>
              <div class="company-count">
                {{getCompanyCountByCategoryName('Electronics & Electrical Products')}} Companies
              </div>
            </div>
          </div>
          <div class="category-item-wrapper">
            <div class="category-item">
              <div class="date">
                {{$t('date_industrial')}}
              </div>
              <div class="title">
                {{$t('cat_industrial')}}
              </div>
              <div class="company-count">
                {{getCompanyCountByCategoryName('Industrial & Medical Products')}} Companies
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
              <a href>{{company.name[lang]}}</a>
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
  methods: {
    getCompanyCountByCategoryName(cat) {
      return this.companies.filter((c)=> c &&  c.category && c.category.nameEN === cat).length
    }
  },
  computed: {
    companies() {
      return this.$store.getters['getCompanies']
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
  padding-top: var(--navbar-height)
  display: flex
  align-items: center
  color: white

  .title h1
    margin: 0
    font-size: 32px
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
  grid-template-columns: 1fr 1fr 1fr 1fr
  // display: flex
  // align-items: center
  // justify-content: center

.category-item
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
  .title
    font-size: 16px
  .company-count
    margin-top: 8px
    font-size: 12px
</style>