import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}

export function setLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value))
}

export function removeLocalStorage(key) {
  return localStorage.removeItem(key)
}