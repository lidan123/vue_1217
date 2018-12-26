/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Router from 'vue-router'
import apiTest from '@/views/apiTest'
import formTest from '@/views/formTest'
import echarts from '@/views/schart_echarts'
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
    meta: '欢迎登录此系统！',
    component: Content,
    children: [{
      path: '/apiTest/',
      meta: 'API接口调用测试',
      component: apiTest
      // children: [
      //   {
      //     path: '/Vue1/:color',
      //     meta: 'meta1页面标题',
      //     components: {
      //       default: Vue1,
      //       vue1: Vue1
      //     }
      //   },
      //   {
      //     path: '/Vue2',
      //     meta: 'meta2页面标题',
      //     components: {
      //       default: Vue2,
      //       vue2: Vue2
      //     }
      //   },
      //   {
      //     path: '/Vue3',
      //     meta: 'meta3页面标题',
      //     components: {
      //       default: Vue3,
      //       vue3: Vue3
      //     }
      //   }
      // ]
    },
    {
      path: '/formTest',
      meta: 'form表单测试',
      component: formTest
    },
    {
      path: '/schart_echarts',
      meta: '图表测试',
      component: echarts
    }]
  }]
})
