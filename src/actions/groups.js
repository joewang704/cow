import { ADD_GROUP, REMOVE_GROUP } from '../constants'
import randomColor from 'randomcolor'


/**
 * Create a group in the store
 * @param {int} id - id of group
 * @param {string} name - name of group
 */
export const createGroup = (name) => {
  return {
    type: ADD_GROUP,
    payload: {
      id: randomColor(),
      text: name,
    }
  }
}

/**
 * Edit a group's name in the store
 * @param {int} id - id of group to edit
 * @param {string} name - new name of desired group
 */
export const editGroupName = (id, name) => {
}

/**
 * Delete a group from the store
 * @param {int} id - id of group
 */
export const deleteGroup = (groupId) => {
  return {
    type: REMOVE_GROUP,
    payload: {
      id: groupId,
    }
  }
}
