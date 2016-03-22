import React from 'react'
import ListsContainer from '../../containers/ListsContainer'
import TodoListContainer from '../../containers/TodoListContainer'

/**
 * Displays sidebar
 * @param {object} props - object
 * @param {boolean} props.isOpen - whether sidebar is open
 */
const Sidebar = ({ currentList, listTitle, exitList }) => {
  if (currentList != null) {
    return (
      <div className="sidebar container col-md-3">
        <div className="sidebar-row">
          <i className="fa fa-arrow-left" onClick={exitList} />
          <span id="list-title">{ listTitle }</span>
        </div>
        <TodoListContainer />
      </div>
    )
  }
  return (
    <div className="sidebar container col-md-3">
      <div id="sidebar-title" className="sidebar-row">
        <span id="todos">Poops.</span>
      </div>
      <TodoListContainer />
    </div>
  )
}

export default Sidebar
