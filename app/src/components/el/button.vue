<template>
  <button>
    <slot/>
  </button>
</template>

<style lang="stylus" scoped>

button
  font-size: 0.875rem
  padding: 0.625rem 1.25rem
  color: var(--color-primary)
  background-color: white
  font-weight: 600
  font-size: 14px
  border: 1px solid transparent
  border-radius: var(--button-border-radius)
  text-transform: uppercase
  box-shadow: 0 4px 8px rgba(50, 50, 93, 0.05), 0 3px 9px rgba(0, 0, 0, 0.08)
  transition: color .15s ease-in-out,
              background-color .15s ease-in-out,
              border-color .15s ease-in-out,
              box-shadow .15s ease-in-out
  user-select: none

button:hover
  transform: translate3d(0, -1px, 0)
  color: #212529

</style>