import React from 'react'

const PopoverContent = ({ groups, onColorClick }) => {
  return (
    <div>
     {
        groups.map(group => {
          return (
            <div
              className="color-square"
              key={group.color}
              style={{ backgroundColor: group.color }}
              onClick={() => onColorClick(group)}
            ></div>
          )
        })
     }
    </div>
  )
}

export default PopoverContent
