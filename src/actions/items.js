import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM } from '../constants'

let itemId = 0

const createItem = (text, startTime, endTime, day, groupId, checkable, saved) => {
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
      saved,
    }
  }
}

export const createItemFromCalendar = (startTime, endTime, day) => {
  return createItem(`${startTime} - ${endTime}`, startTime, endTime, day, null, false, false)
}

export const createTodoFromGroup = (text, groupId) => {
  return createItem(text, null, null, null, groupId, true, true)
}

export const deleteItem = (id, checkable) => {
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

const editItem = (id, text, startTime, endTime, day, groupId, checkable, saved) => {
  return {
    type: EDIT_ITEM,
    payload: {
      id,
      text,
      startTime,
      endTime,
      day,
      group: groupId,
      checkable,
      saved,
    }
  }
}

// TODO: stop using
export const saveItem = (id, text, checkable) => {
  return editItem(id, text, null, null, null, null, checkable, true)
}
