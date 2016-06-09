import rp from 'request-promise'
import { Map, fromJS } from 'immutable'

const request = (endpoint, method) => {
  return rp({
    uri: `http://localhost:8888${endpoint}`,
    headers: {
      'User-Agent': 'joe',
    },
    json: true,
    method,
  })
}

export const getGroups = () => {
  return request('/groups', 'GET')
    .then((groups) => {
      return groups.reduce((obj, { id, name, color }) => {
        return Object.assign(obj, {
          [id]: {
            id,
            name,
            color,
            items: [],
          },
        })
      }, {})
    })
    .catch((err) => {
      console.log(err)
    })
}

export const getItems = () => {
  return request('/items', 'GET')
    .then((items) => {
      return items.reduce((obj, { id, text, start_time, end_time, checkable, group_id }) => {
        return Object.assign(obj, {
          [id]: {
            id,
            text,
            group: group_id,
            saved: true,
            startTime: start_time,
            endTime: end_time,
            day: null,
            checkable,
          },
        })
      }, {})
    })
    .catch((err) => {
      console.log(err)
    })
}

export const getInitialStoreState = () => {
  // TODO: handle no groups
  return Promise.all([getGroups(), getItems()]).then(([groups, items]) => {
    const groupKeys = Object.keys(groups).map(key => parseInt(key))
    const todoKeys = Object.keys(items).map(key => parseInt(key)).filter((key) => items[key].checkable)
    return {
      entities: fromJS({
        blocks: { nextBlockId: 0 },
        groups,
        items,
      }),
      groups: groupKeys,
      todos: todoKeys,
      sidebar: fromJS({ currentGroup: groupKeys[0] })
    }
  })
}
