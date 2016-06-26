import React from 'react'
import { Notification } from 'react-notification'

const Notifications = ({ notification, removeNotification }) => {
  if (notification) {
    return (
      <Notification
        isActive={true}
        message={notification.message}
        key={notification.key}
        action={'Dismiss'}
        dismissAfter={5}
        onClick={removeNotification}
        onDismiss={removeNotification}
      />
    )
  }
  return <div></div>
}

export default Notifications
