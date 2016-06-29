import React from 'react'
import Group from './Group.js'

const Groups = ({ groups, enterGroup }) => {
  return (
    <div style={{
        display: "inline-flex",
        justifyContent: "space-between",
        width: "90%",
        marginLeft: "5%"
    }}>
      <div style={{display: "inline-block"}} onClick={() => enterGroup(null)}>
        <i style={{
             color: null,
             paddingRight: '5px',
           }} className="fa fa-circle-o"
        />
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
