import React from 'react'
import { Notification } from 'react-notification';
import { removeNotification } from '../../actions/notifications'

/**
 * Displays sidebar
 * @param {object} props - object
 * @param {boolean} props.isOpen - whether sidebar is open
 */
const Notifications = ({ notification, removeNotification }) => {

  if(notification) {
      return (
          <Notification
           isActive={true}
           message={notification.message}
           key={notification.key}
           action={'Dismiss'}
           dismissAfter={5}
           onClick ={removeNotification}
           onDismiss={removeNotification}
          />
      );
      //return <div>{notifications.last().message}</div>
  } else {
    return <div></div> //empty div intentional
  }

}

export default Notifications 
