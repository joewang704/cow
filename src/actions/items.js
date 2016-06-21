import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM } from '../constants'
import { createItemInDb } from '../utils/api.js'

const createItem = (text, startTime, endTime, day, groupId, checkable) => {
  return dispatch => {
    createItemInDb(
      { text,
        checkable,
        start_time: startTime,
        end_time: endTime,
        group_id: groupId,
      }
    ).then(({ id }) => {
      dispatch({
        type: ADD_ITEM,
        payload: {
          id,
          text,
          startTime,
          endTime,
          day,
          groupId,
          checkable,
        }
      })
    }).catch((err) => {
      console.log(err)
    })
  }
}

export const createItemFromCalendar = (text, startTime, endTime, day) => {
  return createItem(text, startTime, endTime, day, null, false, true)
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

const editItem = (id, text, startTime, endTime, day, groupId, checkable) => {
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
    }
  }
}

