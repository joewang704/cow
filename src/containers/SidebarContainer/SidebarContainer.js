import { connect } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import { exitList } from '../../actions/sidebar.js'

const mapStateToProps = ({ sidebar, entities }) => {
  const { currentList } = sidebar
  return Object.assign({}, sidebar, {
    listTitle: currentList != null ? entities.toJS().lists[currentList].text : null,
  })
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
