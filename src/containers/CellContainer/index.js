import { connect } from 'react-redux'
import Cell from '../../components/Calendar/Cell.js'
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

