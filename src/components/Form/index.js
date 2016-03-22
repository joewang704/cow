import React from 'react'

const Form = ({ children, onSubmit, handleChange }) => {
  return (
    <form onSubmit={onSubmit}>
      {
        React.Children.map(children, child => React.cloneElement(child, { onChange: handleChange }))
      }
    </form>
  )
}

export default Form
