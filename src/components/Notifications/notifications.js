import React from 'react'
import { Notification } from 'react-notification'

const Notifications = ({ notification, lastRemovedItem, undoNotification, removeNotification }) => {
  if (notification) {
    const { message, key, actionType } = notification
    return (
      <Notification
        isActive={true}
        message={message}
        key={key}
        action={actionType}
        dismissAfter={5000}
        onClick={undoNotification.bind(this, lastRemovedItem)}
        onDismiss={removeNotification}
      />
    )
  }
  return <div></div>
}

export default Notifications
