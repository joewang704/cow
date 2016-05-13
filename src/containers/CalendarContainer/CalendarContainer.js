import { connect } from 'react-redux'
import Calendar from '../../components/calendar/Calendar.js'
import { deleteItem } from '../../actions/items'

const mapStateToProps = ({ events, entities }) => {
  return {
    events: events.map(eventId => entities.toJS().items[eventId]),
    blocks: entities.toJS().blocks,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id, checkable) => {
      dispatch(deleteItem(id, checkable))
    }
  }
}

const CalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar)

export default CalendarContainer


