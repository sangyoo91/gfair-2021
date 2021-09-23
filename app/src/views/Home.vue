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
            September 9th ~ 12th
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
    </section>


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
              <div class="product-meta-head">

                <div class="product-company-name">
                  <div class="logo">
                    <img :src="product.companyLogoUrl" alt="">
                  </div>
                  {{$getFromLang(product.companyName)}}
                </div>
                <div class="product-name">
                  {{$getFromLang(product.name)}}
                </div>

              </div>
              <div class="product-desc line-clamp">
                {{$getFromLang(product.desc)}}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  methods: {
    getCompanyCountByCategoryName(cat) {
      return this.companies.filter((c)=> c &&  c.category && c.category.nameEN === cat).length
    }
  },
  computed: {
    companies() {
      return this.$store.getters.getCompanies
    },
    products() {
      return this.$store.getters['getRandomProducts'](6)
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
  padding: 8px 16px
  border-bottom: 1px solid #EFEFEF

.product-company-name
  display: flex
  align-items: center
  text-decoration: underline
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

.product-desc
  font-size: 14px
  color: #666
  padding: 16px

</style>