import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



//不同页面路由配置文件 引入
import equipment from './equipment'

const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'login',
            component: resolve => require(['@/views/login'], resolve),
            redirect: '/login',
        },
        {
            path: '/login',
            name: '登录',
            component: resolve => require(['@/views/login'], resolve),
        },
        {
            path: '/index',
            name: '首页',
            component: resolve => require(['@/views/home'], resolve),
        },
        ...equipment,
    ]
})
// router.beforeEach((to, from, next) => {
//   //  let host = window.location.host
//   //  router.app.$options.store.dispatch('getdbinfo')
//     if (to.path.startsWith('/login')) {
//         next()
//     } 
// //     else {
// //         var xtoken = localStorage.getItem(host + "X-Token")
// //         var token = to.query.token;
// //         var username = to.query.userName;
// // 		if(to.query.tenantCode!= undefined){
// // 			var tenantCode = to.query.tenantCode.replace(' ','+');
// // 			localStorage.setItem(host + "tenantCode", tenantCode);
// // 		}
// //   }
// })
export default router