import { connect } from 'react-redux'
import Calendar from '../../components/calendar/Calendar.js'

const mapStateToProps = ({ events, entities, ui }) => {
  const dialog = ui.get('dialog')
  return {
    events: events.map(eventId => entities.toJS().items[eventId]),
    dialog: dialog && dialog.get('type') === 'calendar' ? dialog : null,
    interGroups: entities.toJS().interGroups,
  }
}

const CalendarContainer = connect(
  mapStateToProps
)(Calendar)

export default CalendarContainer


