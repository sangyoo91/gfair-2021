<template>
<div class="page">
  <section class="mast">
    <div class="container">
        <div class="title">
          <h1>{{$t('apply_form_mast_title')}}</h1>
          <p>{{$t('apply_form_mast_desc')}}</p>
        </div>
    </div>
  </section>
  <div class="container">
    <section class="section--application">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12">

        </div>
        <div class="col-12 col-sm-12 col-md-12">

          <p class="form-desc">
            Please carefully input your details.
          </p>

          <form action="" v-on:submit.prevent>

            <div class="form-group">
              <div class="input-wrapper">
                <label>{{$t('form_your_company')}}</label>
                <input type="text" :placeholder="$t('placeholder_your_company')">
                <div class="input-error"></div>
              </div>
            </div>
            <div class="form-group">
              <div class="input-wrapper">
                <label>{{$t('form_your_name')}}</label>
                <input type="text" :placeholder="$t('placeholder_your_name')">
                <div class="input-error"></div>
              </div>
            </div>
            <div class="form-group">
              <div class="input-wrapper">
                <label>{{$t('form_your_job_position')}}</label>
                <input type="text" :placeholder="$t('placeholder_your_job_position')">
                <div class="input-error"></div>
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col">
                  <div class="input-wrapper">
                    <label>{{$t('form_your_email')}}</label>
                    <input type="text" :placeholder="$t('placeholder_your_email')">
                    <div class="input-error"></div>
                  </div>
                </div>
                <div class="col">
                  <div class="input-wrapper">
                    <label>{{$t('form_your_mobile')}}</label>
                    <input type="text" :placeholder="$t('placeholder_your_mobile')">
                    <div class="input-error"></div>
                  </div>
                </div>
              </div>
            </div>
            <Button type="submit" class="form-button" color="primary">
              {{$t('apply_now')}}!
            </Button>
          </form>

        </div>

      </div>
      </section>
  </div>

</div>
</template>

<script>
import Button from '@/components/el/button'

export default {
  components: {
    Button
  }
}
</script>

<style lang="stylus" scoped>
.page
  margin-top: var(--navbar-height)

.container
  max-width: 720px

.mast
  height: 400px
  background: linear-gradient(150deg,#281483 15%,#8f6ed5 70%,#d782d9 94%)
  padding-top: var(--navbar-height)
  display: flex
  align-items: center
  color: white
  text-align: center

  .title
    margin: 0 auto 95px
  .title h1
    margin: 0
    font-size: 32px
    // text-align: center
  .title p
    max-width: 480px
    margin: 1em auto 0

.section--application
  background-color: white
  margin-top: -100px
  padding: 16px
  padding: 32px
  border-radius: 4px
  border: 1px solid #DEDEDE

p.form-desc
  margin: 0 auto 1rem

.input-wrapper
  margin-bottom: 8px

.input-wrapper label
  font-size: 13px
  display: block
  text-transform: uppercase
  margin-bottom: 4px
  color: #7b7879

.input-wrapper input
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

.form-button
  margin-top: 1rem
  width: 100%
  height: 42px

</style>