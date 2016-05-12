import { CLOSE_SIDEBAR, TOGGLE_SIDEBAR, ENTER_GROUP, EXIT_GROUP } from '../../src/constants'

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

export const enterGroup = (groupId) => {
  return {
    type: ENTER_GROUP,
    payload: {
      id: groupId,
    }
  }
}

export const exitList = () => {
  return {
    type: EXIT_GROUP,
  }
}
