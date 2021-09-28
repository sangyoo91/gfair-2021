<template>
  <div class="company">
    <div class="row">
      <div class="col-sm-12 col-md-7">
        <div class="company-meta">
          <div class="company-logo">
            <img :src="company.logo.image.url" v-if="company.logo && company.logo.thumb"/>
          </div>
          <div class="company-name">
            [{{company.boothNumber}}] {{$getFromLang(company.name)}}
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-5">
        <div class="company-time">
          <div class="input-wrapper">
            <select v-model="company.time">
              <option v-for="time in getTimes()" :key="time.str" :value="time">
                {{time.str}}
              </option>
            </select>
          </div>
          <button class="btn-remove" v-on:click="$emit('remove', company.id)">
            <svgCross/>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import svgCross from '@/components/svg/svgCross'

export default {
  props: [
    'company'
  ],
  components: {
    svgCross
  },
  methods: {
    getTimes() {
      let minPerInterval = 50
      let times = []
      let startTime = 540 // Start Time in Minutes. 0 == 12AM
      let ampm = ['AM', 'PM']
      let i = 0
      // End Time + 1
      while (startTime < 11 * 60 + 31) {
        let hh = Math.floor(startTime / 60)
        let mm = startTime % 60
        times[i] = {
          mins: startTime,
          str: ('' + (hh == 12 ? 12 : hh % 12)).slice(-2) + ':' + ('0' + mm).slice(-2) + ampm[Math.floor(hh/12)]
        }
        startTime = startTime + minPerInterval
        i++
      }
      startTime = 13 * 60 + 20
      while (startTime < 15 * 60 + 1) {
        let hh = Math.floor(startTime / 60)
        let mm = startTime % 60
        times[i] = {
          mins: startTime,
          str: ('' + (hh == 12 ? 12 : hh % 12)).slice(-2) + ':' + ('0' + mm).slice(-2) + ampm[Math.floor(hh/12)]
        }
        startTime = startTime + minPerInterval
        i++
      }
      console.log(times, this.categoryId, this.companyId, this.selectedCompanies)
      return times
    }
  }
}
</script>

<style lang="stylus" scoped>
.company-time
.company-meta
  padding: 4px 0
.company-meta
  display: flex
  align-items: center

.company-logo
  width: 42px
  height: 42px
  padding: 2px
  border: 1px solid #DDD
  margin-right: 4px

  img
    width: 100%
    height: 100%
    object-fit: contain

.company-name
  font-weight: bold

.input-wrapper
  flex: 1
.input-wrapper input
.input-wrapper select
  height: 42px
  width: 100%
  background-color: #F6FAFD
  border: 1px solid #DDD
  border-radius: 2px
  outline: 0
  padding: 0 8px
  &:focus
    border-color: #5e72e4
    box-shadow: 0 0 0 4px rgba(#5e72e4, 0.25)
  &::placeholder
    color: #CCC
    font-weight: 300

.company-time
  display: flex
  align-items: center

  button
    width: 32px
    height: 32px
    margin-left: 4px
    display: flex
    align-items: center
    justify-content: center
    outline: 0
    border: 1px solid #CCC
    background-color: #F0F0F0
    border-radius: 2px
    color: #333
    &:hover
      background-color: #EAEAEA
    &:focus
      border-color: #5e72e4
      box-shadow: 0 0 0 2px rgba(#5e72e4, 0.25)

  button svg
    display: block
    width: 8px
    height: auto
    fill: currentColor
</style>