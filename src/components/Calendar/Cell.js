import React from 'react'
import { addMinutesToStr } from '../../utils/calendar'

const Cell = ({ time, day, initEvent }) => {
  return (
    <div
      className="cell pointer"
      onClick={initEvent.bind(
        this,
        time,
        addMinutesToStr(time, 30),
        day.format('MMDDYYYY')
      )}
    ></div>
  )
}

export default Cell
