import React from 'react'

const Group = ({ group, enterGroup }) => {
  return (
    <div style={{display: "inline-block"}} onClick={() => enterGroup(group.id)}>
      <i style={{
        color: group.color,
        paddingRight: '5px',
      }} className="fa fa-circle"
      />
    </div>
  )
}

export default Group
