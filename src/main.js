// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '@/vuex/store'   //全局状态管理  vuex
import router from './router'      //全局路由管理， route
import { get, post,patch,del,location } from '@/api/common/common.js'
// 引入elementui


import ElementUI from 'element-ui'
Vue.config.productionTip = false
Vue.use(ElementUI)




//四种请求封装封装ok后，写入原型链上面
Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$patch = patch
Vue.prototype.$del = del



/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
