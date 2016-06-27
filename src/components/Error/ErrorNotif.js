import React from 'react'
import { Alert } from 'react-bootstrap'

const ErrorNotif = ({ errors, removeErrorNotification }) => {
  if (errors && errors.message) {
    return (
      <Alert
        bsClass="alert"
        bsStyle="danger"
        onDismiss={removeErrorNotification}
      >
        {errors.message}
      </Alert>
    )
  }
  return (
    <div></div>
  )
}

export default ErrorNotif
