import React from 'react'
import { timeStrToPosition } from '../../utils/calendar'

const Event = ({ event, blockSize, position }) => {
  const { startTime, endTime, text, saved } = event
  const width = 100 / (blockSize || 1)
  const eventStyles = {
    marginTop: `${timeStrToPosition(startTime)}px`,
    opacity: `${saved ? .9 : .5}`,
    marginLeft: `${position * width}%`,
    width: `${width - 2}%`,
  }
  return (
    <div className="event" style={eventStyles}>
      { text }
    </div>
  )
}

export default Event
