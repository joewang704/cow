import React from 'react'

const Group = ({ group, enterGroup }) => {
  return (
    <div className="list" onClick={() => enterGroup(group.id)}>
      <i style={{
        color: group.color,
        paddingRight: '5px',
      }} className="fa fa-circle"
      />
      {group.name}
    </div>
  )
}

export default Group
