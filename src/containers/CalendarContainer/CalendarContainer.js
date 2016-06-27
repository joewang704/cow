import { connect } from 'react-redux'
import Calendar from '../../components/Calendar/Calendar.js'
import { deleteEvent } from '../../actions/calendar'
import { removeEventMark, switchPopover } from '../../actions/calendar'

const mapStateToProps = ({ events, entities, calendar }) => {
  return {
    events: events.map(eventId => entities.toJS().items[eventId]),
    blocks: entities.toJS().blocks,
    eventMarker: calendar.toJS().eventMarker,
    whichPopover: calendar.toJS().whichPopover
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEvent: (id, checkable) => {
      dispatch(deleteEvent(id, checkable))
    },
    removeEventMark: () => {
      dispatch(removeEventMark())
    },
    switchPopover: (id) => {
      dispatch(switchPopover(id))
    }
  }
}

const CalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar)

export default CalendarContainer

