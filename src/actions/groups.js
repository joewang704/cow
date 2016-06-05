import { ADD_GROUP, REMOVE_GROUP } from '../constants'
import randomColor from 'randomcolor'
import { getGroups, saveGroup } from '../utils/api.js'

export const createGroup = (name) => {
  return dispatch => {
    const color = randomColor()
    saveGroup({ color, name }).then(({ id }) => {
      dispatch({
        type: ADD_GROUP,
        payload: {
          id,
          color,
          text: name,
        },
      })
    })
  }
}

export const editGroupName = (id, name) => {
}

export const deleteGroup = (groupId) => {
  return {
    type: REMOVE_GROUP,
    payload: {
      id: groupId,
    }
  }
}
