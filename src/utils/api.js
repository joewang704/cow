import fetch from 'isomorphic-fetch'

const url = 'http://localhost:8888'

const api = (endpoint, method, body = null) =>
  fetch(
    `${url}${endpoint}`,
    {
      credentials: 'include',
      method,
      body,
      headers: {
        'Content-Type': 'application/json',
      }
    }
  )

export const getGroups = () => {
  return api('/groups', 'GET')
    .then(res => res.json())
}

export const getItems = () => {
  return api('/items', 'GET')
    .then(res => res.json())
}

export const saveGroup = (group) => {
  return api('/groups', 'POST', JSON.stringify(group))
    .then(res => res.json())
}


export const createItemInDb = (item, id) => {
  const endpoint = id ? `/items/${id}` : '/items'
  return api(endpoint, 'POST',
      JSON.stringify(item)).then(res => res.json())
}

export const deleteItemInDb = (id) => {
  return api(`/items/${id}`, 'DELETE')
    .then(res => res.json())
}
