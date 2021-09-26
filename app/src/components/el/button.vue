<template>
  <button :class="{
    'button--sm': size === 'small',
    'button--rounded': rounded,
    'button--primary': color === 'primary',
    'loading': loading
  }" v-on:click="click">
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    size: {
      default: "normal",
      type: String
    },
    rounded: {
      default: false,
      type: Boolean
    },
    color: {
      default: 'default',
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
    goto: {
      type: null,
      default: null
    },
  },
  methods: {
    click() {
      if (this.goto != null) {
        return this.$router.push(this.goto)
      }
      this.$emit('click')
    }
  }
}
</script>


<style lang="stylus" scoped>

button
  font-size: 0.875rem
  padding: 0.625rem 1.25rem
  color: var(--color-primary)
  background-color: white
  font-weight: 600
  border: 1px solid transparent
  border-radius: var(--button-border-radius)
  text-transform: uppercase
  box-shadow: 0 4px 8px rgba(50, 50, 93, 0.05), 0 3px 9px rgba(0, 0, 0, 0.08)
  transition: color .15s ease-in-out,
              background-color .15s ease-in-out,
              border-color .15s ease-in-out,
              box-shadow .15s ease-in-out
  user-select: none
  outline: 0
  &.button--sm
    font-size: 0.75rem
    padding: 0.5rem 1.0rem

  &.button--rounded
    border-radius: 1rem

  &.button--primary
    background-color: var(--color-primary)
    color: white
    &:after
      border-color: white

  &:focus
    box-shadow: 0 0 0 4px rgba(#5e72e4, 0.25)

  &:after
    position: absolute
    top: 50%
    left: 50%
    height: 1.25em
    width: 1.25em
    transform: translate3d(-50%, -50%, 0)
    border: 2px solid var(--color-primary)
    border-top-color: transparent
    border-radius: 50%
    content: ""
    opacity: 0
    transition: opacity 200ms

  &.loading
    color: transparent

  &.loading:after
    opacity: 1
    animation-name: spin
    animation-duration: 1s
    animation-iteration-count: infinite

button:hover
  transform: translate3d(0, -1px, 0)
  color: #212529
  &.button--primary
    color: white

</style>