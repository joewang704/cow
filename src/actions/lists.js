import { ADD_LIST, REMOVE_LIST } from '../constants'

let listId = 0

/**
 * Create a list in the store
 * @param {int} id - id of list
 * @param {string} name - name of list
 */
export const createList = (name) => {
  return {
    type: ADD_LIST,
    payload: {
      id: listId++,
      text: name,
    }
  }
}

/**
 * Edit a list's name in the store
 * @param {int} id - id of list to edit
 * @param {string} name - new name of desired list
 */
export const editListName = (id, name) => {
}

/**
 * Delete a list from the store
 * @param {int} id - id of list
 */
export const deleteList = (listId) => {
  return {
    type: REMOVE_LIST,
    payload: {
      id: listId,
    }
  }
}
