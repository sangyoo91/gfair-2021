import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.prototype.$getFromLang = (data) => {
  return data[i18n.locale] ? data[i18n.locale] : data.en
}

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
