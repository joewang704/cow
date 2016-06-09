import { INIT_EVENT_MARK, ADD_ITEM } from '../../src/constants'
import { fromJS } from 'immutable'
import moment from 'moment'

const initialState = fromJS({
  eventMarker: null,
})

const sidebar = (state = initialState, { type, payload }) => {
  switch(type) {
    case INIT_EVENT_MARK:
      return fromJS({
        eventMarker: payload.id,
      })
    case ADD_ITEM:
      return fromJS({
        eventMarker: null,
      })
    default:
      return state
  }
}

export default sidebar;

