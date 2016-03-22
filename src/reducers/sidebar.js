import { CLOSE_SIDEBAR, TOGGLE_SIDEBAR, ENTER_LIST, EXIT_LIST } from '../../src/constants'

const initialState = {
  currentList: null,
}

const sidebar = (state = initialState, { type, payload }) => {
  switch(type) {
    case ENTER_LIST:
      return {
        currentList: payload.id,
      }
    case EXIT_LIST:
      return {
        currentList: null,
      }
    default:
      return state;
  }
}

export default sidebar;
