import { request } from './utils'
import { List, Set, OrderedSet, fromJS } from 'immutable'
import moment from 'moment'

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
      // eslint-disable-next-line no-console
      console.log(err)
    })
}

export const getItems = () => {
  return request('/items', 'GET')
    .then((items) => {
      return items.reduce((obj, {
        id,
        text,
        start_time: st,
        end_time: et,
        checkable,
        group_id }) => {
        let day = null
        let startTime = st
        let endTime = et
        if (startTime) {
          day = moment(startTime).format('YYYY-MM-DD')
          startTime = moment(startTime).format('hh:mma')
        }
        if (endTime) {
          day = day || moment(endTime).format('YYYY-MM-DD')
          endTime = moment(endTime).format('hh:mma')
        }
        return Object.assign(obj, {
          [id]: {
            id,
            text,
            group: group_id,
            saved: true,
            startTime,
            endTime,
            day,
            checkable,
          },
        })
      }, {})
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err)
    })
}

export const getInitialStoreState = () => {
  return Promise.all([getGroups(), getItems()]).then(([groups, items]) => {
    const groupKeys = Object.keys(groups).map(
      key => parseInt(key)
    )
    const todoKeys = Object.keys(items).map(
      key => parseInt(key)
    ).filter((key) => items[key].checkable)
    const eventKeys = Object.keys(items).map(
      key => parseInt(key)
    ).filter((key) => items[key].startTime)
    return {
      entities: fromJS({
        blocks: { nextBlockId: 0 },
        groups,
        items,
      }),
      groups: List(groupKeys),
      todos: OrderedSet(todoKeys),
      events: Set(eventKeys),
      sidebar: fromJS({})
    }
  })
}
