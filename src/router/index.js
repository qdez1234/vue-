import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



//不同页面路由配置文件 引入
import member from './member'

const router = new VueRouter({
    routes: [{
            path: '/',
            redirectTo: '/login',
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
        ...member,
    ]
})

router.beforeEach((to,from,next)=>{   //登录状态拦截处理
    if(to.path==="/login"){
        next()
    }else{
        let host = window.location.host
        let token=localStorage.getItem(host + "X-Token")
        if(token===null || token===""){
            next({path:"/login"})
        }else{
            next()
        }
    }
})


//解决vue-router在3.0版本以上重复点菜单报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// router.beforeEach((to, from, next) => {
//    let host = window.location.host
//    router.app.$options.store.dispatch('getdbinfo')
//     if (to.path.startsWith('/login')) {
//         next()
//     } 
//     else {
//         var xtoken = localStorage.getItem(host + "X-Token")
//         var token = to.query.token;
//         var username = to.query.userName;
// 		if(to.query.tenantCode!= undefined){
// 			var tenantCode = to.query.tenantCode.replace(' ','+');
// 			localStorage.setItem(host + "tenantCode", tenantCode);
// 		}
//   }
// })

export default router