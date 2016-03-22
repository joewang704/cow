import React from 'react'

const InputGroup = ({ field, onSubmit, handleChange }) => {
  const { id, type, value } = field
  return (
    <form onSubmit={onSubmit}>
      <div className="input-group" id="add-list-input">
        <input
          id={id}
          type={type}
          value={value}
          onChange={handleChange}
          key={id}
          className="form-control"
          autoFocus
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">Save</button>
        </span>
      </div>
    </form>
  )
}

export default InputGroup
