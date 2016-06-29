import React from 'react'
import ErrorAlert from './ErrorAlert'

const ErrorNotif = ({ errors, removeErrorNotification }) => {
  if (errors && errors.message) {
    return (
      <ErrorAlert onDismiss={removeErrorNotification}>
        {errors.message}
      </ErrorAlert>
    )
  }
  return (
    <div></div>
  )
}

export default ErrorNotif
