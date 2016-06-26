import React from 'react'
import { Notification } from 'react-notification'

const Notifications = ({ notification, undoNotification, removeNotification }) => {
  if (notification) {
    return (
      <Notification
        isActive={true}
        message={notification.message}
        key={notification.key}
        action={'Undo'}
        dismissAfter={5}
        onClick={undoNotification}
        onDismiss={removeNotification}
      />
    )
  }
  return <div></div>
}

export default Notifications
