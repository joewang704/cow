import { INIT_EVENT_MARK, REMOVE_EVENT_MARK, SWITCH_POPOVER } from '../constants'

export const initEvent = (startTime, endTime, day) => {
  return {
    type: INIT_EVENT_MARK,
    payload: {
      startTime,
      endTime,
      day,
    }
  }
}

export const removeEventMark = () => {
  return {
    type: REMOVE_EVENT_MARK,
  }
}

export const switchPopover = (id) => {
    return {
        type: SWITCH_POPOVER,
        payload: {
            id
        }
    }
}
