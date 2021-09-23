import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    companies: [],
    products: []
  },
  mutations: {
    SET_COMPANIES_FROM_DOCS(state, docs) {
      state.companies = []
      // docs.forEach((d)=> {
      //   let company = d.data()
      //   company.id = d.id
      //   state.companies.push(company)
      // })
      for (let i=0; i < docs.length - 1; i++) {
        let company = docs[i].data()
        company.id = docs[i].id
        state.companies.push(company)
      }
      for (let ci=0; ci <state.companies.length - 1; ci++) {
        let company = state.companies[ci]
        if (company.products) {
          for (let i=0; i < company.products.length - 1; i++) {
            let product = Object.assign({}, company.products[i])
            product.companyId = company.id
            product.companyLogoUrl = company.logo.image.url
            product.companyName = Object.assign({}, company.name)
            state.products.push(product)
          }
        }
      }
    }
  },
  getters: {
    getCompanies({companies}) {
      return companies.filter((c)=> c && c.name).sort((a, b)=> {
        if (a.boothNumber > b.boothNumber) {
          return 1
        } else {
          return -1
        }
      })
    },
    getProducts({products}) {
      return products
    },
    getRandomProducts: ({products})=>(num)=> {
      const shuffled = products.filter((p)=>p.images && p.images.length > 0).sort(() => 0.5 - Math.random())
      return shuffled.slice(0, num)
    },
  },
  actions: {
  },
  modules: {
  }
})
