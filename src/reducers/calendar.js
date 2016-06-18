import { INIT_EVENT_MARK, REMOVE_EVENT_MARK, ADD_ITEM } from '../../src/constants'
import { fromJS } from 'immutable'
import moment from 'moment'

const initialState = fromJS({
  eventMarker: null,
})

const calendar = (state = initialState, { type, payload }) => {
  switch(type) {
    case INIT_EVENT_MARK: {
      const { startTime, endTime, day } = payload
      return fromJS({
        eventMarker: {
          startTime,
          endTime,
          day,
        }
      })
    }
    case REMOVE_EVENT_MARK:
    case ADD_ITEM:
      return fromJS({
        eventMarker: null,
      })
    default:
      return state
  }
}

export default calendar

