import fetch from 'isomorphic-fetch'

const request = (endpoint, method, body = null) =>
  fetch(
    `http://localhost:8080${endpoint}`,
    {
      credentials: 'include',
      method,
      body,
      headers: {
        'Content-Type': 'application/json',
      }
    }
  )

export const logout = () => {
  return request('/logout', 'POST').then(() => {
    // is this a terrible hack? idk
    location.reload()
  })
}

