import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM, REMOVE_NOTIF, UNDO_NOTIF } from '../constants'

const initialState = null

const notifications = (state = initialState, { type, payload }) => {
  const identifier = payload && payload.checkable ? 'Todo ' : 'Event '
  switch (type) {
    case ADD_ITEM:
      return null
    case EDIT_ITEM:
      return {
        isActive: true,
        message: `${identifier}${payload.text} edited.`,
        actionType: 'Undo',
        key: payload.id
      }
    case REMOVE_ITEM:
      return {
        isActive: true,
        message: `${identifier}${payload.text} removed.`,
        actionType: 'Undo',
        key: payload.id
      }
    case REMOVE_NOTIF:
      return null
    case UNDO_NOTIF:
      return null
    default:
      return state
  }
}

export default notifications
