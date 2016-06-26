import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM, REMOVE_NOTIF } from '../constants'

const initialState = null

const notifications = (state = initialState, { type, payload }) => {
  const identifier = payload && payload.checkable ? 'Todo ' : 'Event '
  switch (type) {
    case ADD_ITEM:
      return {
        isActive: true,
        message: `${identifier}${payload.text} added.`,
        action: 'Dismiss',
        key: payload.id
      }
    case EDIT_ITEM:
      return {
        isActive: true,
        message: `${identifier}${payload.text} edited.`,
        action: 'Dismiss',
        key: payload.id
      }
    case REMOVE_ITEM:
      return {
        isActive: true,
        message: `${identifier}${payload.text} removed.`,
        action: 'Dismiss',
        key: payload.id
      }
    case REMOVE_NOTIF:
      return null
    default:
      return state
  }
}

export default notifications
