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
    <section class="section--application" v-if="!didSuccess">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12">

        </div>
        <div class="col-12 col-sm-12 col-md-12">

          <!-- <p class="form-desc">
            Please carefully input your details.
          </p> -->

          <form action="" v-on:submit.prevent>

            <div class="form-group">
              <div class="input-wrapper">
                <label>{{$t('form_invite_code')}}</label>
                <select v-model="user_code" :class="{
                  error: errorKey === 'user_code',
                  'not-selected': !user_code
                }" ref="user_code">
                  <option :value="false" disabled hidden>Select an Invite Code</option>
                  <option :value="code" v-for="code in codes" :key="code.id">
                    {{code.code}}
                  </option>
                </select>
                <div class="input-error"></div>
              </div>
            </div>
            <div class="form-group">
              <div class="input-wrapper">
                <label>{{$t('form_your_company')}}</label>
                <input type="text" v-model.trim="user_company" :placeholder="$t('placeholder_your_company')" :class="{
                  error: errorKey === 'user_company'
                }" ref="user_company">
                <div class="input-error"></div>
              </div>
            </div>
            <div class="form-group">
              <div class="input-wrapper">
                <label>{{$t('form_your_name')}}</label>
                <input type="text" v-model.trim="user_name" :placeholder="$t('placeholder_your_name')" :class="{
                  error: errorKey === 'user_name'
                }" ref="user_name">
                <div class="input-error"></div>
              </div>
            </div>
            <div class="form-group">
              <div class="input-wrapper">
                <label>{{$t('form_your_job_position')}}</label>
                <input type="text" v-model.trim="user_job_position" :placeholder="$t('placeholder_your_job_position')" :class="{
                  error: errorKey === 'user_job_position'
                }" ref="user_job_position">
                <div class="input-error"></div>
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <div class="input-wrapper">
                    <label>{{$t('form_your_email')}}</label>
                    <input type="text" v-model.trim="user_email" :placeholder="$t('placeholder_your_email')" :class="{
                      error: errorKey === 'user_email'
                    }" ref="user_email">
                    <div class="input-error"></div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                  <div class="input-wrapper">
                    <label>{{$t('form_your_mobile')}}</label>
                    <!-- <input type="text" v-model.trim="user_mobile" :placeholder="$t('placeholder_your_mobile')"> -->
                    <imask-input type="text" v-model.trim="user_mobile"
                                :placeholder="$t('placeholder_your_mobile')"
                                :mask="mobileMask"
                                :class="{
                                  error: errorKey === 'user_mobile'
                                }" ref="user_mobile"/>
                    <div class="input-error"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-section">
              <h4>{{$t('form_companies_wish')}}</h4>
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <div class="input-wrapper">
                    <select v-model="categoryId" placeholder="Choose a date" :class="{
                      'not-selected': !categoryId
                    }">
                      <option :value="false" disabled hidden>Select a date/category</option>
                      <option :value="category.id" v-for="category in categories" :key="category.id">
                        [{{$t(category.i18n.date)}}] {{$t(category.i18n.cat)}}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                  <div class="input-wrapper">
                    <select v-model="companyId" placeholder="Select a company" :class="{
                      'not-selected': !companyId,
                      'disabled': !categoryId
                    }">
                      <option :value="false" disabled hidden>Select a company</option>
                      <option :value="company.id" v-for="company in companiesInSelectedDate" :key="company.id">
                        [{{company.boothNumber}}] {{$getFromLang(company.name)}}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <h4>Selected Companies</h4>
              <div v-if="selectedCompanies.length > 0">
                <div v-for="category in selectedDates" :key="category.id" class="date-group">
                  <div class="date-group-title">
                    [{{$t(category.i18n.date)}}] {{$t(category.i18n.cat)}}
                  </div>

                  <div class="selected-companies">
                    <SelectedCompany v-for="company in selectedCompaniesInCategory(category.id)"
                                    :key="company.id" :company="company"
                                    v-on:remove="removeCompany"/>
                  </div>
                </div>
              </div>
              <div class="selected-companies-message" v-else>
                No Companies Selected
              </div>
            </div>

            <Button type="submit" class="form-button" color="primary" v-on:click="submitApplication" :loading="isLoading">
              {{$t('apply_now')}}!
            </Button>
          </form>

        </div>

      </div>
    </section>
    <section class="section--application success" v-else>

      <Checkmark/>
      <h2 class="success-title">You have successfully applied for G-Fair 2021!</h2>
      <p class="success-desc">
        We have sent you an e-mail on details of your applications.
        <br/>
        Our staff will get back to you as soon as possible.
      </p>

      <div class="success-details">
        <div class="sd-r">
          <div class="c head">{{$t('form_your_company')}}</div>
          <div class="c">{{user_company}}</div>
        </div>
        <div class="sd-r">
          <div class="c head">{{$t('form_your_name')}}</div>
          <div class="c">{{user_name}}</div>
        </div>
        <div class="sd-r">
          <div class="c head">{{$t('form_your_job_position')}}</div>
          <div class="c">{{user_job_position}}</div>
        </div>
        <div class="sd-r">
          <div class="c head">{{$t('form_your_email')}}</div>
          <div class="c">{{user_email}}</div>
        </div>
        <div class="sd-r">
          <div class="c head">{{$t('form_your_mobile')}}</div>
          <div class="c">{{user_mobile}}</div>
        </div>
      </div>

      <div class="success-selected-companies">
        <div v-for="category in selectedDates" :key="category.id" class="success-date-group">
          <div class="success-date-group-title">
            [{{$t(category.i18n.date)}}] {{$t(category.i18n.cat)}}
          </div>
          <div v-for="company in selectedCompaniesInCategory(category.id)" :key="company.id" class="success-selected-company">
            <div class="name">
              {{$getFromLang(company.name)}}
            </div>
            <div class="time">
              {{company.time.str}}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</div>
