import React from 'react'
import CellContainer from '../../containers/CellContainer'
import Event from '../Event'
import UnsavedEvent from '../Event/UnsavedEvent'
import { halfTimeIntervals } from '../../constants/calendar'

const Column = ({ day, events, blocks, deleteItem }) => {
  return (
    <div className="calendar-column">
      <div className="day-panel">
        { day.format('dddd') }
      </div>
      {
        events.map(event => {
          const blockId = event.blockId
          let blockSize = 0
          let position = 0
          if (blockId != null) {
            blockSize = blocks[blockId].size
            position = blocks[blockId].items.indexOf(event.id)
          }
          if (event.saved) {
            return (
              <Event
                event={event}
                key={event.id}
                blockSize={blockSize}
                position={position}
                deleteItem={deleteItem}
              />
            )
          }
          return (
            <UnsavedEvent
              event={event}
              key={event.id}
              blockSize={blockSize}
              position={position}
              deleteItem={deleteItem}
            />
          )
        })
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
