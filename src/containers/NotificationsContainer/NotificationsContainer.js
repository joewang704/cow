import { connect } from 'react-redux'
import Notifications from '../../components/Notifications/notifications.js'
import { deleteNotification } from '../../actions/notifications.js'

//function mapStateToProps(state) {
//  var entities = state.entities;
//  var sidebar = state.sidebar;
//  var todos = state.todos;
//  LOOK AT THIS METHOD, BEFORE STATE GETS UPDATED PASS IN NEED FOR TOAST AND CREATE HERE!
const mapStateToProps = ({notification}) => { 
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
