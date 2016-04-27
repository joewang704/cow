import React from 'react'
import GroupsContainer from '../../containers/GroupsContainer'
import TodosContainer from '../../containers/TodosContainer'

/**
 * Displays sidebar
 * @param {object} props - object
 * @param {boolean} props.isOpen - whether sidebar is open
 */
const Sidebar = ({ currentList, listTitle, exitList }) => {
  // explicit null check needed because currentList can be 0
  if (currentList != null) {
    return (
      <div className="sidebar container col-md-3">
        <div className="sidebar-row">
          <i className="fa fa-arrow-left" onClick={exitList} />
          <span id="list-title">{ listTitle }</span>
        </div>
        <TodosContainer />
      </div>
    )
  }
  return (
    <div className="sidebar container col-md-3">
      <div id="sidebar-title" className="sidebar-row">
        <span id="todos">Poops.</span>
      </div>
      <TodosContainer />
    </div>
  )
}

export default Sidebar
