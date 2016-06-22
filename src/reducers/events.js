import { ADD_ITEM, EDIT_ITEM, REMOVE_ITEM } from '../constants'
import { Set } from 'immutable'

const initialState = Set()

const events = (state = initialState, { type, payload }) => {
  switch(type) {
    case ADD_ITEM:
    case EDIT_ITEM:
      if (payload.startTime) {
        return state.add(payload.id)
      }
      return state
    case REMOVE_ITEM:
      return state.delete(payload.id)
    default:
      return state
  }
}

export default events

