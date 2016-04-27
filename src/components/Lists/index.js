import React from 'react'
import List from './List.js'
import GroupsInput from '../../containers/GroupsInput'
import { connect } from 'react-redux'

const Lists = ({ lists, enterList }) => {
  return (
    <div>
      {
        lists || lists == [] ? lists.map((list, index) => {
            return <List list={list} enterList={enterList} id={list.id} key={list.id} />
          }) : 'No lists found'
      }
      <GroupsInput />
    </div>
  )
}

export default Lists
