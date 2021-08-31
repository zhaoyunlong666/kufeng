import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)

import App from './App'
import store from './store'
import router from './router'

// import express from 'express'
// vue.use(express)
// const path = require('path')

import '@/icons' // icon
import '@/permission' // permission control

import axios from 'axios'
axios.defaults.withCredentials = false

Vue.config.productionTip = false

Vue.prototype.router = router // 全局history模式
Vue.prototype.$axios = axios


// // 线上
// axios.defaults.baseURL = 'http://192.168.110.249:8001/'
// Vue.prototype.$http = axios
// Vue.config.productionTip = false



// 外部请求
import VueResource from 'vue-resource'
Vue.use(VueResource)

import Vant from 'vant'
Vue.use(Vant)
// import { createApp } from 'vue'
// import { CountDown } from 'vant'

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */

// if (process.env.NODE_ENV === "production") {
//   const { mockXHR } = require("../mock");
//   mockXHR();
// }

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

// Vue.use(express.static(path.join(__dirname, 'public')))

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
