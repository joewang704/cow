import React from 'react'

const PopoverContent = ({ groups, onColorClick }) => {
  return (
    <div>
     {
        groups.map(({ color }) => {
          return (
            <div
              className="color-square"
              key={color}
              style={{ backgroundColor: color }}
              onClick={() => onColorClick(color)}
            ></div>
          )
        })
     }
    </div>
  )
}

export default PopoverContent
