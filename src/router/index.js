import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



//不同页面路由配置文件 引入
import equipment from './equipment'
import userControl from './userControl'
import system from './system'
import shop from './shop'
import operate from './operate'


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
        ...userControl,
        ...system,
        ...shop,
        ...operate
    ]
})



router.beforeEach((to, from, next) => {
      let token = localStorage.getItem('token');
      if (token == 'true') {                 // 判断本地是否存在token
        next()
      } else {
        // 未登录,跳转到登陆页面,防止死循环这里
        if (to.path === '/login') {
            next();
            return
        }
        // next({path: '/login'})
        next()
    }
  });

// 解决重复点击导航路由报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

export default router