import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM } from '../constants'
import { OrderedSet } from 'immutable'

const initialState = OrderedSet()

const todos = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM:
    case EDIT_ITEM:
      if (payload.checkable) {
        return state.add(payload.id).sort()
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
