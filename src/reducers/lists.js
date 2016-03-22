import { ADD_LIST, REMOVE_LIST } from '../constants'

const initialState = []

const lists = (state = initialState, { type, payload }) => {
  switch(type) {
    case ADD_LIST:
      return [
       ...state,
       payload.id
      ]
    case REMOVE_LIST:
      return state.filter((value, index) => {
        return index !== payload.id
      })
    default:
      return state
  }
}

export default lists

