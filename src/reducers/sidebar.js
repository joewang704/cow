import { ENTER_GROUP, EXIT_GROUP, REMOVE_GROUP } from '../../src/constants'
import { fromJS } from 'immutable'

const initialState = fromJS({
  currentGroup: null,
})

const sidebar = (state = initialState, { type, payload }) => {
  switch (type) {
    case REMOVE_GROUP:
      // if current shown group gets removed, leave that group
      if (payload.id === state.get('currentGroup')) {
        return state.set('currentGroup', null)
      }
      return state
    case ENTER_GROUP:
      return state.set('currentGroup', payload.id)
    case EXIT_GROUP:
      return state.set('currentGroup', null)
    default:
      return state
  }
}

export default sidebar
