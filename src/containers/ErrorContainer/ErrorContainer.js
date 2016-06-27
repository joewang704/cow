import { connect } from 'react-redux'
import ErrorNotif from '../../components/Error/ErrorNotif.js'

const mapStateToProps = ({ errors }) => {
  return {
    errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeErrorNotification: () => {
      dispatch({ type: 'CLEAR_ERROR' })
    }
  }
}

const ErrorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorNotif)

export default ErrorContainer
