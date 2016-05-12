import React from 'react'
import GroupsContainer from '../../containers/GroupsContainer'
import GroupsInputContainer from '../../containers/GroupsInputContainer'
import TodosContainer from '../../containers/TodosContainer'
import TodosInputContainer from '../../containers/TodosInputContainer'

/**
 * Displays sidebar
 * @param {object} props - object
 * @param {boolean} props.isOpen - whether sidebar is open
 */
const Sidebar = ({ currentGroup, groupTitle, exitList }) => {
  return (
    <div className="sidebar container col-md-3">
      <div id="sidebar-title" className="sidebar-row">
        <span id="todos">Poops.</span>
      </div>
      <TodosContainer />
      <TodosInputContainer currentGroup={currentGroup} />
      <br />
      <GroupsContainer />
      <GroupsInputContainer />
    </div>
  )
}

export default Sidebar
