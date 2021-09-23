<template>
  <div class="home">
    <section class="mast">
      <div class="container">
        <div class="title">
          <h2 v-html="$t('highlighted_name')"></h2>
          <h1>{{$t('title_general')}}</h1>
        </div>
        <p>{{$t('mast_text')}}</p>

        <div class="date-wrapper">
          <label for="">
            Date
          </label>
          <div class="date">
            {{$t('date_verbose')}}
          </div>

        </div>
      </div>

    </section>

    <section class="section section--anywhere">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="text">
              <h2>From anywhere by your convenience, with your computer or phone.</h2>
              <p>
                Korea Online Trade Meet is held online. This means as long as you have access to the internet,
                with any smart devices or a computer, you can meet companies you are interested in.
              </p>
            </div>
          </div>
          <div class="col-12 col-md-6">
          </div>
        </div>
      </div>
    </section>

    <section class="section section--network">
      <div class="container align-right">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6">
            </div>
            <div class="col-12 col-md-6">
              <div class="text text-right">
                <h2>A wide selection of different companies and products</h2>
                <p>
                  We have a wide selection of companies and products that you can choose from across a variety of industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--categories">
      <div class="container no-flex">
        <div class="text text-center">
          <h2>Korea Trade Meeting Products</h2>
          <p>
            These are the product categories that will be shown in Online.
          </p>
        </div>
        <div class="categories-wrapper">
          <div class="category-item" v-on:click="setRouteCategory('beauty-health')">
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
          <div class="category-item" v-on:click="setRouteCategory('consumer-products')">
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
          <div class="category-item" v-on:click="setRouteCategory('electronics-electrical-products')">
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
          <div class="category-item" v-on:click="setRouteCategory('industrial-medical-products')">
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
    </section>
    <FeaturedProducts/>
  </div>
</template>

<script>
import FeaturedProducts from '@/views/home/FeaturedProducts'
export default {
  name: 'Home',
  components: {
    FeaturedProducts
  },
  mounted () {
    window.scrollTo(0, 0)
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
  },
  computed: {
    companies() {
      return this.$store.getters.getCompanies
    },

    lang() {
      return this.$i18n.locale
    }
  }
}
</script>

<style lang="stylus" scoped>

.mast
  min-height: 75vh
  background: linear-gradient(150deg,#281483 15%,#8f6ed5 70%,#d782d9 94%)
  padding-top: var(--navbar-height)
  display: flex
  align-items: center

  .text > .title
  .title
    color: white

  .text > .title h2
  .title h2
    font-size: 14px
    margin: 0
    text-align: center

  .text > .title h1
  .title h1
    margin: 0
    font-size: 32px
    text-align: center

.mast p
  max-width: 520px
  margin: 32px auto
  text-align: center
  color: rgba(white, 0.75)

.date-wrapper label
  display: block
  text-align: center
  margin: 0 auto 4px
  color: white
  opacity: 0.85

.date-wrapper .date
  text-align: center
  font-size: 1.25rem
  color: white

section.section
  padding: 72px 0 128px

section.section > .container
  display: flex
  &.no-flex
    display: block

// section.section > .container.align-right
//   justify-content: flex-end

section.section .text
  &.text-right
    text-align: right

  &.text-center
    max-width: 100%
    text-align: center

.categories-wrapper
  display: flex
  align-items: center
  justify-content: center
  margin-top: 40px

.category-item
  margin: 0 16px
  width: 200px
  height: 200px
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  text-align: center
  background-color: #EFEFEF
  border-radius: 16px
  padding: 16px

  .title
    font-size: 1.15rem


</style>