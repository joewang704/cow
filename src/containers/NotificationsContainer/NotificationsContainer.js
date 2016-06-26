import { connect } from 'react-redux'
import Notifications from '../../components/Notifications/notifications.js'
import { deleteNotification, undoNotification } from '../../actions/notifications.js'
import { createPackagedItem } from '../../actions/items.js'

const mapStateToProps = ({ notification, entities }) => {
  return {
    notification,
    lastRemovedItem: entities ? entities.toJS().lastRemovedItem : null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeNotification: () => {
      dispatch(deleteNotification())
    },
                        
    undoNotification: (lastRemovedItem) => {
      console.log('IN UNDO IN CONTAINER:')
      console.log(lastRemovedItem)
      if (lastRemovedItem) {
        dispatch(createPackagedItem(lastRemovedItem))
        dispatch(deleteNotification())
        //removeNotification()
      }
    }
  }
}

const NotificationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications)

export default NotificationsContainer
