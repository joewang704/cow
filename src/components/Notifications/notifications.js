import React from 'react'
import { Notification } from 'react-notification'

const Notifications = ({ notification, lastRemovedItem, undoNotification, removeNotification }) => {
  if (notification) {
    setTimeout(removeNotification, 10000) //remove notification after 10 seconds, dammit
    return (
      <Notification
        isActive={true}
        message={notification.message}
        key={notification.key}
        action={notification.actionType}
        dismissAfter={5}
        onClick={undoNotification.bind(this, lastRemovedItem)}
        onDismiss={removeNotification}
      />
    )
  }
  return <div></div>
}

export default Notifications
