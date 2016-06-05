import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM,
         ADD_GROUP, REMOVE_GROUP } from '../constants'
import { Map, List, fromJS } from 'immutable'
import { doesIntersect, strToMinutes } from '../utils/calendar'
import { defaultValue } from '../utils/global.js'

const initialState = fromJS({
  items: {},
  blocks: {
    nextBlockId: 0,
  },
  groups: {}
})

const entities = (state = initialState, { payload, type }) => {
  let newState
  switch(type) {
    case ADD_ITEM: {
      const { startTime, endTime, day, groupId, checkable, saved } = payload
      let position = 0
      let blockId = null
      newState = state
      // if item is on calendar
      if (startTime && endTime && day) {
        // TODO: fix to handle connecting multiple blocks
        newState = handleIntersection(state)
      }
      newState = newState.setIn(['items', payload.id], fromJS({
        id: payload.id,
        text: payload.text,
        group: groupId,
        saved,
        startTime,
        endTime,
        day,
        checkable,
        position,
        blockId,
      }))
      // need to coerce groupId to string for lookup in immutablejs
      return groupId ? newState.updateIn(['groups', groupId.toString(), 'items'], arr => arr.push(payload.id)) : newState
    }
    case REMOVE_ITEM: {
      const { id } = payload
      newState = state.deleteIn(['items', id])
      if (newState.get('groups')) {
        return newState.update('groups', groups => groups.map(group => {
          return group.update('items', todos => todos.filter(todoId => todoId != id))
        }))
      }
      return newState
    }
    case EDIT_ITEM:
      const item = state.toJS().items[payload.id]
      return state.mergeIn(['items', payload.id], fromJS({
        text: defaultValue(payload.text, item.text),
        group: defaultValue(payload.group, item.group),
        saved: defaultValue(payload.saved, item.saved),
        startTime: defaultValue(payload.startTime, item.startTime),
        endTime: defaultValue(payload.endTime, item.endTime),
        day: defaultValue(payload.day, item.day),
        checkable: defaultValue(payload.checkable, item.checkable),
        saved: defaultValue(payload.saved, item.saved),
      }))
    case ADD_GROUP:
      const { id, text } = payload
      return state.setIn(['groups', id], fromJS({
        id,
        name: text,
        color: id,
        items: List(),
      }))
    default:
      return state
  }
}

function handleIntersection(state) {
  const interItem = state.get('items').find(item => item.get('day') == day &&
      doesIntersect(item.get('startTime'), item.get('endTime'), startTime, endTime))
  let newState
  if (interItem) {
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
}

export default entities
