import React from 'react'
import Group from './Group.js'

const Groups = ({ groups, todos, enterGroup, deleteGroup }) => {
  return (
    <div>
    <div className="group" onClick={() => enterGroup(null)}>
    <i style={{
      paddingRight: '5px',
    }} className="fa fa-circle-o"
    />
      All
    </div>
    {
      groups || groups !== [] ? groups.map(
        group => {
          const todosInGroup = todos
            .filter((todo) => todo.group === group.id)
            .map(todo => todo.id)
          return (
            <Group
              group={group}
              todos={todosInGroup}
              enterGroup={enterGroup}
              deleteGroup={deleteGroup}
              key={group.id}
            />
          )
        }) : 'No groups found'
    }
    </div>
  )
}

export default Groups
