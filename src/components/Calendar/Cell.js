import React from 'react'
import { addMinutesToStr } from '../../utils/calendar'

const Cell = ({ time, day, initEvent }) => {
  return (
    <div
      className="cell pointer"
      onClick={() => initEvent(
        time,
        addMinutesToStr(time, 60),
        day.format('YYYY-MM-DD')
      )}
    ></div>
  )
}

export default Cell
