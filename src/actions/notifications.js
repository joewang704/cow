import { REMOVE_NOTIF } from '../constants/actions.js'
export const deleteNotification = () => {
  return {
    type: REMOVE_NOTIF
    //payload is undefined, no need
  }
}
