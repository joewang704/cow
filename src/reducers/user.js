import { LOGIN, LOGOUT } from '../constants'

/**
 * Reducer for user
 * @param {object} state - previous state
 * @param {string} action - action can be to get user or update user
 */
const user = (state = null, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        email: payload.user,
      }
    case LOGOUT:
      return null
    default:
      return state
  }
}

export default user
