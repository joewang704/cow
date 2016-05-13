import React from 'react'

const Todo = ({ todo, removeTodo, id }) => {
  return (
    <div className="todo" style={{
      borderLeft: `7px solid ${todo.group}`
    }}>
      <i className="fa fa-square-o" onClick={removeTodo.bind(this, id)} />
      <span className="todo-text">{todo.text}</span>
    </div>
  )
}

export default Todo
