<template>
  <div class="home">
    <section class="mast">
      <div class="container">
        <div class="title">
          <h2 v-html="$t('highlighted_name')"></h2>
          <h1>{{$t('title_general')}}</h1>
        </div>
        <p>{{$t('mast_text')}}</p>
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
  min-height: 100vh
  background: linear-gradient(150deg,#281483 15%,#8f6ed5 70%,#d782d9 94%)
  padding-top: var(--navbar-height)
  display: flex
  align-items: center

.mast .container
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

</style>