import { connect } from 'react-redux'
import Groups from '../../components/Groups'
import { enterGroup } from '../../actions/sidebar.js'
import { deleteGroup } from '../../actions/groups.js'

const mapStateToProps = ({ groups, todos, entities }) => {
  const jsEntities = entities.toJS()
  if (groups) {
    return {
      groups: groups.map((listId) => {
        return jsEntities.groups[listId]
      }),
      todos: todos ? todos
        .map((todoId) => jsEntities.items[todoId])
        .filter((todo) => todo.group)
        .toJS() : {},
    }
  }
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    enterGroup: (id) => {
      dispatch(enterGroup(id))
    },
    deleteGroup: (event, id, todosToRemove) => {
      event.stopPropagation()
      event.preventDefault()
      dispatch(deleteGroup(id, todosToRemove))
    },
  }
}

const GroupsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Groups)

export default GroupsContainer

