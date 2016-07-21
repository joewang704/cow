import rp from 'request-promise'

const rpWithJar = rp.defaults({ jar: true })

export const request = (endpoint, method) => {
  return rpWithJar({
    uri: `http://localhost:8888${endpoint}`,
    headers: {
      'User-Agent': 'joe',
    },
    json: true,
    method,
  })
}

export const requestBasicAuth = (endpoint, method, user, pass) => {
  return rpWithJar({
    uri: `http://localhost:8888${endpoint}`,
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
