import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/components/login/login')
    },
    {
      path: 'index',
      component: () => import('@/components/index'),
      children: [
        {
          path: '/indexList',
          component: () => import('@/components/indexList/indexList')
        },
        {
          path: '/systemUser',
          component: () => import('@/components/systemUser/systemUser')
        },
        {
          path: '/systemRole',
          component: () => import('@/components/systemRole/systemRole')
        }, {
          path: '/scenicSpot',
          component: () => import('@/components/scenicSpot/scenicSpot')
        },
      ]
    },
  ]
})
