import { connect } from 'react-redux'
import Calendar from '../../components/Calendar/Calendar.js'
import { deleteItem } from '../../actions/items'
import { removeEventMark } from '../../actions/calendar'

const mapStateToProps = ({ events, entities, calendar }) => {
  return {
    events: events.map(eventId => entities.toJS().items[eventId]),
    blocks: entities.toJS().blocks,
    eventMarker: calendar.toJS().eventMarker,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id, checkable) => {
      dispatch(deleteItem(id, checkable))
    },
    removeEventMark: () => {
      dispatch(removeEventMark())
    }
  }
}

const CalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar)

export default CalendarContainer


