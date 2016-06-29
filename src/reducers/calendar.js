import { INIT_EVENT_MARK, REMOVE_EVENT_MARK, ADD_ITEM,
  SWITCH_POPOVER, REMOVE_ITEM } from '../../src/constants'
import { fromJS } from 'immutable'

const NO_POPOVER = -1

const initialState = fromJS({
  eventMarker: null,
  whichPopover: NO_POPOVER
})

const calendar = (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_EVENT_MARK: {
      const { startTime, endTime, day } = payload
      return state.set('eventMarker', {
        startTime,
        endTime,
        day,
      })
    }
    case REMOVE_EVENT_MARK:
    case ADD_ITEM:
      return state.set('eventMarker', null)
    case SWITCH_POPOVER:
      return state.set('whichPopover', payload.id)
    case REMOVE_ITEM:
      return state.update('whichPopover',
        popoverId => { return payload.id === popoverId ? null : popoverId })
    default:
      return state
  }
}

export default calendar

