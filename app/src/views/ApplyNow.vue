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
                    <input type="text" v-model.trim="user_mobile" :placeholder="$t('placeholder_your_mobile')">
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
              <div v-for="category in selectedDates" :key="category.id" class="date-group">
                <div class="date-group-title">
                  [{{$t(category.i18n.date)}}] {{$t(category.i18n.cat)}}
                </div>

                <div class="selected-companies">
                  <SelectedCompany v-for="company in selectedCompaniesInCategory(category.id)" :key="company.id" :company="company"/>
                </div>
              </div>
            </div>

            <Button type="submit" class="form-button" color="primary" v-on:click="checkCompany">
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
import SelectedCompany from '@/views/applyNow/SelectedCompany'

export default {
  data() {
    return {
      user_company: "",
      user_name: "",
      user_job_position: "",
      user_email: "",
      user_mobile: "",
      categoryId: false,
      companyId: false,
      selectedCompanies: []
    }
  },
  components: {
    Button, SelectedCompany
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
    checkCompany() {
      console.log(

        Object.assign({}, this.selectedCompanies)

      )
    }
  },
  computed: {
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