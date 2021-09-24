import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
import 'swiper/css/swiper.css'



Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
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
