import { REMOVE_NOTIF, UNDO_NOTIF } from '../constants/actions.js'

export const deleteNotification = () => {
  return {
    type: REMOVE_NOTIF
    //payload is undefined, no need
  }
}

export const undoNotification = () => {
  return {
    type: UNDO_NOTIF
    //payload is undefined, no need
  }
}
