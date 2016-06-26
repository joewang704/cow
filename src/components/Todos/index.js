import React from 'react'
import Todo from './Todo.js'

const Todos = ({ todos, currentGroupData, removeTodo }) => {
  return (
    <div>
      { currentGroupData.name || 'All Todos' }
      <hr />
      {
        Array.isArray(todos) && todos.length ? todos.map((todo) => {
          return <Todo todo={todo} removeTodo={removeTodo} id={todo.id} key={todo.id} />
        }) : 'No todos found'
      }
    </div>
  )
}

export default Todos
