import React from 'react'

const GroupsInput = ({ field, onSubmit, handleChange }) => {
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
        <span className="input-group-btn">
          <button type="submit" className="btn">Save</button>
        </span>
      </div>
    </form>
  )
}

export default GroupsInput
