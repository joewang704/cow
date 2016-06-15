import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM, REMOVE_NOTIF } from '../constants'

const initialState = null
var count = 0;

const notifications = (state = initialState, {type, payload}) => {
  //probably don't even need to do this.
  //Later: just add the type directly
  count++;
  switch(type) {
    case ADD_ITEM:
      return {
              isActive: true,
              message: "Todo " + payload.text + " added.",
              action: 'Dismiss',
              key: count
             }
    case EDIT_ITEM:
      return {
              isActive: true,
              message: "Todo" + payload.text + " edited.",
              action: 'Dismiss',
              key: count
             }
    case REMOVE_ITEM:
      return {
              isActive: true,
              message: "Todo " + payload.text + " removed.",
              action: 'Dismiss',
              key: count
             }
    case REMOVE_NOTIF:
      return null
    default:
      return state
  }
}

export default notifications 
