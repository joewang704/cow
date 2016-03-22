import { CLOSE_SIDEBAR, TOGGLE_SIDEBAR, ENTER_LIST, EXIT_LIST } from '../../src/constants'

export const closeSidebar = () => {
  return {
    type: CLOSE_SIDEBAR,
  }
}

export const toggleSidebar = () => {
  return {
    type: TOGGLE_SIDEBAR,
  }
}

export const enterList = (listId) => {
  return {
    type: ENTER_LIST,
    payload: {
      id: listId,
    }
  }
}

export const exitList = () => {
  return {
    type: EXIT_LIST,
  }
}
