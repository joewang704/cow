import { connect } from 'react-redux'
import Cell from '../../components/calendar/Cell.js'
//import { createItemFromCalendar } from '../../actions/items'
import { initEvent } from '../../actions/calendar'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    initEvent: (startTime, endTime, day) => {
      dispatch(initEvent(startTime, endTime, day))
    }
  }
}

const CellContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell)

export default CellContainer

