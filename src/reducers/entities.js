import { ADD_ITEM, REMOVE_ITEM, SAVE_ITEM,
         ADD_LIST, REMOVE_LIST } from '../constants'
import { Map, List, fromJS } from 'immutable'
import { doesIntersect, strToMinutes } from '../utils/calendar'

const initialState = Map({
  items: {},
  interGroups: {
    nextGroupId: 0,
  }
})

const entities = (state = initialState, { payload, type }) => {
  let newState
  switch(type) {
    case ADD_ITEM:
      const { startTime, endTime, day, listId, checkable } = payload
      let position = 0
      let groupId = null
      newState = state
      if (startTime && endTime && day) {
        const interItem = state.get('items').find(item => item.get('day') == day &&
            doesIntersect(item.get('startTime'), item.get('endTime'), startTime, endTime))
        if (interItem) {
          groupId = interItem.get('groupId')
          if (groupId === null) {
            groupId = state.getIn(['interGroups', 'nextGroupId'])
            newState = state.mergeIn(['interGroups', groupId], fromJS({
              id: groupId,
              items: [interItem.get('id'), payload.id],
              size: 2,
            }))
            newState = newState.setIn(['items', interItem.get('id'), 'groupId'], groupId)
            console.log(newState.toJS())
          } else {
            newState = newState.updateIn(['interGroups', groupId], group => {
              return group.update('size', size => {
                position = size + 1
                return position
              }).update('items', items => items.push(payload.id))
            })
            console.log(newState)
          }
          newState = newState.setIn(['interGroups', 'nextGroupId'], groupId + 1)
        }
      }
      newState = newState.setIn(['items', payload.id], fromJS({
        id: payload.id,
        text: payload.text,
        list: listId,
        saved: false,
        startTime,
        endTime,
        day,
        checkable,
        position,
        groupId,
      }))
      console.log(newState.toJS())
      return listId ? newState.updateIn(['lists', listId, 'items'], arr => arr.push(payload.id)) : newState
    case REMOVE_ITEM:
      newState = state.deleteIn(['items', payload.id])
      if (newState.get('lists')) {
        return newState.update('lists', lists => lists.map(list => {
          return list.update('items', todos => todos.filter(todoId => todoId != payload.id))
        }))
      }
      return newState
    case SAVE_ITEM:
      return state.mergeIn(['items', payload.id], fromJS({
        saved: true,
        text: payload.text,
        checkable: payload.checkable,
      }))
    case ADD_LIST:
      const { id, text } = payload
      return state.setIn(['lists', id], fromJS({
        id,
        text,
        items: List(),
      }))
    default:
      return state
  }
}

export default entities
