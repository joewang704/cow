import { ADD_ITEM, SAVE_ITEM } from '../../src/constants'
import { Map, fromJS } from 'immutable'
import { timeStrToDialogPosition } from '../utils/calendar'

const initialState = fromJS({
  dialog: {
    position: null,
    type: null,
  },
})

const ui = (state = initialState, { type, payload }) => {
  switch(type) {
    case ADD_ITEM:
      return state.set('dialog', fromJS({
        position: timeStrToDialogPosition(payload.startTime),
        day: payload.day,
        id: payload.id,
        type: 'calendar',
      }))
    case SAVE_ITEM:
      return state.set('dialog', null)
    default:
      return state
  }
}

export default ui;

