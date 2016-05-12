import { ADD_ITEM, REMOVE_ITEM } from '../constants'
import { List } from 'immutable'

const initialState = List()

const events = (state = initialState, { type, payload }) => {
  switch(type) {
    case ADD_ITEM:
      return !payload.checkable ? state.push(payload.id) : state
    case REMOVE_ITEM:
      return !payload.checkable ? state.filter((id) => id !== payload.id) : state
    default:
      return state
  }
}

export default events


