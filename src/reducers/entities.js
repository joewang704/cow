import { ADD_ITEM, REMOVE_ITEM, SAVE_ITEM,
         ADD_GROUP, REMOVE_GROUP } from '../constants'
import { Map, List, fromJS } from 'immutable'
import { doesIntersect, strToMinutes } from '../utils/calendar'

const initialState = Map({
  items: {},
  blocks: {
    nextBlockId: 0,
  },
  groups: {
    '#808080': {
      id: '#808080',
      text: 'General',
      color: '#808080',
      items: [],
    }
  }
})

const entities = (state = initialState, { payload, type }) => {
  let newState
  switch(type) {
    case ADD_ITEM:
      const { startTime, endTime, day, groupId, checkable } = payload
      let position = 0
      let blockId = null
      newState = state
      // if item is on calendar
      if (startTime && endTime && day) {
        // TODO: fix to handle connecting multiple blocks
        const interItem = state.get('items').find(item => item.get('day') == day &&
            doesIntersect(item.get('startTime'), item.get('endTime'), startTime, endTime))
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
          newState = newState.setIn(['blocks', 'nextBlockId'], blockId + 1)
        }
      }
      newState = newState.setIn(['items', payload.id], fromJS({
        id: payload.id,
        text: payload.text,
        group: groupId,
        saved: false,
        startTime,
        endTime,
        day,
        checkable,
        position,
        blockId,
      }))
      return groupId ? newState.updateIn(['groups', groupId, 'items'], arr => arr.push(payload.id)) : newState
    case REMOVE_ITEM:
      newState = state.deleteIn(['items', payload.id])
      if (newState.get('groups')) {
        return newState.update('groups', groups => groups.map(group => {
          return group.update('items', todos => todos.filter(todoId => todoId != payload.id))
        }))
      }
      return newState
    case SAVE_ITEM:
      return state.mergeIn(['items', payload.id], fromJS({
        saved: true,
        text: payload.text,
        checkable: payload.checkable,
      }))
    case ADD_GROUP:
      const { id, text } = payload
      return state.setIn(['groups', id], fromJS({
        id,
        text,
        color: id,
        items: List(),
      }))
    default:
      return state
  }
}

export default entities
