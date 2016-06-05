import { connect } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import { exitGroup } from '../../actions/sidebar.js'

const mapStateToProps = ({ sidebar, entities }) => {
  const { currentGroup } = sidebar.toJS()
  const groupEntities = entities.toJS().groups
  return {
    groupTitle: currentGroup != null ? groupEntities[currentGroup].name : 'Hello there!',
    currentGroupData: currentGroup != null ? groupEntities[currentGroup] : {},
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
