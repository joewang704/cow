import React from 'react'

const Group = ({ group, enterGroup }) => {
  return (
    <div className="list" onClick={enterGroup.bind(this, group.id)}>
    <i style={{
      color: group.color,
      paddingRight: '5px'
    }} className="fa fa-circle"></i>
      {group.name}
    </div>
  )
}

export default Group
