import { connect } from 'react-redux'
import Navbar from '../../components/Navbar'

const mapStateToProps = ({ user }) => {
  if (user && user.email) {
    return {
      userEmail: user.email
    }
  }
  // throw error
  return {}
}

const NavbarContainer = connect(
  mapStateToProps
)(Navbar)

export default NavbarContainer
