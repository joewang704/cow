import React from 'react'

const List = ({ list, enterList, id }) => {
  return (
    <div className="list" onClick={enterList.bind(this, id)}>
      {list.text}
    </div>
  )
}

export default List
