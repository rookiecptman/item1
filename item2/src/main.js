import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import './plugins/element.js'

Vue.config.productionTip = false
axios.defaults.withCredentials=true
axios.defaults.headers = {
  "Content-Type": "application/json;charset=UTF-8"
}
axios.defaults.baseURL = 'http://localhost:8082'
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
