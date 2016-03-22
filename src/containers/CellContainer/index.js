import { connect } from 'react-redux'
import Cell from '../../components/calendar/Cell.js'
import { createItemFromCalendar } from '../../actions/items'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    createItemFromCalendar: (startTime, endTime, day) => {
      dispatch(createItemFromCalendar(startTime, endTime, day))
    }
  }
}

const CellContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell)

export default CellContainer

