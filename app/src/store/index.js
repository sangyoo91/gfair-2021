import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    companies: [],
    products: [],
    categories: [
      {
        id: 'beauty-health',
        imgNum: 1,
        i18n: {
          date: 'date_beauty',
          cat: 'cat_beauty'
        },
        dateStr: '11/16'
      },
      {
        id: 'consumer-products',
        imgNum: 1,
        i18n: {
          date: 'date_consumer',
          cat: 'cat_consumer'
        },
        dateStr: '11/17'
      },
      {
        id: 'electronics-electrical-products',
        imgNum: 1,
        i18n: {
          date: 'date_electronics',
          cat: 'cat_electronics'
        },
        dateStr: '11/18'
      },
      {
        id: 'industrial-medical-products',
        imgNum: 1,
        i18n: {
          date: 'date_industrial',
          cat: 'cat_industrial'
        },
        dateStr: '11/19'
      },
    ],
    isNotice: true,
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
            product.categoryId = company.category.id
            if (company.logo && company.logo.image)
              product.companyLogoUrl = company.logo.image.url
            product.companyName = Object.assign({}, company.name)
            state.products.push(product)
          }
        }
      }
    },
    SET_NOTICE(state, isNotice) {
      state.isNotice = isNotice
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
    getCompaniesByCategoryId: ({companies})=> (categoryId)=> {
      return companies.filter((c)=> c && c.name && c.category && c.category.id === categoryId).sort((a, b)=> {
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
    getRandomProductsByCategoryId: ({products})=>({categoryId, num})=> {
      const shuffled = products.filter((p)=>p.images && p.images.length > 0 && p.categoryId === categoryId).sort(() => 0.5 - Math.random())
      return shuffled.slice(0, num)
    },
    getCompanyById: ({companies})=> (companyId)=> {
      return companies.find((c)=> c.id === companyId)
    },
    getNotice({isNotice}) {
      return isNotice
    },
    getCategories({categories}) {
      return categories
    }
  },
  actions: {
  },
  modules: {
  }
})
