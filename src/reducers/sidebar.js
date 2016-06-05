import { CLOSE_SIDEBAR, TOGGLE_SIDEBAR, ENTER_GROUP, EXIT_GROUP } from '../../src/constants'
import { fromJS } from 'immutable'

const initialState = fromJS({
  currentGroup: null,
})

const sidebar = (state = initialState, { type, payload }) => {
  switch(type) {
    case ENTER_GROUP:
      return fromJS({
        currentGroup: payload.id,
      })
    case EXIT_GROUP:
      return fromJS({
        currentGroup: null,
      })
    default:
      return state
  }
}

export default sidebar;
