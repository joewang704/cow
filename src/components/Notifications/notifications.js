import React from 'react'
import GroupsContainer from '../../containers/GroupsContainer'
import GroupsInputContainer from '../../containers/GroupsInputContainer'
import TodosContainer from '../../containers/TodosContainer'
import TodosInputContainer from '../../containers/TodosInputContainer'
import { Notification } from 'react-notification';
import { NotificationStack } from 'react-notification';
import { OrderedSet } from 'immutable';
import { days, timeIntervals } from '../../constants/actions.js'
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
           message={notification
             .message}
           key={notification
                .key}
           action={'Dismiss'}
           dismissAfter={5}
           onClick ={removeNotification}
           onDismiss={removeNotification}
          />
      );
      //return <div>{notifications.last().message}</div>
  } else {
    return (
        <div>'lucasdb'</div>
        )
  }

}

export default Notifications 
