import React from 'react'

const Todo = ({ todo, removeTodo, id }) => {
  const style = todo.color ?
    { borderLeft: `7px solid ${todo.color}` } :
    { marginLeft: '7px' }
  return (
    <div className="todo" style={style}>
      <i className="fa fa-square-o" onClick={removeTodo.bind(this, id, id, todo.text)} />
      <span className="todo-text">{todo.text}</span>
    </div>
  )
}

export default Todo
