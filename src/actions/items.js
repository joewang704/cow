import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM } from '../constants'
import { createItemInDb, deleteItemInDb } from '../utils/api.js'
import moment from 'moment'

const createItem = (text, startTime, endTime, day, groupId = null, checkable, id = null) => {
  let pgStartTime = startTime
  let pgEndTime = endTime
  if (startTime) {
    pgStartTime = `TIMESTAMP '${day} ${moment(startTime, 'hh:mma').format('hh:mm:00 A')}'`
  }
  if (endTime) {
    pgEndTime = `TIMESTAMP '${day} ${moment(endTime, 'hh:mma').format('hh:mm:00 A')}'`
  }
  return dispatch => {
    createItemInDb(
      { text,
        checkable,
        start_time: pgStartTime,
        end_time: pgEndTime,
        group_id: groupId,
      }, id
    ).then((res) => {
      if (!res.id) {
        // dispatch res as error
      } else {
        dispatch({
          type: ADD_ITEM,
          payload: {
            id: res.id,
            text,
            startTime,
            endTime,
            day,
            groupId,
            checkable,
          }
        })
      }
    })
  }
}


//get rid of this after joe gets his shit together
export const createPackagedItem = ({ text, startTime, endTime, day, groupId, checkable, id }) => {
  return createItem(text, startTime, endTime, day, groupId, checkable, id)
}

export const createItemFromCalendar = (text, startTime, endTime, day) => {
  return createItem(text, startTime, endTime, day, null, false)
}

export const createTodoFromGroup = (text, groupId) => {
  return createItem(text, null, null, null, groupId, true)
}

export const deleteItem = (initialId, checkable, text = null) => {
  return dispatch => {
    deleteItemInDb(initialId).then(({ id }) => {
      if (id) {
        dispatch({
          type: REMOVE_ITEM,
          payload: {
            id,
            checkable,
            text,
            key: id,
          }
        })
      } else {
        // throw error
      }
    })
  }
}

export const editItem = (id, text, startTime, endTime, day, groupId, checkable) => {
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

