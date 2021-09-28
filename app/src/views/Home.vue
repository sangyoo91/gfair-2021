<template>
  <div class="home">
    <section class="mast">
      <div class="container">
        <div class="title">
          <div class="svg">
            <svgLogo/>
          </div>
          <h2 v-html="$t('highlighted_name')"></h2>
          <h1>{{$t('title_general')}}</h1>
        </div>
        <p>{{$t('mast_text')}}</p>

        <div class="card">
          <div class="date-wrapper">
            <label for="">
              Date
            </label>
            <div class="date">
              {{$t('date_verbose')}}
            </div>
          </div>
        </div>
      </div>

    </section>

    <section class="section section--anywhere">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6">
            <div class="text">
              <h2>From anywhere by your convenience, with your computer or phone.</h2>
              <p>
                Korea Online Trade Meet is held online. This means as long as you have access to the internet,
                with any smart devices or a computer, you can meet companies you are interested in.
              </p>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6">
            <div class="icon-image-wrapper">
              <svgMeet/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--network">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 order-sm-12 order-12">
            <div class="icon-image-wrapper">
              <svgVariety/>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 ">
            <div class="text">
              <h2>A wide selection of different companies and products</h2>
              <p>
                We have a wide selection of companies and products that you can choose from across a variety of industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Categories/>
    <FeaturedProducts/>
  </div>
</template>

<script>
import Categories from '@/views/home/Categories'
import FeaturedProducts from '@/views/home/FeaturedProducts'
import svgLogo from '@/components/svg/svgLogo'
import svgMeet from '@/components/svg/svgMeet'
import svgVariety from '@/components/svg/svgVariety'
export default {
  name: 'Home',
  components: {
    FeaturedProducts,
    Categories,
    svgLogo,
    svgMeet,
    svgVariety
  },
  mounted () {
    window.scrollTo(0, 0)
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
  height: 50vh
  min-height: 700px
  background: linear-gradient(150deg,#281483 15%,#8f6ed5 70%,#d782d9 94%)
  // background: linear-gradient(150deg, #6C63FF 15%, #FF6584 94%)
  padding-top: calc( var(--navbar-height) + var(--navbar-sub-height))
  padding-bottom: calc(var(--navbar-height) * 0.4)
  display: flex
  align-items: center

  .svg
    width: 100px
    height: auto
    margin: 0 auto 2rem
  .svg svg
    display: block
    width: 100%
    height: auto
    fill: white
    margin: 0 auto
  .text > .title
  .title
    color: white

  .text > .title h2
  .title h2
    font-size: 14px
    margin: 0
    text-align: center
    font-weight: 700

  .text > .title h1
  .title h1
    margin: 0
    font-size: 32px
    text-align: center
    font-weight: 700

.mast .card
  padding: 24px 32px 32px
  background-color: white
  max-width: 440px
  border-radius: 16px
  box-shadow: 0 16px 32px rgba(black, 0.15)
  margin: 0 auto
  border: 1px solid #EFEFEF
  color: #2F2E41


.date-wrapper label
  display: block
  text-align: center
  margin: 0 auto 8px
  // color: white
  font-weight: bold
  text-transform: uppercase
  opacity: 0.95
  font-size: 0.95rem
  @media screen and (max-width: 991px)
    font-size: 0.875rem
  @media screen and (max-width: 768px)
    font-size: 0.8rem
.date-wrapper .date
  text-align: center
  font-size: 21px
  @media screen and (max-width: 991px)
    font-size: 18px
  @media screen and (max-width: 768px)
    font-size: 16px


.mast p
  max-width: 520px
  margin: 32px auto
  text-align: center
  color: rgba(white, 0.75)

section.section
  padding: 72px 0 128px


// section.section > .container.align-right
//   justify-content: flex-end

section.section .text
  &.text-right
    text-align: right
    @media screen and (max-width: 768px)
      text-align: center
  &.text-center
    max-width: 100%
    text-align: center

.icon-image-wrapper
  width: 100%

  svg
    display: block
    width: 100%
    height: auto

  @media screen and (max-width: 768px)
    margin: auto
    max-width: 420px
</style>