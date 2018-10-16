import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/index/index'
import Login from '@/components/login/login'
import Index from '@/components/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/index',
      component: Index
    }
  ]
})