</template>

<script>
import axios from 'axios'
import Checkmark from '@/components/Checkmark'
import Button from '@/components/el/button'
import SelectedCompany from '@/views/applyNow/SelectedCompany'
import {IMaskComponent} from 'vue-imask'

export default {
  data() {
    return {
      errorKey: false,
      isLoading: false,
      didSuccess: false,
      user_code: false,
      user_company: "",
      user_name: "",
      user_job_position: "",
      user_email: "",
      user_mobile: "",
      categoryId: false,
      companyId: false,
      selectedCompanies: [],
      mobileMask: [
        {mask: '000-000-0000'},
        {mask: '000-0000-0000'}
      ]
    }
  },
  components: {
    Button,
    SelectedCompany,
    Checkmark,
    'imask-input': IMaskComponent
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  watch: {
    companyId(to) {
      // console.log('to', to)
      if (to) {
        let company = this.companiesInSelectedDate.find((c)=> c.id === to)
        if (company)
          // console.log("Watch Company Id", !this.selectedCompanies.find((c)=> c.id === to))
          if (!this.selectedCompanies.find((c)=> c.id === to)) {
            company = Object.assign({}, company)
            company.time = {
              mins: 9 * 60,
              str: '9:00AM'
            }
            this.selectedCompanies.push(company)
            this.companyId =  false
          }
          // this.selectedCompanies.push(Object.assign({}, company))
      }
    }
  },
  methods: {
    removeCompany(companyId) {
      return this.selectedCompanies = this.selectedCompanies.filter((c)=> c.id !== companyId)
    },
    selectedCompaniesInCategory(categoryId) {
      return this.selectedCompanies.filter((c)=> c.category.id === categoryId)
    },
    addCompany() {
      console.log('addCompany', this.selectedCompanies.find((c)=> c.id === this.companyId))
      let company = this.companiesInSelectedDate.find((c)=> c.id === this.companyId)
      if (company)
        if (!this.selectedCompanies.find((c)=> c.id === this.companyId))
          this.selectedCompanies.push(company)
    },
    testForm() {
      console.log(
        this.user_code,
        this.user_company,
        this.user_name,
        this.user_job_position,
        this.user_email,
        this.user_mobile,
        Object.assign({}, this.selectedCompanies)
      )
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },
    submitApplication() {
      // this.testForm()
      this.errorKey = false
      let mobile = this.user_mobile.replace(/-/gi, '')

      if (!this.user_code) {
        this.errorKey = 'user_code'
        this.$refs['user_code'].focus()
        return this.$toast.error("You must select a invite code.")
      }

      if (this.user_company.trim().length < 1) {
        this.errorKey = 'user_company'
        this.$refs['user_company'].focus()
        return this.$toast.error("Please input your company name.")
      }

      if (this.user_name.trim().length < 3) {
        this.errorKey = 'user_name'
        this.$refs['user_name'].focus()
        return this.$toast.error("Please input your name.")
      }

      if (this.user_job_position.trim().length < 3) {
        this.errorKey = 'user_job_position'
        this.$refs['user_job_position'].focus()
        return this.$toast.error("Please input your job position.")
      }

      if (!this.validateEmail(this.user_email)) {
        this.errorKey = 'user_email'
        this.$refs['user_email'].focus()
        return this.$toast.error("Please input a proper email.")
      }

      if (mobile.trim().length !== 10 && mobile.trim().length !== 11) {
        this.errorKey = 'user_mobile'
        console.log(this.$refs['user_mobile'])
        this.$refs['user_mobile'].$el.focus()
        return this.$toast.error("Please input a proper mobile number.")
      }

      let formData = {
        codeId: this.user_code.id,
        code: this.user_code.code,
        user_company: this.user_company.trim(),
        user_name: this.user_name.trim(),
        user_job_position: this.user_job_position.trim(),
        user_email: this.user_email.trim(),
        user_mobile: mobile,
        selectedCompanies: [],
      }

      console.log(formData, this.selectedCompanies)

      for (let i=0; i <= this.selectedCompanies.length - 1; i++) {
        let company = this.selectedCompanies[i]
        if (!company.time) {
          return this.$toast.error(`Please select a time for ${this.$getFromLang(company.name)}.`)
        }
        this.selectedCompanies[i].date = this.categories.find((c)=> c.id === company.category.id).dateStr
        formData.selectedCompanies.push(company)
      }

      if (formData.selectedCompanies.length < 1) {
        return this.$toast.error("Please select the companies you wish to meet.")
      }
      this.isLoading = true

      axios.post(`${this.$functionsUrl}/applications/apply`, formData)
      .then(()=> {
        this.didSuccess = true
        this.$gtag.event('apply_for_event', {
          'event_category': "Apply",
          'event_label': "Apply Successful",
          'value': `[${formData.code}] ${formData.user_company} - ${formData.user_name} - ${formData.selectedCompanies.length} Companies`
        })
        this.$nextTick(()=> {
          window.scrollTo(0, 0)
        })
        return this.$toast.success("Application complete")
      }).catch(()=> {
        return this.$toast.error("Something went wrong")
      }).finally(()=> {
        this.isLoading = false
      })
    }
  },
  computed: {
    codes() {
      return this.$store.getters.getCodes
    },
    categories() {
      return this.$store.getters.getCategories
    },
    companiesInSelectedDate() {
      if (this.categoryId)
        return this.$store.getters.getCompaniesByCategoryId(this.categoryId)
      return []
    },
    selectedDates() {
      let categoryIds = []
      console.log("Run selectedDates computed", this.selectedCompanies)
      for (let i=0; i <= this.selectedCompanies.length - 1; i++) {

        console.log(this.selectedCompanies[i].name.en)
        let categoryId = this.selectedCompanies[i].category.id
        if (! categoryIds.find((cId)=> cId === categoryId)) {
          categoryIds.push(categoryId)
        }
      }
      return this.categories.filter((c)=> categoryIds.includes(c.id) )
    }
  }
}
</script>

<style lang="stylus" scoped>

.success-selected-companies
  max-width: 540px
  margin: 2rem auto 0
  color: #2F2E41

.success-date-group
  margin: 0 0 1rem
  border: 1px solid #EFEFEF

.success-date-group-title
  // margin: 0 0 0.5rem
  padding: 8px
  border-bottom: 1px solid #EFEFEF
  font-weight: bold
  font-size: 0.875rem
  @media screen and (max-width: 440px)
    text-align: center
    font-size: 0.75rem
    // margin-bottom: 0.5rem

.success-selected-company
  display: flex
  align-items: center
  justify-content: space-between
  padding: 8px
  border-bottom: 1px dotted #EFEFEF
  &:last-child
    border: 0
  // @media screen and (max-width: 440px)
  //   padding: 0 8px
  // .name, .time
  //   padding: 4px
  @media screen and (max-width: 440px)
    font-size: 0.875rem



.success-details
  max-width: 540px
  margin: 2rem auto 0
  border: 1px solid #EFEFEF
  color: #2F2E41
  .sd-r
    display: grid
    grid-template-columns: 0.75fr 2fr
    align-items: center
    border-bottom: 1px solid #EFEFEF
    @media screen and (max-width: 768px)
      grid-template-columns: 1fr 2fr
    @media screen and (max-width: 440px)
      display: block
      padding: 12px 8px

  .sd-r:last-child
    border-bottom: 0

  .c
    padding: 8px
    @media screen and (max-width: 991px)
      font-size: 0.95rem
    @media screen and (max-width: 768px)
      font-size: 0.875rem
    @media screen and (max-width: 440px)
      padding: 0
  .c:not(.head)
    text-align: center

  .c.head
    font-weight: bold
    border-right: 1px solid #EFEFEF
    font-size: 0.875rem
    @media screen and (max-width: 440px)
      text-align: center
      font-size: 0.75rem
      margin-bottom: 0.5rem

h2.success-title
  margin: 0 auto 1rem
  text-align: center
  max-width: 400px
  @media screen and (max-width: 991px)
    font-size: 27px
  @media screen and (max-width: 768px)
    font-size: 24px
p.success-desc
  text-align: center
  margin: 0 auto
  @media screen and (max-width: 991px)
    font-size: 0.95rem
  @media screen and (max-width: 768px)
    font-size: 0.875rem

.date-group
  padding: 16px
  margin: 0 -16px 8px -16px
  border: 1px solid #DEDEDE
  @media screen and (max-width: 768px)
    margin: 0 -16px 8px -16px
  @media screen and (max-width: 440px)
    border: 0
    margin: 0 -12px 0 -12px
    padding: 12px
    border-top: 1px dotted #DEDEDE
    &:last-child
      border-bottom: 1px dotted #DEDEDE



.date-group-title
  font-size: 16px
  margin-bottom: 8px
  color: #666

.page
  margin-top: calc( var(--navbar-height) )

.container
  max-width: 720px

.mast
  height: 420px
  background: linear-gradient(150deg,#281483 15%,#8f6ed5 70%,#d782d9 94%)
  padding-top: calc( var(--navbar-height) + var(--navbar-sub-height))
  display: flex
  align-items: center
  color: white
  text-align: center
  .title
    margin: 0 auto 145px
  .title h1
    margin: 0
    font-size: 32px
    @media screen and (max-width: 991px)
      font-size: 27px
    @media screen and (max-width: 768px)
      font-size: 24px
      text-align: center
    // text-align: center
  .title p
    max-width: 480px
    margin: 1em auto 0
    @media screen and (max-width: 991px)
      font-size: 0.95rem
    @media screen and (max-width: 768px)
      font-size: 0.875rem
      text-align: center

.section--application
  background-color: white
  margin-top: -100px
  padding: 16px
  padding: 32px
  border-radius: 4px
  border: 1px solid #DEDEDE
  &.success
    padding: 32px 8px
  @media screen and (max-width: 768px)
    padding: 32px 24px
  @media screen and (max-width: 440px)
    padding: 24px 12px

p.form-desc
  margin: 0 auto 1rem

.input-wrapper
  margin-bottom: 16px

.input-wrapper label
  font-size: 13px
  display: block
  text-transform: uppercase
  margin-bottom: 4px
  color: #7b7879

.input-wrapper input
.input-wrapper select
  height: 42px
  width: 100%
  background-color: #F6FAFD
  border: 1px solid #d8e0e6
  border-radius: 2px
  outline: 0
  padding: 0 8px
  appearance: none
  &:focus
    border-color: #5e72e4
    box-shadow: 0 0 0 4px rgba(#5e72e4, 0.25)
  &::placeholder
    color: #cbd0d4
    font-weight: 300
  &.error
    border: 1px solid #DE6F6F
    background-color: #F7C7CB + 70%
  &.error:focus
    border-color: #DE6F6F
    box-shadow: 0 0 0 4px rgba(#DE6F6F, 0.25)
  &.error::placeholder
    color: #F7C7CB
  &.not-selected:not(:focus):not(:active)
    color: #cbd0d4
  &.disabled
    user-select: none
    pointer-events: none
    opacity: 0.5

.form-button
  margin-top: 1rem
  width: 100%
  height: 42px

.selected-companies-message
  padding: 32px
  text-align: center
  background-color: #F6FAFD
  border: 1px solid #d8e0e6
  color: #2F2E41
  font-size: 16px

</style>