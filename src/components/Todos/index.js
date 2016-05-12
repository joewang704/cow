import React from 'react'
import Todo from './Todo.js'
import { connect } from 'react-redux'

const Todos = ({ todos, listId, removeTodo }) => {
  return (
    <div>
      Todos
      <hr />
      {
        todos || !todos.size() ? todos.map((todo, index) => {
            return <Todo todo={todo} removeTodo={removeTodo} id={todo.id} key={todo.id} />
          }) : 'No todos found'
      }
    </div>
  )
}

export default Todos
