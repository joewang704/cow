import React from 'react'
import Group from './Group.js'
import { connect } from 'react-redux'

const Groups = ({ groups, enterGroup }) => {
  return (
    <div>
      Groups
      <hr />
      <div className="list" onClick={enterGroup.bind(this, null)}>
      <i style={{
        paddingRight: '5px'
      }} className="fa fa-circle-o"></i>
        All
      </div>
      {
        groups || groups == [] ? groups.map((group, index) => {
            return <Group group={group} enterGroup={enterGroup} key={group.id} />
          }) : 'No groups found'
      }
    </div>
  )
}

export default Groups
