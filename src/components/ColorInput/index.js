import React from 'react'
import Popover from 'react-popover'
import PopoverContent from './PopoverContent.js'

const ColorInput = ({ isOpen, groups, defaultGroup, togglePopover, onColorClick, selectedGroup }) => {
  let styles
  if (selectedGroup.color) {
    styles = {
      backgroundColor: selectedGroup.color,
    }
  } else {
    styles = {
      border: '2px solid #aaa',
    }
  }
  return (
    <Popover
      isOpen={isOpen}
      place="below"
      onOuterAction={togglePopover}
      body={<PopoverContent groups={groups} onColorClick={onColorClick}/>}
    >
      <div
        style={styles}
        className="color-select"
        onClick={togglePopover}
      ></div>
    </Popover>
  )
}

export default ColorInput

