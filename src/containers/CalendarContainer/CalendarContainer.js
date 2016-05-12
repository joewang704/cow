import { connect } from 'react-redux'
import Calendar from '../../components/calendar/Calendar.js'
import { deleteEvent } from '../../actions/items'

const mapStateToProps = ({ events, entities }) => {
  return {
    events: events.map(eventId => entities.toJS().items[eventId]),
    blocks: entities.toJS().blocks,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEvent: (id) => {
      dispatch(deleteEvent(id))
    }
  }
}

const CalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar)

export default CalendarContainer


