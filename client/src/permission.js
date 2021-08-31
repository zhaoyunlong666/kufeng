import router from './router'
import store from './store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style
import Layout from '@/layout'
const _import = require('./router/_import_' + process.env.NODE_ENV) // 获取组件方法

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = [
  '/wap',
  '/login',
  '/admin',
  '/yue',
  '/my',
  '/index',
  '/msg',
  '/test',
  '/car',
  '/life',
  '/my'
] // 不重定向白名单

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken === 'admin-token') {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/admin/dashboard' })
      NProgress.done()
    } else {
      const hasGetUserInfo = store.getters.name
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          // get user info
          await store.dispatch('user/getInfo')
          if (store.getters.menus.length < 1) {
            global.antRouter = []
            next()
          }
          const menus = filterAsyncRouter(store.getters.menus) // 过滤路由

          console.log(menus)

          router.addRoutes(menus)// 2 动态加载路由
          global.antRouter = menus// 3 侧边栏渲染
          next({
            ...to,
            replace: true
          })
        } catch (error) {
          // remove token and go to login page to re-login
          console.log(error)
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          // next(`/login?redirect=${to.path}`)
          next(`/login`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      // next(`/login?redirect=${to.path}`)
      next(`/login`)
      NProgress.done()
    }
  }

  router.afterEach(() => {
  // finish progress bar
    NProgress.done()
  })

  // 遍历后台传来的路由字符串,转换为组件对象
  function filterAsyncRouter(asyncRouterMap) { // 遍历后台传来的路由字符串，转换为组件对象
    const accessedRouters = asyncRouterMap.filter(route => {
      if (route.component) {
        if (route.component === 'Layout') { // Layout组件特殊处理
          route.component = Layout
        } else {
          route.component = _import(route.component)
        }
      }
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children)
      }
      return true
    })

    return accessedRouters
  }
})
