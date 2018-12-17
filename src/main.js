/* eslint-disable indent */
/* eslint-disable import/first */
/* eslint-disable space-unary-ops */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable space-in-parens */
/* eslint-disable comma-spacing */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable no-redeclare */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import Vuex from 'vuex'

// 引用element-ui组件开始
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引用element-ui组件结束

import Vue1 from './views/vue1'
import Vue2 from './views/vue2'
import Vue3 from './views/vue3'
import Login from './components/Login'
import Register from './components/register'
import Content from './components/content'

Vue.use(VRouter)
Vue.use(Vuex)
Vue.use(ElementUI)

// 实例化路由
let router = new VRouter({
  // mode: 'history',
  // base: 'gas',
  routes: [
    {
      path: '/',
      redirect: 'Login'
    },
    {
      path: '/Register',
      meta: '注册',
      component: Register
    },
     {
      path: '/Login',
      meta: '登录',
      component: Login
    },
    {
      path: '/Content',
      meta: '登录',
      component: Content,
      children: [
        {
          path: '/Vue1',
          meta: 'meta1页面标题',
          component: Vue1
        },
         {
          path: '/Vue2',
          meta: 'meta2页面标题',
          component: Vue2
        },
        {
          path: '/Vue3',
          meta: 'meta3页面标题',
          component: Vue3
        }
      ]
    }
  ]
})

// 实例化vuex
let store = new Vuex.Store({
  state: {
    // state中保存vuex的数据，在任何组件中都可以被读取到
    count: 0
  },
  mutations: {
    // 修改state中的数据，在组件中用this.$store.commit('increment')来执行mutations
    increment (state,n) {
      state.count += n;
    },
    decrease (state,n) {
      state.count -= n;
    }
  }
})

router.beforeEach((to, from, next) => {
  // 切换路由时更改页面标题
  // console.log(to)
  window.document.title = to.meta;
  next()
  // next()方法还可设置参数，如判断是否登录，未登录跳转登录：next('/login')
})

router.afterEach( route => {
  // 切换路由后将页面位置滚动到最顶部
  // 该方法中还可操作loading的结束动作
  window.scrollTo(0,0)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#wrap',
  router,
  store,
  components: { App },
  template: '<App/>'
})
