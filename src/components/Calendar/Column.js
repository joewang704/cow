import React from 'react'
import CellContainer from '../../containers/CellContainer'
import Event from '../Event'
import Dialog from '../Dialog'
import { halfTimeIntervals } from '../../constants/calendar'

const Column = ({ day, events, dialog, blocks }) => {
  return (
    <div className="calendar-column">
      <div className="day-panel">
        { day }
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
          return <Event event={event} key={event.id} blockSize={blockSize} position={position} />
        })
      }
      { dialog ? <Dialog dialog={dialog.toJS()} /> : null }
      {
        halfTimeIntervals.map(time => <CellContainer time={time} key={time} day={day} />)
      }
    </div>
  )
}

export default Column
