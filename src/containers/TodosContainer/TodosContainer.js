import { connect } from 'react-redux'
import Todos from '../../components/Todos'
import { deleteTodo } from '../../actions/todos.js' //replacement

const mapStateToProps = ({ entities, sidebar, todos }) => {
  const { currentGroup } = sidebar.toJS()
  const jsEntities = entities.toJS()
  if (todos) {
    return {
      todos: todos.map((todoId) => {
        const todo = jsEntities.items[todoId]
        const group = jsEntities.groups[todo.group]
        todo.color = group ? group.color : ''
        return todo
      }).filter(({ group }) => {
        return ((!currentGroup && currentGroup !== 0) || group === currentGroup)
      }).toJS(),
      currentGroup: jsEntities.groups[currentGroup],
    }
  }
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (id, key, text) => {
      dispatch(deleteTodo(id, key, text))
    },
  }
}

const TodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)

export default TodosContainer
