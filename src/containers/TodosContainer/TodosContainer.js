import { connect } from 'react-redux'
import Todos from '../../components/Todos'
import { deleteTodo } from '../../actions/items'

const mapStateToProps = ({ entities, sidebar, todos }) => {
  const { currentGroup } = sidebar.toJS()
  if (todos) {
    return {
      todos: todos.map((todoId) => {
        const jsEntities = entities.toJS()
        const todo = jsEntities.items[todoId]
        todo.color = jsEntities.groups[todo.group].color
        return todo
      }).filter(({ group, saved }) => {
        return (!currentGroup || group === currentGroup) && saved
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
