import React from 'react'
import Group from './Group.js'

const Groups = ({ groups, enterGroup }) => {
  return (
    <div>
    <div className="list" onClick={() => enterGroup(null)}>
    <i style={{
      paddingRight: '5px',
    }} className="fa fa-circle-o"
    />
      All
    </div>
    {
      groups || groups !== [] ? groups.map((group) => {
        return <Group group={group} enterGroup={enterGroup} key={group.id} />
      }) : 'No groups found'
    }
    </div>
  )
}

export default Groups
