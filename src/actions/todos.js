import { ADD_ITEM, REMOVE_ITEM } from '../constants'
import { deleteItem } from './items.js'

let todoId = 0

export const addTodoToList = (text, listId = null) => {
  return {
    type: ADD_ITEM,
    payload: {
      id: todoId++,
      listId,
      text,
      checkable: true,
    },
  }
}

export const deleteTodo = (id, text) => {
  return deleteItem(id, true, text)
}
