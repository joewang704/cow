import { ADD_GROUP, REMOVE_GROUP } from '../constants'
import { List } from 'immutable'

const initialState = List()

const groups = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_GROUP:
      return state.push(payload.id)
    case REMOVE_GROUP:
      return state.filter(id => id !== payload.id)
    default:
      return state
  }
}

export default groups

