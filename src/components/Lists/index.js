import React from 'react'
import List from './List.js'
import ListsInput from '../../containers/ListsInput'
import { connect } from 'react-redux'

const Lists = ({ lists, enterList }) => {
  return (
    <div>
      {
        lists || lists == [] ? lists.map((list, index) => {
            return <List list={list} enterList={enterList} id={list.id} key={list.id} />
          }) : 'No lists found'
      }
      <ListsInput />
    </div>
  )
}

export default Lists
