import { INIT_EVENT_MARK, REMOVE_EVENT_MARK } from '../constants'

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
