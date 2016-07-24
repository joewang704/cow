import rp from 'request-promise'

const url = 'http://localhost:8888'

export const cookieJar = rp.jar()

export const rpWithJar = rp.defaults({ jar: cookieJar })

export const getCookies = () => cookieJar.getCookies(url)

export const request = (endpoint, method) => {
  return rpWithJar({
    uri: `${url}${endpoint}`,
    headers: {
      'User-Agent': 'joe',
    },
    json: true,
    method,
  })
}

export const requestBasicAuth = (endpoint, method, user, pass) => {
  return rpWithJar({
    uri: `${url}${endpoint}`,
    headers: {
      'User-Agent': 'joe',
    },
    auth: {
      user,
      pass,
    },
    json: true,
    method,
  })
}

