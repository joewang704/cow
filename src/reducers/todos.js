import { ADD_ITEM, REMOVE_ITEM } from '../constants'

const initialState = []

const todos = (state = initialState, { type, payload }) => {
  switch(type) {
    case ADD_ITEM:
      return payload.checkable ? [...state, payload.id] : state
    case REMOVE_ITEM:
      if (payload.checkable) {
        return state.filter((value, index) => {
          return value !== payload.idToRemove
        })
      }
      return state
    default:
      return state
  }
}

export default todos
