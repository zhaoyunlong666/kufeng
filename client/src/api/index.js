import request from '@/utils/request'

// 登录接口

export function login(data) {
  // console.log(`进入index登录方法${data}`)
  return require({
    url: '/api/users/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

// 获取用户
export function getInfo(data) {
  return request({
    url: '/user/detail',
    method: 'get',
    data
  })
}

// 动态路由
export function DongtRouter() {
  return request({
    url: '/group/subMenu',
    method: 'get'
  })
}
