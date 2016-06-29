import React from 'react'

const ErrorAlert = ({ children, onDismiss }) => {
  return (<div className="alert alert-danger">
    <button type="button" className="close" onClick={onDismiss} aria-hidden="true" tabIndex="-1">
      <span>&times;</span>
    </button>
    {children}
  </div>)
}

export default ErrorAlert
