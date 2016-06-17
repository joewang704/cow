import { ADD_ITEM, REMOVE_ITEM } from '../constants'

let todoId = 0

export const addTodoToList = (text, listId = null) => {
  return {
    type: ADD_ITEM,
    payload: {
      id: todoId++,
      listId,
      text,
      checkable: true,
    }
  }
}

export const deleteTodo = (id, key, text) => {
  //replaced deleteTodo in items.js for text in notifications.
  return {
    type: REMOVE_ITEM,
    payload: {
      id,
      text,
      key,
      checkable: true
    }
  }
}
