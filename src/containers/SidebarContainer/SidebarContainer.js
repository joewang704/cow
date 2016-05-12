import { connect } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import { exitGroup } from '../../actions/sidebar.js'

const mapStateToProps = ({ sidebar, entities }) => {
  const { currentGroup } = sidebar.toJS()
  return {
    groupTitle: currentGroup != null ? entities.toJS().groups[currentGroup].text : null,
    currentGroup,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    exitList: () => {
      dispatch(exitList())
    }
  }
}

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)

export default SidebarContainer
