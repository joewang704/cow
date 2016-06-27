/* eslint no-undef: 0, no-shadow: 0, prefer-const: 0 */
import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM,
         ADD_GROUP } from '../constants'
import { List, fromJS } from 'immutable'
import { doesIntersect } from '../utils/calendar'
import { defaultValue } from '../utils/global.js'

const initialState = fromJS({
  items: {},
  blocks: {
    nextBlockId: 0,
  },
  groups: {},
  lastRemovedItem: {}
})

const entities = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM:
    case REMOVE_ITEM:
    case EDIT_ITEM:
      return items(state, { type, payload })
    case ADD_GROUP: {
      const { id, color, name } = payload
      return state.setIn(['groups', id.toString()], fromJS({
        id,
        name,
        color,
        items: List(),
      }))
    }
    default:
      return state
  }
}

const items = (state, { type, payload }) => {
  let newState
  switch (type) {
    case ADD_ITEM: {
      const { id, text, startTime, endTime, day, groupId, checkable } = payload
      let position = 0
      let blockId = null
      newState = state
      // if item is on calendar
      if (startTime && endTime && day) {
        // TODO: fix to handle connecting multiple blocks
        newState = handleIntersection(state, day, startTime, endTime)
      }
      newState = newState.setIn(['items', payload.id.toString()], fromJS({
        group: groupId,
        id, text, startTime,
        endTime, day,
        checkable, position,
        blockId,
      }))
      // need to coerce groupId to string for lookup in immutablejs
      return groupId ? newState.updateIn(
        ['groups', groupId.toString(), 'items'], arr => arr.push(payload.id)
      ) : newState
    }
    case REMOVE_ITEM: {
      const { id } = payload
      // because of .set, need to handle if lastRemovedItem is undefined
      // console.log("STATE ITEM:")
      // console.log(state.get('items').get(id.toString()).toJS())
      // console.log("IN REDUCER:")
      // console.log(state.toJS())
      /* if (state.get('lastRemovedItem')) { 
        console.log(state.get('lastRemovedItem').toJS())
      } */
      if (state.get('groups')) {
        return state.update('groups', groups => groups.map(group => {
          return group.update('items', items => items.filter(itemId => itemId !== id))
        })).set('lastRemovedItem', state.get('items').get(id.toString())).deleteIn(['items', id])
      }
      return state.set('lastRemovedItem', state.get('items').get(id.toString())).deleteIn(['items', id.toString()])
    }
    case EDIT_ITEM: {
      const item = state.toJS().items[payload.id]
      return state.mergeIn(['items', payload.id], fromJS({
        text: defaultValue(payload.text, item.text),
        group: defaultValue(payload.group, item.group),
        startTime: defaultValue(payload.startTime, item.startTime),
        endTime: defaultValue(payload.endTime, item.endTime),
        day: defaultValue(payload.day, item.day),
        checkable: defaultValue(payload.checkable, item.checkable),
      }))
    }
    default:
      return state
  }
}

const handleIntersection = (state, day, endTime, startTime) => {
  const interItem = state.get('items').find(item => item.get('day') === day &&
      doesIntersect(item.get('startTime'), item.get('endTime'), startTime, endTime))
  if (interItem) {
    let newState
    blockId = interItem.get('blockId')
    if (blockId === null) {
      blockId = state.getIn(['blocks', 'nextBlockId'])
      newState = state.mergeIn(['blocks', blockId], fromJS({
        id: blockId,
        items: [interItem.get('id'), payload.id],
        size: 2,
      }))
      newState = newState.setIn(['items', interItem.get('id'), 'blockId'], blockId)
    } else {
      newState = newState.updateIn(['blocks', blockId], block => {
        return block.update('size', size => {
          position = size + 1
          return position
        }).update('items', items => items.push(payload.id))
      })
    }
    return newState.setIn(['blocks', 'nextBlockId'], blockId + 1)
  }
  return state
}

export default entities
