import { connect } from 'react-redux'
import Todos from '../../components/Todos'
import { deleteTodo } from '../../actions/todos.js' //replacement

const mapStateToProps = ({ entities, sidebar, todos}) => {
  const { currentGroup } = sidebar.toJS()
  if (todos) {
    return {
      todos: todos.map((todoId) => {
        const jsEntities = entities.toJS()
        const todo = jsEntities.items[todoId]
        todo.color = jsEntities.groups[todo.group].color
        return todo
      }).filter(({ group }) => {
        return (!currentGroup || group === currentGroup)
      }),
      groupId: currentGroup,
    }
  }
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (id, key, text) => {
      dispatch(deleteTodo(id, key, text))
    }
  }
}

const TodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)

export default TodosContainer
