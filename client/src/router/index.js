import Vue from 'vue'
import Router from 'vue-router'

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
Vue.use(Router)

// import { createApp } from "vue";
// import { Popup } from "vant";
// const app = createApp();
// app.use(Popup);

/* Layout */
import Layout from '@/layout'

Vue.use(Layout)

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  // {
  //   path: '/',
  //   name: '首页',
  //   hidden: true,
  //   component: resolve => require(['../views/home.vue'], resolve)
  // },
  {
    path: '/login',
    name: '管理登录',
    hidden: true,
    component: resolve => require(['../views/login/index.vue'], resolve)
  },
  // {
  //   path: '/user_login',
  //   name: '学员登录',
  //   hidden: true,
  //   component: resolve => require(['../views/login/user_login.vue'], resolve)
  // },

  // {
  // path: "/student",
  // meta: { title: "学习中心", ico: "el-icon-setting", roles: ["users"] },
  // component: resolve => require(["../views/wap/admin/index.vue"], resolve),
  // children: [

  // {
  //   path: '/index',
  //   name: '首页',
  //   hidden: true,
  //   component: resolve => require(['../views/wap/page/index.vue'], resolve)
  // },
  // {
  //   path: '/test',
  //   name: '考试计划',
  //   hidden: true,
  //   component: resolve => require(['../views/wap/page/test.vue'], resolve)
  // },
  // {
  //   path: '/car',
  //   name: '练车',
  //   hidden: true,
  //   component: resolve => require(['../views/wap/page/car.vue'], resolve)
  // },
  // {
  //   path: '/life',
  //   name: '生活',
  //   hidden: true,
  //   component: resolve => require(['../views/wap/page/life.vue'], resolve)
  // },
  // {
  //   path: '/my',
  //   name: '个人中心',
  //   hidden: true,
  //   component: resolve => require(['../views/wap/page/my.vue'], resolve)
  // },
  // {
  //   name: 'center',
  //   path: '/student/center',
  //   hidden: true,
  //   meta: { title: '学习', icon: 'el-icon-menu', roles: ['users'] },
  //   component: resolve => require(['../views/wap/page/center.vue'], resolve)
  // },
  // {
  //   name: 'erji',
  //   path: '/student/erji',
  //   hidden: true,
  //   meta: { title: '书目', icon: 'el-icon-menu', roles: ['users'] },
  //   component: resolve => require(['../views/wap/page/erji.vue'], resolve)
  // },
  // {
  //   name: 'learn',
  //   hidden: true,
  //   path: '/student/learn',
  //   meta: { title: '学习单词', icon: 'el-icon-menu', roles: ['users'] },
  //   component: resolve => require(['../views/wap/page/learn.vue'], resolve)
  // },
  // {
  //   name: 'unit',
  //   hidden: true,
  //   path: '/student/unit',
  //   meta: { title: '单元', icon: 'el-icon-menu', roles: ['users'] },
  //   component: resolve => require(['../views/wap/page/unit.vue'], resolve)
  // },
  // {
  //   name: 'test',
  //   hidden: true,
  //   path: '/student/test',
  //   meta: { title: '测试', icon: 'el-icon-menu', roles: ['users'] },
  //   component: resolve => require(['../views/wap/page/test.vue'], resolve)
  // },
  // {
  //   name: 'setting',
  //   hidden: true,
  //   path: '/student/setting',
  //   meta: { title: '设置', icon: 'el-icon-menu', roles: ['users'] },
  //   component: resolve => require(['../views/wap/page/setting.vue'], resolve)
  // },
