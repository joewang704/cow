import { ADD_ITEM, REMOVE_ITEM, SAVE_ITEM } from '../constants'

let itemId = 0

const createItem = (text, startTime, endTime, day, listId, checkable) => {
  return {
    type: ADD_ITEM,
    payload: {
      id: itemId++,
      text,
      startTime,
      endTime,
      day,
      listId,
      checkable,
    }
  }
}

export const createItemFromCalendar = (startTime, endTime, day) => {
  return createItem(`${startTime} - ${endTime}`, startTime, endTime, day, null, false)
}

export const createTodoFromList = (text, listId = null) => {
  return createItem(text, null, null, null, listId, true)
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

