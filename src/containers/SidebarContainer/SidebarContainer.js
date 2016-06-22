import { connect } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import { exitGroup } from '../../actions/sidebar.js'

const mapStateToProps = ({ sidebar, entities }) => {
  const { currentGroup } = sidebar.toJS()
  const groupEntities = entities.toJS().groups
  return {
    currentGroupData: currentGroup != null ? groupEntities[currentGroup] : {},
  }
}

const SidebarContainer = connect(
  mapStateToProps
)(Sidebar)

export default SidebarContainer
