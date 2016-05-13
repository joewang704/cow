import React from 'react'

const Form = ({ children, onSubmit, handleChange }) => {
  return (
    <form onSubmit={onSubmit}>
      {
        React.Children.map(children, child => {
          if (child.type && child.type === 'input') {
            return React.cloneElement(child, { onChange: handleChange })
          }
          return child
        })
      }
    </form>
  )
}

export default Form
