import React from 'react'
import Popover from 'react-popover'
import { timeStrToPosition } from '../../utils/calendar'

const Event = ({ event, blockSize, position, deleteItem, switchPopover, whichPopover }) => {
  const { startTime, text, saved, id, checkable, group } = event
  const width = 100 / (blockSize || 1)
  const eventStyles = {
    marginTop: `${timeStrToPosition(startTime)}px`,
    opacity: '.9',
    marginLeft: `${position * width}%`,
    width: `${width - 2}%`,
    backgroundColor: `${checkable ? group : null}`,
  }
  return (
    <Popover
      isOpen={id === whichPopover}
      place="below"
      body= {<i className="fa fa-trash-o" onClick={() => deleteItem(id, checkable)} aria-hidden="true"></i>}
    >
      <div className="event" style={eventStyles} onClick={() => switchPopover(id)}>
        <div style={{overflow: 'hidden'}}>
          {checkable ? <i className="fa fa-square-o event-checkbox"/> : null}
          { text }
        </div>
      </div>
    </Popover>
  )
}

export default Event
