import React from 'react'
import { timeStrToPosition } from '../../utils/calendar'
import Popover from 'react-popover'
import CalendarDialogForm from '../../containers/CalendarDialogForm'

const Event = ({ event, removeEventMark }, context) => {
  const { startTime, endTime, day } = event
  const width = 100
  const eventStyles = {
    marginTop: `${timeStrToPosition(startTime)}px`,
    opacity: '.5',
    width: `${width - 2}%`,
  }
  return (
    <Popover
      isOpen={true}
      place="below"
      body={<CalendarDialogForm event={event} store={context.store} />}
      onOuterAction={() => removeEventMark()}
    >
      <div className="event" style={eventStyles}>
        { `${startTime} - ${endTime}` }
      </div>
    </Popover>
  )
}

Event.contextTypes = {
  store: React.PropTypes.object,
}

export default Event

