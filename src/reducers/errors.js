import { SAME_ERROR, CLEAR_ERROR } from '../constants/actions.js'

const initialState = {}

const errornotifs = (state = initialState, { type }) => {
  switch (type) {
    case SAME_ERROR:
      return {
        message: 'SMAE ERROR'
      }
    case CLEAR_ERROR:
      return {}
    default:
      return state
  }
}

export default errornotifs
