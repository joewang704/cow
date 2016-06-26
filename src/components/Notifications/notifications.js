import React from 'react'
import { Notification } from 'react-notification'

const Notifications = ({ notification, lastRemovedItem, undoNotification, removeNotification }) => {
  if (notification) {
    return (
      <Notification
        isActive={true}
        message={notification.message}
        key={notification.key}
        action={'Undo'}
        dismissAfter={5}
        onClick={undoNotification.bind(this, lastRemovedItem)}
        onDismiss={removeNotification}
      />
    )
  }
  return <div></div>
}

export default Notifications
