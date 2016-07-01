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
  switch (type) {
    case ADD_ITEM: {
      const { id, text, startTime, endTime, day, groupId, checkable } = payload
        // TODO: fix to handle connecting multiple blocks
      const { blockState, blockId, position } = handlePotentialIntersections(id, state, day, endTime, startTime)
      let newState = blockState.setIn(['items', payload.id.toString()], fromJS({
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
      if (state.get('groups')) {
        return state.update('groups', groups => groups.map(group => {
          return group.update('items', items => items.filter(itemId =>
              itemId !== id))
        })).set('lastRemovedItem',
            state.get('items').get(id.toString())).deleteIn(['items', id])
      }
      return state.set('lastRemovedItem',
          state.get('items').get(id.toString())).
          deleteIn(['items', id.toString()])
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

const handlePotentialIntersections = (id, state, day, endTime, startTime) => {
  let blockId = null
  let newState = state 
  let position = 0
   let ans = {
    blockState: state,
    blockId,
    position
  } 
  if(startTime && endTime && day) { // if item is on calendar
    const interEvents = state.get('items').filter(item => item.get('day') === day &&
        doesIntersect(item.get('startTime'), item.get('endTime'), startTime, endTime))
        .groupBy(item => item.get('blockId'))
    console.log(interEvents.toJS())
    let blockIds = Array.from(interEvents.keys())
    let nonBlockedEvents = interEvents.get(null) ? Array.from(interEvents.get(null)) : []
    console.log("Block Ids:")
    console.log(blockIds)
    console.log("Non Blocked Events:")
    console.log(nonBlockedEvents ? Array.from(nonBlockedEvents) : "Not defined.")
    console.log(blockIds.length)
    if (blockIds.length == 1 && 
        nonBlockedEvents.length <= 1) { //if there is only one "group" in question
      ans = mergeOneBlock(interEvents.get(blockIds[0]).toList().get(0),
                          id, state, day, endTime, startTime, position)   
    }
  }
  return ans
}

const mergeOneBlock = (interEvent, id, state, day, endTime, startTime, position) => {
  let blockId = interEvent.get('blockId')
  let newState = state
  if (blockId === null || blockId === undefined) { // if blockId doesn't exist. If it can be 0, change 
    blockId = state.getIn(['blocks', 'nextBlockId'])
    newState = state.mergeIn(['blocks', blockId], fromJS({
      id: blockId,
      items: [interEvent.get('id'), id],
      size: 2,
    }))
    newState = newState.setIn(['items', interEvent.get('id').toString(), 'blockId'], blockId)
  } else {
    newState = newState.updateIn(['blocks', blockId], block => {
      return block.update('size', size => {
        position = size + 1
        return position
      }).update('items', items => items.push(id))
    })
  }
  newState = newState.setIn(['blocks', 'nextBlockId'], blockId + 1)
  return { 
    blockState: newState,
    blockId,
    position
  }
}

const mergeGroups = (firstGroupId, secondGroupId, state) => {

}

export default entities
