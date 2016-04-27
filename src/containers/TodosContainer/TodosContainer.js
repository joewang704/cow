import { connect } from 'react-redux'
import Todos from '../../components/Todos'
import { deleteTodo } from '../../actions/items'

const mapStateToProps = ({ entities, sidebar, todos }) => {
  const { currentList } = sidebar
  if (todos) {
    return {
      todos: todos.map((todoId) => {
        return entities.toJS().items[todoId]
      }),
      listId: currentList || null,
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
