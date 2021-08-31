import { login, DongtRouter, getInfo } from '@/api/user'

import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    menus: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_MENUS: (state, menus) => {
    state.menus = menus
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    console.log(userInfo)
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        console.log(data)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          return reject('Verification failed, please Login again.')
        }

        console.log(data)

        const { name, avatar } = data

        // 模拟请求数据
        const menus = [
          {
            'path': '/admin',
            'redirect': 'pc/userManage/index',
            'name': 'xtgl',
            'component': 'Layout',
            'meta': {
              'title': '系统管理',
              'icon': 'form'
            },
            'children': [{
              'path': 'menu',
              'name': 'menu',
              'component': 'pc/userManage/menu',
              'meta': {
                'title': '菜单管理',
                'icon': 'table'
              }
            },
            {
              'path': 'roles',
              'name': 'roles',
              'component': 'pc/userManage/roles',
              'meta': {
                'title': '角色管理',
                'icon': 'table'
              }
            },
            {
              'path': 'userManage',
              'name': 'userManage',
              'component': 'pc/userManage/index',
              'meta': {
                'title': '用户管理',
                'icon': 'table'
              }
            }
            ]
          },

          {
            'path': '/admin/order',
            'redirect': 'pc/order/index',
            'name': 'order',
            'component': 'Layout',
            'meta': {
              'title': '订单',
              'icon': 'form'
            },
            'children': [{
              'path': 'list',
              'name': 'list',
              'component': 'pc/order/index',
              'meta': {
                'title': '订单列表',
                'icon': 'table'
              }
            }]
          },

          {
            'path': '/admin/withdrawal',
            'redirect': 'pc/withdrawal/index',
            'name': 'withdrawal',
            'component': 'Layout',
            'meta': {
              'title': '提现',
              'icon': 'form'
            },
            'children': [{
              'path': 'txsq',
              'name': 'txsq',
              'component': 'pc/withdrawal/index',
              'meta': {
                'title': '提现申请',
                'icon': 'table'
              }
            },
            {
              'path': 'txlog',
              'name': 'txlog',
              'component': 'pc/withdrawal_log/index',
              'meta': {
                'title': '提现记录',
                'icon': 'table'
              }
            }
            ]
          }

        ]

        menus.push({
          path: '/404',
          component: '404',
          hidden: true
        }, {
          path: '*',
          redirect: '/404',
          hidden: true
        })

        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_MENUS', menus)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 获取路由表
  getAntRouter({ commit, state }) {
    return new Promise((resolve, reject) => {
      DongtRouter().then(response => {
        const {
          list
        } = response.data
        if (list) {
          reject('验证失败重新登录')
        }
        const menus = list
        menus.push({
          path: '/404',
          component: '404',
          hideen: true
        }, {
          path: '*',
          redirect: '/404',
          hidden: true
        })
        commit('SET_MENUS', menus)
        resolve(list)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      // logout(state.token).then(() => {
      removeToken() // must remove  token  first
      resetRouter()
      commit('RESET_STATE')
      resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

