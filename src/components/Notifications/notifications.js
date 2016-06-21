import React from 'react'
import { Notification } from 'react-notification';
import { removeNotification } from '../../actions/notifications'

const Notifications = ({ notification, removeNotification }) => {

  if(notification) {
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
      );
  } else {
    return <div></div>
  }

}

export default Notifications
