<template>
  <div class="notice">
    <div class="container">
      <div class="text">
        {{$t('covid_notice')}}
      </div>
      <Button :size="'small'" :rounded="true" v-on:click="$emit('click')">
        I Understand
      </Button>
    </div>

  </div>
</template>

<script>
import Button from "@/components/el/button"
export default {
  components: {
    Button
  }
}
</script>


<style lang="stylus" scoped>
.notice
  height: var(--navbar-height)
  width: 100%
  background-image: linear-gradient(135deg, #FF9500 0%, #f37227 100%)

.notice .container
  height: var(--navbar-height)
  color: white
  display: flex
  justify-content: space-between
  align-items: center

  .text
    text-align: center
    font-size: 1.0rem

</style>

