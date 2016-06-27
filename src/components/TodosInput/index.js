import React from 'react'
import ColorInputContainer from '../../containers/ColorInputContainer'

const TodosInput = ({
  field,
  onSubmit,
  handleChange,
  togglePopover,
  isOpen,
  onColorClick,
  selectedGroup,
}) => {
  const { id, type, value } = field
  return (
    <form onSubmit={onSubmit}>
      <div className="input-group sidebar-input">
        <input
          id={id}
          type={type}
          value={value}
          onChange={handleChange}
          key={id}
          className="form-control"
          autoFocus={true}
          autoComplete="off"
        />
        <span className="input-group-addon">
          <ColorInputContainer
            isOpen={isOpen}
            togglePopover={togglePopover}
            onColorClick={onColorClick}
            selectedGroup={selectedGroup}
          />
        </span>
        <span className="input-group-btn">
          <button type="submit" className="btn">Save</button>
        </span>
      </div>
    </form>
  )
}

export default TodosInput

