import { connect } from 'react-redux'
import ErrorNotif from '../../components/Error/error_notif.js'

const mapStateToProps = ({errors}) => {
    console.log(errors)
    return {
        errors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeErrorNotification: () => {

        }
    }
}

const ErrorContainer = connect(
        mapStateToProps,
        mapDispatchToProps
    )(ErrorNotif)

export default ErrorContainer