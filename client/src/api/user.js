import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/users/login',
    method: 'post',
    params: data
  })
}

export function getInfo(token) {
  return request({
    url: '/users/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/users/logout',
    method: 'post'
  })
}

// 动态路由
export function DongtRouter() {
  return request({
    url: '/api/users/subMenu',
    method: 'get'
  })
}

