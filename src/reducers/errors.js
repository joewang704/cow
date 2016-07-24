import { SAME_ERROR, DB_ERROR, CLEAR_ERROR } from '../constants/actions.js'

const initialState = {}

const errornotifs = (state = initialState, { type, payload }) => {
  switch (type) {
    case DB_ERROR:
      return {
        message: payload.message
      }
    case SAME_ERROR:
      return {
        message: 'i already have this todo u bum'
      }
    case CLEAR_ERROR:
      return {}
    default:
      return state
  }
}

export default errornotifs
