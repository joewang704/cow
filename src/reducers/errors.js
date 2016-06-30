import { SAME_ERROR, DB_ERROR, CLEAR_ERROR } from '../constants/actions.js'

const initialState = {}

const errornotifs = (state = initialState, { type, payload }) => {
  switch (type) {
    /*case SAME_ERROR:
      return {
        // rip
        //message: 'lather me up with some smae oh yea dis some smae shit right there right there some smae shit '
      }
    */
    case DB_ERROR:
      return {
        message: 'ur db is fukd kiddo'
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
