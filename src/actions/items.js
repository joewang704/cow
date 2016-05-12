import { ADD_ITEM, REMOVE_ITEM, SAVE_ITEM } from '../constants'

let itemId = 0

const createItem = (text, startTime, endTime, day, groupId, checkable) => {
  groupId = groupId || '#808080'
  return {
    type: ADD_ITEM,
    payload: {
      id: itemId++,
      text,
      startTime,
      endTime,
      day,
      groupId,
      checkable,
    }
  }
}

export const createItemFromCalendar = (startTime, endTime, day) => {
  return createItem(`${startTime} - ${endTime}`, startTime, endTime, day, null, false)
}

export const createTodoFromGroup = (text, groupId) => {
  return createItem(text, null, null, null, groupId, true)
}

const deleteItem = (id, checkable) => {
  return {
    type: REMOVE_ITEM,
    payload: {
      id,
      checkable,
    }
  }
}

export const deleteEvent = (id) => {
  return deleteItem(id, false)
}

export const deleteTodo = (id) => {
  return deleteItem(id, true)
}

export const saveItem = (id, text, checkable = false) => {
  return {
    type: SAVE_ITEM,
    payload: {
      id,
      text,
      checkable,
    }
  }
}