// {
//   path:'/setting',
//   index:0,
//   component:Layout,
//   redirect:'/setting',
//   // alwaysShow: true,
//   // meta: { title: '系统设置', icon: 'el-icon-s-help', roles: ['admin'] },
//   hidden:false,
//   children:[{
//     path:'index',
//     name:'index',
//     component:()=>import('@/views/pc/setting/index'),
//     meta:{tiitle:'系统设置',ico:'setting',roles:['admin']}
//   }]
// },
  {
    path: '/admin',
    index: 0,
    component: Layout,
    redirect: '/admin/dashboard',
    hidden: false,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/pc/dashboard/index'),
        meta: { title: '首页', icon: 'dashboard', roles: ['admin'] }
      }
    ]
  },
  {
    path: '/setting',
    index: 0,
    component: Layout,
    redirect: '/setting',
    hidden: false,
    meta: { title: '系统管理', icon: 'el-icon-s-help', roles: ['admin'] },
    children: [
      {
        path: 'dict',
        name: 'dict',
        component: () => import('@/views/admin/setting/dict'),
        meta: { title: '数据字典', icon: 'dashboard', roles: ['admin'] }
      },
      {
        path: 'users',
        name: 'users',
        component: () => import('@/views/admin/setting/users'),
        meta: { title: '用户管理', icon: 'dashboard', roles: ['admin'] }
      },

    ]
  },
  // {
  //   path: '/setting',
  //   index: 1,
  //   component: Layout,
  //   redirect: '/admin/setting',
  //   hidden: false,
  //   alwaysShow: true,
  //   meta: { title: '系统设置', icon: 'el-icon-s-help', roles: ['admin'] },
  //   children: [
  //     {
  //       path: 'setting',
  //       name: 'setting',
  //       component: () => import('@/views/pc/setting/index'),
  //       meta:{title:'设置',icon:'el-icon-s-help',roles:['admin']}
  //     }
  //   ]
  // },
  {
    path: '/daily',
    index: 2,
    component: Layout,
    redirect: '/daily',
    hidden: false,
    alwaysShow: true,
    meta: { title: '工作日报', icon: 'el-icon-s-help', roles: ['admin'] },
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/admin/daily/list'),
        meta: { title: '日报列表', icon: 'tree', roles: ['admin'] }
      },
      // {
      //   path: 'order',
      //   name: 'order',
      //   component: () => import('@/views/admin/order/index'),
      //   meta: { title: '我的日报', icon: 'tree', roles: ['admin'] }
      // }
    ]
  },
  {
    path: '/duty',
    component: Layout,
    redirect: '/duty',
    hidden: false,
    alwaysShow: true,
    meta: { title: '值班台账', icon: 'el-icon-s-help', roles: ['admin'] },
    children: [
      
      {
        path: 'arrange',
        name: 'arrange',
        component: () => import('@/views/admin/duty/arrange'),
        meta: { title: '值班编排', icon: 'tree', roles: ['admin'] }
      },
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/admin/duty/list'),
        meta: { title: '值班查看', icon: 'tree', roles: ['admin'] }
      },
      {
        path: 'log',
        name: 'log',
        component: () => import('@/views/admin/duty/log'),
        meta: { title: '值班日志', icon: 'tree', roles: ['admin'] }
      },
      
    ]
  },
  // {
  //   path: '/server',
  //   component: Layout,
  //   redirect: '/server',
  //   hidden: false,
  //   alwaysShow: true,
  //   meta: { title: '商家服务', icon: 'el-icon-s-help', roles: ['admin'] },
  //   children: [
  //     {
  //       path: 'type',
  //       name: 'type',
  //       component: () => import('@/views/pc/msg/type'),
  //       meta: { title: '服务分类', icon: 'tree', roles: ['admin'] }
  //     },
  //     {
  //       path: 'list',
  //       name: 'list',
  //       component: () => import('@/views/pc/server/list'),
  //       meta: { title: '服务列表', icon: 'tree', roles: ['admin'] }
  //     }
  //   ]
  // },
  // {
  //   path: '/product',
  //   name:'商品管理',
  //   component: Layout,
  //   redirect: '/product',
  //   hidden: false,
  //   alwaysShow: true,
  //   meta: { title: '商品管理', icon: 'el-icon-s-help', roles: ['admin'] },
  //   children: [
  //     {
  //       path: 'list',
  //       name: 'list',
  //       component: resolve => require(['@/views/pc/product/index.vue'], resolve),
  //       meta: { title: '商品列表', icon: 'el-icon-s-help', roles: ['admin'] },
  //     }
  //   ]
  // },
  // {
  //   path: '/mendian',
  //   name:'门店管理',
  //   component: Layout,
  //   redirect: '/mendian',
  //   hidden: false,
  //   alwaysShow: true,
  //   meta: { title: '门店管理', icon: 'el-icon-s-help', roles: ['admin'] },
  //   children: [
  //     {
  //       path: 'list',
  //       name: 'list',
  //       component: resolve => require(['@/views/pc/mendian/index.vue'], resolve),
  //       meta: { title: '门店管理', icon: 'el-icon-s-help', roles: ['admin'] },
  //     }
  //   ]
  // },
  // {
  //   path: '/diansetting',
  //   name:'店铺设置',
  //   component: Layout,
  //   redirect: '/diansetting',
  //   hidden: false,
  //   alwaysShow: true,
  //   meta: { title: '店铺设置', icon: 'el-icon-s-help', roles: ['admin'] },
  //   children: [
  //     {
  //       path: 'list',
  //       name: 'list',
  //       component: resolve => require(['@/views/pc/dian/index.vue'], resolve),
  //       meta: { title: '店铺设置', icon: 'el-icon-s-help', roles: ['admin'] },
  //     }
  //   ]
  // },
  // {
  //   path: '/peisong',
  //   name:'配送服务',
  //   component: Layout,
  //   redirect: '/peisong',
  //   hidden: false,
  //   alwaysShow: true,
  //   meta: { title: '配送服务', icon: 'el-icon-s-help', roles: ['admin'] },
  //   children: [
  //     {
  //       path: 'list',
  //       name: 'list',
  //       component: resolve => require(['@/views/pc/peisong/index.vue'], resolve),
  //       meta: { title: '门店管理', icon: 'el-icon-s-help', roles: ['admin'] },
  //     }
  //   ]
  // },
  // {
  //   path: '/yingxiaohuodong',
  //   name:'营销活动',
  //   component: Layout,
  //   redirect: '/yingxiaohuodong',
  //   hidden: false,
  //   alwaysShow: true,
  //   meta: { title: '营销活动', icon: 'el-icon-s-help', roles: ['admin'] },
  //   children: [
  //     {
  //       path: 'center',
  //       name: 'center',
  //       component: resolve => require(['@/views/pc/yingxiao/index.vue'], resolve),
  //       meta: { title: '活动中心', icon: 'el-icon-s-help', roles: ['admin'] },
  //     },
  //     {
  //       path: 'myhuodong',
  //       name: 'myhuodong',
  //       component: resolve => require(['@/views/pc/yingxiao/my.vue'], resolve),
  //       meta: { title: '我的活动', icon: 'el-icon-s-help', roles: ['admin'] },
  //     }
  //   ]
  // },
  // {
  //   path: '/msg',
  //   component: Layout,
  //   redirect: '/msg',
  //   hidden: false,
  //   alwaysShow: true,
  //   meta: { title: '通知管理', icon: 'el-icon-s-help', roles: ['admin'] },
  //   children: [
  //     {
  //       path: 'msg',
  //       name: 'msg',
  //       component: () => import('@/views/pc/msg/index'),
  //       meta: { title: '通知列表', icon: 'tree', roles: ['admin'] }
  //     }
  //   ]
  // },
  // {
  //   path: '/article',
  //   component: Layout,
  //   redirect: '/article',
  //   hidden: false,
  //   alwaysShow: true,
  //   meta: { title: '内容管理', icon: 'el-icon-s-help', roles: ['admin'] },
  //   children: [
  //     {
  //       path: 'list',
  //       name: 'list',
  //       component: () => import('@/views/pc/article/list'),
  //       meta: { title: '内容分类', icon: 'tree', roles: ['admin'] }
  //     },
  //     {
  //       path: 'article',
  //       name: 'article',
  //       component: () => import('@/views/pc/article/index'),
  //       meta: { title: '内容管理', icon: 'tree', roles: ['admin'] }
  //     },
  //     {
  //       path: 'AddArticle',
  //       name: 'AddArticle',
  //       component: () => import('@/views/pc/article/add'),
  //       meta: { title: '增加内容', icon: 'tree', roles: ['admin'] }
  //     }
  //   ]
  // },
  // {
  //   path: '/user',
  //   component: Layout,
  //   alwaysShow: true,
  //   redirect: '/userManage',
  //   name: 'userManage',
  //   meta: { title: '学员管理', icon: 'el-icon-s-help', roles: ['admin'] },
  //   children: [
  //     {
  //       path: 'userManage',
  //       name: 'UserManage',
  //       component: () => import('@/views/pc/userManage/index'),
  //       meta: { title: '学员列表', icon: 'tree', roles: ['admin'] }
  //     }
  //   ]
  // },
  // {
  //   path: '/teacherManage',
  //   component: Layout,
  //   alwaysShow: true,
  //   redirect: '/teacherManage',
  //   name: 'teacherManage',
  //   meta: { title: '教练管理', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'teacher',
  //       name: 'teacher',
  //       component: () => import('@/views/pc/teacherManage/index'),
  //       meta: { title: '教练列表', icon: 'tree', roles: ['admin'] }
  //     }
  //   ]
  // },
  // {
  //   path: '/carManage',
  //   component: Layout,
  //   alwaysShow: true,
  //   redirect: '/carManage',
  //   name: 'carManage',
  //   meta: { title: '车辆管理', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'car',
  //       name: 'Car',
  //       component: () => import('@/views/pc/carManage/index'),
  //       meta: { title: '车辆列表', icon: 'tree', roles: ['admin'] }
  //     }
  //   ]
  // },
  // {
  //   path: '/yuecar',
  //   component: Layout,
  //   alwaysShow: true,
  //   redirect: '/yuecarManage',
  //   name: 'yuecarManage',
  //   meta: { title: '约车管理', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'yuetime',
  //       name: 'yuetime',
  //       component: () => import('@/views/pc/yuecarManage/yuetime'),
  //       meta: { title: '时间段设置', icon: 'tree', roles: ['admin'] }
  //     },
  //     {
  //       path: 'yue',
  //       name: 'yue',
  //       component: () => import('@/views/pc/yuecarManage/index'),
  //       meta: { title: '当前约车', icon: 'tree', roles: ['admin'] }
  //     }
  //   ]
  // },
  // {
  //   path: '/kaoshi',
  //   component: Layout,
  //   alwaysShow: true,
  //   redirect: '/kaoshiManage',
  //   name: 'kaoshiManage',
  //   meta: { title: '考试计划', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'kaoshi',
  //       name: 'Kaoshi',
  //       component: () => import('@/views/pc/kaoshiManage/index'),
  //       meta: { title: '考试计划', icon: 'tree', roles: ['admin'] }
  //     },
  //     {
  //       path: 'kaochang',
  //       name: 'kaochang',
  //       component: () => import('@/views/pc/kaoshiManage/kaochang'),
  //       meta: { title: '考场设置', icon: 'tree', roles: ['admin'] }
  //     },
  //     {
  //       path: 'jiazhao',
  //       name: 'jiazhao',
  //       component: () => import('@/views/pc/kaoshiManage/jiazhao'),
  //       meta: { title: '驾驶本类型', icon: 'tree', roles: ['admin'] }
  //     }
  //   ]
  // },
  // {
  //   path: '/kecheng',
  //   component: Layout,
  //   alwaysShow: true,
  //   redirect: '/kechengManage',
  //   name: 'kechengManage',
  //   meta: { title: '课程管理', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'kecheng',
  //       name: 'kecheng',
  //       component: () => import('@/views/pc/kechengManage/index'),
  //       meta: { title: '课程管理', icon: 'tree', roles: ['admin'] }
  //     }
  //   ]
  // },
  // {
  //   path: '/eat',
  //   component: Layout,
  //   alwaysShow: true,
  //   redirect: '/eatManage',
  //   name: 'eatManage',
  //   meta: { title: '外卖管理', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'eat',
  //       name: 'waimai',
  //       component: () => import('@/views/pc/eatManage/index'),
  //       meta: { title: '外卖管理', icon: 'tree', roles: ['admin'] }
  //     },
  //     {
  //       path: 'qishou',
  //       name: 'qishou',
  //       component: () => import('@/views/pc/qishouManage/index'),
  //       meta: { title: '骑手管理', icon: 'tree', roles: ['admin'] }
  //     }
  //   ]
  // }

  //   ]
  // },
  // {
  //   path: "/wap",
  //   component: () => import("@/views/Mobile.vue"),
  //   hidden: true
  // },

  // {
  //   path: "/my",
  //   component: () => import("@/views/wap/my.vue"),
  //   hidden: true
  // },

  // {
  //   path: "/cha",
  //   component: () => import("@/views/wap/cha.vue"),
  //   hidden: true
  // },

  // // {
  // //   path: "/userinfo",
  // //   component: () => import("@/views/wap/userinfo.vue"),
  // //   hidden: true
  // // },

  // {
  //   path: "/yue",
  //   component: () => import("@/views/wap/yue.vue"),
  //   hidden: true
  // },
  // // 以上是移动端路由定义

  // {
  //   path: "/login",
  //   component: () => import("@/views/login/index"),
  //   hidden: true
  // },

  // {
  //   path: "/404",
  //   component: () => import("@/views/404"),
  //   hidden: true
  // },

  // {
  //   path: "/",
  //   component: Layout,
  //   redirect: "/dashboard",
  //   children: [
  //     {
  //       path: "dashboard",
  //       name: "Dashboard",
  //       component: () => import("@/views/dashboard/index"),
  //       meta: { title: "统计信息", icon: "dashboard" }
  //     }
  //   ]
  // },
  // {
  //   path: "/tree",
  //   component: Layout,
  //   redirect: "/tree",
  //   name: "Tree",
  //   meta: { title: "节点维护", icon: "el-icon-s-help" },
  //   children: [
  //     // {
  //     //   path: 'index',
  //     //   name: 'index',
  //     //   component: () => import('@/views/tree/index.vue'),
  //     //   meta: { title: 'treeindex', icon: 'tree' }
  //     // },
  //     {
  //       path: "slottree",
  //       name: "SlotTree",
  //       component: () => import("@/views/tree/slotTree.vue"),
  //       meta: { title: "省市区", icon: "tree" }
  //     }
  //     // {
  //     //   path: "xueduan",
  //     //   name: "Xueduan",
  //     //   component: () => import("@/views/tree/xueduan.vue"),
  //     //   meta: { title: "学段学年版本单元", icon: "tree" }
  //     // }
  //     // {
  //     //   path: 'slot_tree',
  //     //   name: 'Slot_tree',
  //     //   component: () => import('@/views/tree/slot_tree.vue'),
  //     //   meta: { title: 'slot_tree', icon: 'tree' }
  //     // }
  //   ]
  // },
  // {
  //   path: "/set",
  //   component: Layout,
  //   redirect: "/set",
  //   name: "Set",
  //   meta: { title: "后台设置", icon: "el-icon-s-help" },
  //   children: [
  //     {
  //       path: "wx",
  //       name: "Wx",
  //       component: () => import("@/views/set/wx/index"),
  //       meta: { title: "微信接口", icon: "weixin" }
  //     },
  //     {
  //       path: "zengshu",
  //       name: "Zengshu",
  //       component: () => import("@/views/set/zengshu/index"),
  //       meta: { title: "资质查询接口", icon: "tree" }
  //     },
  //     {
  //       path: "base",
  //       name: "Base",
  //       component: () => import("@/views/set/base/index"),
  //       meta: { title: "平台收费设置", icon: "tree" }
  //     }
  //   ]
  // },
  // {
  //   path: "/jiaose",
  //   component: Layout,
  //   alwaysShow: true,
  //   redirect: "/jiaose/jiaoselist",
  //   name: "Jiaose",
  //   meta: { title: "角色管理", icon: "el-icon-s-help" },
  //   children: [
  //     {
  //       path: "jiaosegroup",
  //       name: "Jiaosegroup",
  //       component: () => import("@/views/jiaosegroup/index"),
  //       meta: { title: "角色组", icon: "setting" }
  //     },
  //     {
  //       path: "jiaoselist",
  //       name: "Jiaoselist",
  //       component: () => import("@/views/jiaoselist/index"),
  //       meta: { title: "角色列表", icon: "tree" }
  //     },
  //     {
  //       path: "qx",
  //       name: "Qx",
  //       component: () => import("@/views/qx/index"),
  //       meta: { title: "角色权限", icon: "setting" }
  //     }
  //   ]
  // },
  // {
  //   path: "/users",
  //   component: Layout,
  //   alwaysShow: true,
  //   redirect: "/users",
  //   name: "Users",
  //   meta: { title: "用户管理", icon: "el-icon-s-help" },
  //   children: [
  //     {
  //       path: "list",
  //       name: "List",
  //       component: () => import("@/views/users/list/index"),
  //       meta: { title: "用户列表", icon: "tree" }
  //     }
  //   ]
  // },
  // {
  //   path: "/adminset",
  //   component: Layout,
  //   alwaysShow: true,
  //   redirect: "/adminset/set",
  //   name: "Set",
  //   meta: { title: "排名统计", icon: "el-icon-s-help" },
  //   children: [
  //     {
  //       path: "set",
  //       name: "Set",
  //       component: () => import("@/views/set/index"),
  //       meta: { title: "教师排名", icon: "setting" }
  //     }
  //   ]
  // },
  // {
  //   path: "/adminset",
  //   component: Layout,
  //   alwaysShow: true,
  //   redirect: "/adminset/set",
  //   name: "Set",
  //   meta: { title: "在线订单", icon: "el-icon-s-help" },
  //   children: [
  //     {
  //       path: "set",
  //       name: "Set",
  //       component: () => import("@/views/set/index"),
  //       meta: { title: "订单列表", icon: "setting" }
  //     }
  //   ]
  // },
  // {
  //   path: "/adminset",
  //   component: Layout,
  //   alwaysShow: true,
  //   redirect: "/adminset/set",
  //   name: "Set",
  //   meta: { title: "合同管理", icon: "el-icon-s-help" },
  //   children: [
  //     {
  //       path: "set",
  //       name: "Set",
  //       component: () => import("@/views/set/index"),
  //       meta: { title: "签约管理", icon: "setting" }
  //     },
  //     {
  //       path: "tree",
  //       name: "Tree",
  //       component: () => import("@/views/tree/index"),
  //       meta: { title: "解约管理", icon: "tree" }
  //     }
  //   ]
  // },
  // {
  //   path: "/adminset",
  //   component: Layout,
  //   alwaysShow: true,
  //   redirect: "/adminset/set",
  //   name: "Set",
  //   meta: { title: "职业调度", icon: "el-icon-s-help" },
  //   children: [
  //     {
  //       path: "set",
  //       name: "Set",
  //       component: () => import("@/views/set/index"),
  //       meta: { title: "调度列表", icon: "setting" }
  //     }
  //   ]
  // },
  // {
  //   path: "/adminset",
  //   component: Layout,
  //   alwaysShow: true,
  //   redirect: "/adminset/set",
  //   name: "Set",
  //   meta: { title: "薪资管理", icon: "el-icon-s-help" },
  //   children: [
  //     {
  //       path: "set",
  //       name: "Set",
  //       component: () => import("@/views/set/index"),
  //       meta: { title: "发放工资", icon: "setting" }
  //     },
  //     {
  //       path: "tree",
  //       name: "Tree",
  //       component: () => import("@/views/tree/index"),
  //       meta: { title: "扣除工资", icon: "tree" }
  //     }
  //   ]
  // },

  // --------

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       name: 'Menu2',
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },
  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }

]

// 动态需要权限加载
export const asyncRouterMap = [
  {
    // path: '/studen',
    // meta: { title: '学习中心', ico: 'el-icon-setting', roles: ['users'] },
    // component: resolve => require(['../views/wap/page/index.vue'], resolve),
    // children: [
    //   {
    //     name: 'center',
    //     path: '/center',
    //     meta: { title: '学习中心', icon: 'el-icon-menu', roles: ['users'] },
    //     component: resolve =>
    //       require(['../views/wap/page/center.vue'], resolve)
    //   }
    // ]
  },

  // {
  //   path: '/admin',
  //   meta: { title: '用户管理', ico: 'el-icon-setting', roles: ['admin'] },
  //   component:resolve => require(['../views/admin/'],resolve)
  // },

  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    // base: 'client',
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
