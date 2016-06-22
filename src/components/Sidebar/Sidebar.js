import React from 'react'
import GroupsContainer from '../../containers/GroupsContainer'
import GroupsInputContainer from '../../containers/GroupsInputContainer'
import TodosContainer from '../../containers/TodosContainer'
import TodosInputContainer from '../../containers/TodosInputContainer'

const Sidebar = ({ currentGroupData }) => {
  return (
    <div className="sidebar container col-md-3">
      <div id="sidebar-title" className="sidebar-row">
        <span id="todos">Poops.</span>
      </div>
      <TodosContainer currentGroupData={currentGroupData} />
      <TodosInputContainer currentGroupData={currentGroupData} />
      <br />
      <GroupsContainer />
      <GroupsInputContainer />
    </div>
  )
}

export default Sidebar
