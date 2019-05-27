import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import qs from 'qs'
import CryptoUtils from './assets/js/CryptoUtils.js'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)
Vue.prototype.CryptoUtils = CryptoUtils
Vue.prototype.axios = Axios
Vue.prototype.qs = qs

Vue.config.productionTip = false
console.log(process.env.NODE_ENV)
console.log(process.env.VUE_APP_URL)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
