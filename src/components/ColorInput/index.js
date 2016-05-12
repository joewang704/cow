import React from 'react'
import Popover from 'react-popover'
import PopoverContent from './PopoverContent.js'

const ColorInput = ({ isOpen, groups, defaultGroup, togglePopover, onColorClick, selectedGroup }) => {
  // groups are indexed by color
  const styles = {
    backgroundColor: selectedGroup || defaultGroup,
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
