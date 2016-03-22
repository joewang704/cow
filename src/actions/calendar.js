import { ADD_EVENT, REMOVE_EVENT, SAVE_EVENT } from '../constants'

let eventId = 0

export const createEvent = (startTime, endTime, day) => {
  return {
    type: ADD_EVENT,
    payload: {
      id: eventId++,
      startTime,
      endTime,
      day,
    }
  }
}

export const saveEvent = (id, name) => {
  return {
    type: SAVE_EVENT,
    payload: {
      id,
      name,
    }
  }
}
