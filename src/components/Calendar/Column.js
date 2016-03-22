import React from 'react'
import CellContainer from '../../containers/CellContainer'
import Event from '../Event'
import Dialog from '../Dialog'
import { halfTimeIntervals } from '../../constants/calendar'

const Column = ({ day, events, dialog, interGroups }) => {
  return (
    <div className="calendar-column">
      <div className="day-panel">
        { day }
      </div>
      {
        events.map(event => {
          const groupId = event.groupId
          let groupSize = 0
          let position = 0
          if (groupId != null) {
            groupSize = interGroups[groupId].size
            position = interGroups[groupId].items.indexOf(event.id)
          }
          return <Event event={event} key={event.id} groupSize={groupSize} position={position} />
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
