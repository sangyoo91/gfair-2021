<template>
  <div class="page">
    <section class="section-company-intro">
      <h1>{{$t('companies')}}</h1>
    </section>
    <div v-if="companies.length > 0">
      <div v-for="company in companies" :key="company.id">
        {{company.name[lang]}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    companies() {
      return this.$store.getters.getCompanies
    },
    lang() {
      return this.$i18n.locale
    }
  }
}
</script>
