import React from 'react'
import Column from './Column'
import { days, timeIntervals } from '../../constants/calendar'
import { List } from 'immutable'

const Calendar = ({ events, blocks, deleteItem, eventMarker }) => {
  console.log(events.toJS())
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
                      return currentDay.format('MMDDYYYY') === day
                  }) : List()
                }
                eventMarker={
                  eventMarker && eventMarker.day === currentDay.format('MMDDYYYY') ? eventMarker : null
                }
                blocks={blocks}
                deleteItem={deleteItem}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Calendar
