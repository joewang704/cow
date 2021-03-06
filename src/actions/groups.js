import { ADD_GROUP, REMOVE_GROUP } from '../constants'
import randomColor from 'randomcolor'
import { saveGroup, deleteGroupInDb } from '../utils/api.js'

export const createGroup = (name) => {
  return dispatch => {
    const color = randomColor()
    saveGroup({ color, name }).then(({ id }) => {
      dispatch({
        type: ADD_GROUP,
        payload: {
          id,
          name,
          color,
        },
      })
    })
  }
}

/* export const editGroupName = (id, name) => {
} */

export const deleteGroup = (groupId, todosToRemove) => {
  return dispatch => {
    deleteGroupInDb(groupId).then(({ id }) => {
      if (id) {
        dispatch({
          type: REMOVE_GROUP,
          payload: {
            todos: todosToRemove,
            id,
          },
        })
      }
    })
  }
}
