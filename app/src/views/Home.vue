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

    <section class="section--anywhere">
      <div class="container">
        <div class="text">
          <h2>From anywhere by your convenience, with your computer or phone.</h2>
          <p>
            Korea Online Trade Meet is held online. This means as long as you have access to the internet,
            with any smart devices or a computer, you can participate in meeting companies you are interested in.
          </p>

        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
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

.container
  max-width: 1024px + 16px
  margin: 0 auto
  padding: 0 16px

.title
  color: white

.title h2
  font-size: 14px
  margin: 0
  text-align: center

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

section.section--anywhere
  padding: 72px 0 128px

section.section--anywhere .text
  max-width: 50%


</style>