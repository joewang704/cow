import React from 'react'

const Group = ({ group, todos, enterGroup, deleteGroup }) => {
  const { id, color, name } = group
  return (
    <div className="group" onClick={() => enterGroup(id)}>
      <i style={{
        paddingRight: '5px',
        color,
      }} className="fa fa-circle"
      />
      {name}
      <i className="fa fa-times group-x" onClick={(event) => deleteGroup(event, id, todos)} />
    </div>
  )
}

export default Group
