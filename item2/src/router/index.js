import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Regist from '../views/Regist.vue'
import Reset from '../views/Reset.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/regist',
    name: 'Regist',
    component: Regist
  },
  {
    path: '/reset',
    name: 'Reset',
    component: Reset
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
