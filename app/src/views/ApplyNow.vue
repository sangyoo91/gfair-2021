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
                <label>{{$t('form_invite_code')}}</label>
                <select v-model="user_code">
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
                <input type="text" v-model.trim="user_company" :placeholder="$t('placeholder_your_company')">
                <div class="input-error"></div>
              </div>
            </div>
            <div class="form-group">
              <div class="input-wrapper">
                <label>{{$t('form_your_name')}}</label>
                <input type="text" v-model.trim="user_name" :placeholder="$t('placeholder_your_name')">
                <div class="input-error"></div>
              </div>
            </div>
            <div class="form-group">
              <div class="input-wrapper">
                <label>{{$t('form_your_job_position')}}</label>
                <input type="text" v-model.trim="user_job_position" :placeholder="$t('placeholder_your_job_position')">
                <div class="input-error"></div>
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <div class="input-wrapper">
                    <label>{{$t('form_your_email')}}</label>
                    <input type="text" v-model.trim="user_email" :placeholder="$t('placeholder_your_email')">
                    <div class="input-error"></div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                  <div class="input-wrapper">
                    <label>{{$t('form_your_mobile')}}</label>
                    <!-- <input type="text" v-model.trim="user_mobile" :placeholder="$t('placeholder_your_mobile')"> -->
                    <imask-input type="text" v-model.trim="user_mobile"
                                :placeholder="$t('placeholder_your_mobile')"
                                :mask="mobileMask"/>
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
                    <select v-model="categoryId" placeholder="Choose a date">
                      <option :value="category.id" v-for="category in categories" :key="category.id">
                        [{{$t(category.i18n.date)}}] {{$t(category.i18n.cat)}}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                  <div class="input-wrapper">
                    <select v-model="companyId" placeholder="Select a company">
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
                    <SelectedCompany v-for="company in selectedCompaniesInCategory(category.id)" :key="company.id" :company="company"/>
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
  </div>

</div>
</template>

<script>
import axios from 'axios'
import Button from '@/components/el/button'
import SelectedCompany from '@/views/applyNow/SelectedCompany'
import {IMaskComponent} from 'vue-imask'

export default {
  data() {
    return {
      isLoading: false,
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
    'imask-input': IMaskComponent
  },
  watch: {
    companyId(to) {
      console.log('to', to)
      if (to) {
        let company = this.companiesInSelectedDate.find((c)=> c.id === to)
        if (company)
          if (!this.selectedCompanies.find((c)=> c.id === to))
            company = Object.assign({}, company)
            company.time = '8:45AM'
            this.selectedCompanies.push(company)
          // this.selectedCompanies.push(Object.assign({}, company))
      }
    }
  },
  methods: {
    selectedCompaniesInCategory(categoryId) {
      return this.selectedCompanies.filter((c)=> c.category.id === categoryId)
    },
    addCompany() {
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
      this.testForm()

      let mobile = this.user_mobile.replace(/-/gi, '')

      if (!this.user_code) {
        return this.$toast.error("You must select a invite code.")
      }

      if (this.user_company.trim().length < 1) {
        return this.$toast.error("Please input your company name.")
      }

      if (this.user_name.trim().length < 3) {
        return this.$toast.error("Please input your name.")
      }

      if (this.user_job_position.trim().length < 3) {
        return this.$toast.error("Please input your job position.")
      }

      if (!this.validateEmail(this.user_email)) {
        return this.$toast.error("Please input a proper email.")
      }

      if (mobile.trim().length !== 10 && mobile.trim().length !== 11) {
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
        formData.selectedCompanies.push(company)
      }

      if (formData.selectedCompanies.length < 1) {
        return this.$toast.error("Please select the companies you wish to meet.")
      }
      this.isLoading = true

      axios.post(`${this.$functionsUrl}/applications/apply`, formData)
      .then(()=> {
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

.date-group
  padding: 16px
  margin: 0 -16px 8px -16px
  border: 1px solid #DEDEDE
.date-group-title
  font-size: 16px
  margin-bottom: 8px
  color: #666

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

.form-button
  margin-top: 1rem
  width: 100%
  height: 42px

</style>