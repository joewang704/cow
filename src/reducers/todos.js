import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM } from '../constants'
import { Set } from 'immutable'

const initialState = Set()

const todos = (state = initialState, { type, payload }) => {
  switch(type) {
    case ADD_ITEM:
    case EDIT_ITEM:
      if (payload.checkable) {
        return state.add(payload.id)
      }
      return state
    case REMOVE_ITEM:
      if (payload.checkable) {
        return state.delete(payload.id)
      }
      return state
    default:
      return state
  }
}

export default todos
