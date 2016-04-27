import React from 'react'
import Column from './Column'
import { days, timeIntervals } from '../../constants/calendar'
import { List } from 'immutable'

const Calendar = ({ events, dialog, blocks }) => {
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
                key={currentDay}
                events={
                  events ? events.filter(({ day }) => {
                      return currentDay === day
                  }) : List()
                }
                blocks={blocks}
                dialog={dialog && dialog.get('day') === currentDay ? dialog : null}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Calendar
