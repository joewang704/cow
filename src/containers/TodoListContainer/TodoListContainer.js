import { connect } from 'react-redux'
import TodoList from '../../components/TodoList'
import { deleteItem } from '../../actions/items'

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
      dispatch(deleteItem(id))
    }
  }
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer
