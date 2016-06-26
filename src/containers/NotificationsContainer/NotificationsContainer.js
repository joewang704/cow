import { connect } from 'react-redux'
import Notifications from '../../components/Notifications/notifications.js'
import { deleteNotification } from '../../actions/notifications.js'

const mapStateToProps = ({ notification }) => {
  return {
    notification
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeNotification: () => {
      dispatch(deleteNotification())
    }
  }
}

const NotificationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications)

export default NotificationsContainer
