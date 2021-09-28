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
      <CategoriesHeader/>
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
import CategoriesHeader from '@/components/CategoriesHeader'

export default {
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {

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
  },
  components: {
    CategoriesHeader
  }
}
</script>


<style lang="stylus" scoped>

.mast
  min-height: 400px
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
  grid-template-columns: 48px 1fr 2fr
  border-bottom: 1px solid #efefef
  &.table-head-row
  &:last-child
    border: 0
  // @media screen and (max-width: 640px)

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