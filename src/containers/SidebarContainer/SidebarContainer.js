import { connect } from 'react-redux'
import Sidebar from '../../components/Sidebar'

const mapStateToProps = ({ sidebar, entities }) => {
  const { currentGroup } = sidebar.toJS()
  const groupEntities = entities.toJS().groups
  return {
    currentGroupData: currentGroup !== null && currentGroup !== undefined ?
      groupEntities[currentGroup] : {},
  }
}

const SidebarContainer = connect(
  mapStateToProps
)(Sidebar)

export default SidebarContainer
