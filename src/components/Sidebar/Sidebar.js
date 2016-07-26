import React from 'react'
import GroupsContainer from '../../containers/GroupsContainer'
import GroupsInputContainer from '../../containers/GroupsInputContainer'
import TodosContainer from '../../containers/TodosContainer'
import TodosInputContainer from '../../containers/TodosInputContainer'

const Sidebar = ({ currentGroupData }) => {
  return (
    <div className="sidebar container col-md-3">
      <div id="sidebar-title" className="sidebar-row">
      </div>
      <div className="sidebar-inner-container">
        <div className="sidebar-header">{ currentGroupData.name || 'All Todos' }</div>
        <TodosContainer />
        <TodosInputContainer currentGroupData={currentGroupData} />
      </div>
      <br />
      <div className="sidebar-inner-container">
        <div className="sidebar-header">Groups</div>
        <GroupsContainer />
        <GroupsInputContainer />
      </div>
    </div>
  )
}

export default Sidebar
