import React from 'react'
import CellContainer from '../../containers/CellContainer'
import Event from '../Event'
import UnsavedEvent from '../Event/UnsavedEvent'
import { halfTimeIntervals } from '../../constants/calendar'
import { dayObjToString } from '../../utils/calendar'

const Column = ({
  day,
  events,
  eventMarker,
  blocks,
  deleteEvent,
  removeEventMark,
  switchPopover,
  whichPopover
}) => {
  return (
    <div className="calendar-column">
      <div className="day-panel">
        <span className="day-name">{ dayObjToString(day) }</span>
        <br />
        <span className="day-num">{ day.format('DD') }</span>
      </div>
      {
        events.map(event => {
          const blockId = event.blockId
          let blockSize = 0
          let position = 0
          if (typeof blockId === 'number') {
            blockSize = blocks[blockId].size
            position = blocks[blockId].items.indexOf(event.id)
          }
          return (
            <Event
              event={event}
              key={event.id}
              blockSize={blockSize}
              position={position}
              deleteEvent={deleteEvent}
              switchPopover={switchPopover}
              whichPopover={whichPopover}
            />
          )
        })
      }
      {
        eventMarker ? (
          <UnsavedEvent
            event={eventMarker}
            removeEventMark={removeEventMark}
          />
        ) : null
      }
      {
        halfTimeIntervals.map(time => {
          return <CellContainer time={time} key={time} day={day} />
        })
      }
    </div>
  )
}

export default Column
