import React from 'react'
import { timeStrToPosition } from '../../utils/calendar'
import Popover from 'react-popover'
import CalendarDialogForm from '../../containers/CalendarDialogForm'

const Event = ({ event, blockSize, position, deleteItem }, context) => {
  const { startTime, endTime, text, saved, id } = event
  const width = 100 / (blockSize || 1)
  const eventStyles = {
    marginTop: `${timeStrToPosition(startTime)}px`,
    opacity: '.5',
    marginLeft: `${position * width}%`,
    width: `${width - 2}%`,
  }
  return (
    <Popover
      isOpen={true}
      place="below"
      body={<CalendarDialogForm eventId={id} store={context.store} />}
      onOuterAction={() => deleteItem(id, false)}
    >
      <div className="event" style={eventStyles}>
        { text }
      </div>
    </Popover>
  )
}

Event.contextTypes = {
  store: React.PropTypes.object,
}

export default Event

