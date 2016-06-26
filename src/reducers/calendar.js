import { INIT_EVENT_MARK, REMOVE_EVENT_MARK, ADD_ITEM, SWITCH_POPOVER } from '../../src/constants'
import { fromJS } from 'immutable'

const NO_POPOVER = -1;

const initialState = fromJS({
  eventMarker: null,
  whichPopover: NO_POPOVER
})

const calendar = (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_EVENT_MARK: {
      const { startTime, endTime, day } = payload
      return fromJS({
        eventMarker: {
          startTime,
          endTime,
          day,
        },
        whichPopover: NO_POPOVER
      })
    }
    case REMOVE_EVENT_MARK:
    case ADD_ITEM:
      return fromJS({
        eventMarker: null,
        whichPopover: NO_POPOVER
      })
    case SWITCH_POPOVER:
      return fromJS({
          eventMarker: null,
          whichPopover: payload.id
      })

    default:
      return state
  }
}

export default calendar

