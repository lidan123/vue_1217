/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Router from 'vue-router'
import Vue1 from '@/views/vue1'
import Vue2 from '@/views/vue2'
import Vue3 from '@/views/vue3'
import Login from '@/components/Login'
import Register from '@/components/register'
import Content from '@/components/content'

// import Login from './components/login'

Vue.use(Router)

export default new Router({
  routes: [{
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
    children: [{
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
    }]
  }]
})

