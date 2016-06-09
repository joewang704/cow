import React from 'react'
import { addMinutesToStr } from '../../utils/calendar'

const Cell = ({ time, day, createItemFromCalendar }) => {
  return (
    <div
      className="cell pointer"
      onClick={createItemFromCalendar.bind(
        this,
        time,
        addMinutesToStr(time, 30),
        day.format('MMDDYYY')
      )}
    ></div>
  )
}

export default Cell
