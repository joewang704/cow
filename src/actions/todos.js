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

export const removeTodo = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: {
      idToRemove: id,
    }
  }
}
