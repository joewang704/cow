import React from 'react'

const Todo = ({ todo, removeTodo, id }) => {
  return (
    <div className="todo">
      <input type="checkbox" onClick={removeTodo.bind(this, id)} />
      <div className="todo-text">
        {todo.text}
      </div>
    </div>
  )
}

export default Todo
