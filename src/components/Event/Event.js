import React from 'react'
import { timeStrToPosition } from '../../utils/calendar'

const Event = ({ event, blockSize, position, deleteItem }) => {
  const { startTime, endTime, text, saved, id, checkable, group } = event
  const width = 100 / (blockSize || 1)
  const eventStyles = {
    marginTop: `${timeStrToPosition(startTime)}px`,
    opacity: '.9',
    marginLeft: `${position * width}%`,
    width: `${width - 2}%`,
    backgroundColor: `${checkable ? group : null}`,
  }
  return (
    <div className="event" style={eventStyles}>
      <div style={{overflow: 'hidden'}}>
        {checkable ? <i className="fa fa-square-o event-checkbox" onClick={() => deleteItem(id, checkable)}/> : null}
        { text }
      </div>
    </div>
  )
}

export default Event
