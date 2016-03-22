import React from 'react'
import Todo from './Todo.js'
import TodoInput from '../../containers/TodoInput'
import { connect } from 'react-redux'

const TodoList = ({ todos, listId, removeTodo }) => {
  return (
    <div>
      {
        todos || todos == [] ? todos.map((todo, index) => {
            return <Todo todo={todo} removeTodo={removeTodo} id={todo.id} key={todo.id} />
          }) : 'No todos found'
      }
      <TodoInput listId={listId} />
    </div>
  )
}

export default TodoList
