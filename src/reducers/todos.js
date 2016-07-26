import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM, REMOVE_GROUP } from '../constants'
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
    case REMOVE_GROUP: {
      const { todos: todosToRemove } = payload
      return state.filter(todo => todosToRemove.indexOf(todo) === -1)
    }
    default:
      return state
  }
}

export default todos
