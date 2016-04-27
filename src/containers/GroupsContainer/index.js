import { connect } from 'react-redux'
import Lists from '../../components/Lists'
import { enterList } from '../../actions/sidebar.js'

const mapStateToProps = ({ lists, entities }) => {
  if (lists) {
    return {
      lists: lists.map((listId) => {
        return entities.toJS().lists[listId]
      })
    }
  }
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    enterList: (id) => {
      dispatch(enterList(id))
    }
  }
}

const ListsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Lists)

export default ListsContainer

