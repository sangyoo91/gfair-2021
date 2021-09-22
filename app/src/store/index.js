import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    companies: []
  },
  mutations: {
    SET_COMPANIES_FROM_DOCS(state, docs) {
      state.companies = []
      docs.forEach((d)=> {
        let company = d.data()
        company.id = d.id
        state.companies.push(company)
      })
    }
  },
  getters: {
    getCompanies({companies}) {
      return companies.filter((c)=> c && c.name)
    }
  },
  actions: {
  },
  modules: {
  }
})
