import React from 'react'
import Column from './Column'
import { days, timeIntervals } from '../../constants/calendar'
import { List } from 'immutable'

const Calendar = ({
  events,
  blocks,
  deleteEvent,
  removeEventMark,
  switchPopover,
  eventMarker,
  whichPopover
}) => {
  return (
    <div id="calendar" className="col-md-9 fill-height">
      <div id="time-column">
        {
          timeIntervals.map(time => {
            return <div className="time-cell" key={time}>{ time }</div>
          })
        }
      </div>
      <div id="calendar-columns">
        {
          days.map(currentDay => {
            return (
              <Column
                day={currentDay}
                key={currentDay.format()}
                events={
                  events ? events.filter(({ day }) => {
                    return currentDay.format('YYYY-MM-DD') === day
                  }) : List()
                }
                eventMarker={
                  eventMarker && eventMarker.day === currentDay.format('YYYY-MM-DD') ?
                    eventMarker : null
                }
                blocks={blocks}
                deleteEvent={deleteEvent}
                removeEventMark={removeEventMark}
                switchPopover={switchPopover}
                whichPopover={whichPopover}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Calendar
