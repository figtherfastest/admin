// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  get,
  post,
  del,
  put
} from './utils/http'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
require('./assets/iconfont/iconfont.css')
Vue.config.productionTip = false

Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$del = del
Vue.prototype.$put = put

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
