import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueGtag from "vue-gtag"

// import style (>= Swiper 6.x)
import 'swiper/css/swiper.css'
Vue.use(VueGtag, {
  config: {
    id: "G-Q0YK2CZ3MS",
  },
  appName: "gfair2021-14929",
  pageTrackerScreenviewEnabled: true
}, router)


if (process.env.NODE_ENV === 'development') {
  Vue.prototype.$functionsUrl = 'http://localhost:5001/gfair2021-14929/us-central1/api'
  // Vue.prototype.$functionsUrl = 'https://us-central1-gfair2021-14929.cloudfunctions.net/api'
  console.log(Vue.prototype.$functionsUrl)
} else {
  Vue.prototype.$functionsUrl = 'https://us-central1-gfair2021-14929.cloudfunctions.net/api'
}
Vue.use(Toast, {
  position: "top-center",
  timeout: 5000,
  closeOnClick: true,
  puaseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: true,
  // hideProgressBar: false
});

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
