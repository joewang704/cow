import { ADD_ITEM, REMOVE_ITEM } from '../constants'
import { deleteItemInDb } from '../utils/api.js'

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
  return dispatch => {
    deleteItemInDb(id).then(({ id }) => {
      if (id) {
        dispatch({
          type: REMOVE_ITEM,
          payload: {
            id,
            text,
            key,
            checkable: true
          }
        })
      } else {
        // throw some error
      }
    })
  }
}
