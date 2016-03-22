import { LOGIN, LOGOUT } from '../constants'

/**
 * Reducer for user
 * @param {object} state - previous state
 * @param {string} action - action can be to get user or update user
 */
const user = (state = null, action) => {
  switch (action) {
    case LOGIN:
      return {
        username: 'joewang704',
        password: 'password',
      }
    case LOGOUT:
      return null
    default:
      return state
  }
}

export default user
