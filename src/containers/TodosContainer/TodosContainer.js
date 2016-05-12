import { connect } from 'react-redux'
import Todos from '../../components/Todos'
import { deleteTodo } from '../../actions/items'

const mapStateToProps = ({ entities, sidebar, todos }) => {
  const { currentGroup } = sidebar.toJS()
  if (todos) {
    return {
      todos: todos.map((todoId) => {
        return entities.toJS().items[todoId]
      }).filter((todo) => {
        return !currentGroup || todo.group === currentGroup
      }),
      groupId: currentGroup,

    }
  }
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (id) => {
      dispatch(deleteTodo(id))
    }
  }
}

const TodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)

export default TodosContainer
