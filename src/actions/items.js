import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM } from '../constants'
import { createItemInDb } from '../utils/api.js'
import moment from 'moment'

const createItem = (text, startTime, endTime, day, groupId, checkable) => {
  let pgStartTime = startTime
  let pgEndTime = endTime
  if (startTime) {
    pgStartTime = `TIMESTAMP '${day} ${moment(startTime, 'hh:mma').format('hh:mm:00')}'`
  }
  if (endTime) {
    pgEndTime = `TIMESTAMP '${day} ${moment(endTime, 'hh:mma').format('hh:mm:00')}'`
  }
  return dispatch => {
    createItemInDb(
      { text,
        checkable,
        start_time: pgStartTime,
        end_time: pgEndTime,
        group_id: groupId,
      }
    ).then((res) => {
      const { id } = res
      if (!id) {
        console.log(res)
      } else {
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
      }
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

