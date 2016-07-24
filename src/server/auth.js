import { request, requestBasicAuth } from './utils'

export const checkAuth = () => {
  return request('/auth').then(({ success }) => success)
}

export const login = (email, password) => {
  return requestBasicAuth('/login', 'POST', email, password)
    .then(({ success }) => success)
}

export const logout = () => {
  return request('/logout', 'POST')
    .then(({ success }) => success)
}

export const checkAuthMiddleware = (req, res, next) => {
  request('/auth').then(({ success, user }) => {
    if (success) {
      req.user = user
      return next()
    }
    return res.redirect('/login')
  })
}
