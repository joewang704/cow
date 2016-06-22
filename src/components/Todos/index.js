import React from 'react'
import Todo from './Todo.js'
import { connect } from 'react-redux'

const Todos = ({ todos, currentGroupData, removeTodo }) => {
  return (
    <div>
      { currentGroupData.name || 'All Todos' }
      <hr />
      {
        Array.isArray(todos) && todos.length ? todos.map((todo, index) => {
          return <Todo todo={todo} removeTodo={removeTodo} id={todo.id} key={todo.id} />
        }) : 'No todos found'
      }
    </div>
  )
}

export default Todos
