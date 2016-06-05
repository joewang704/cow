import { ADD_GROUP, REMOVE_GROUP } from '../constants'

//const initialState = ['#808080']
const initialState = []

const groups = (state = initialState, { type, payload }) => {
  switch(type) {
    case ADD_GROUP:
      return [
       ...state,
       payload.id
      ]
    case REMOVE_GROUP:
      return state.filter((value, index) => {
        return index !== payload.id
      })
    default:
      return state
  }
}

export default groups

