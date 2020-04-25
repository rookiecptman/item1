import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.withCredentials=true
axios.defaults.headers = {
  "Content-Type": "application/x-www-form-urlencoded"
}
axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
