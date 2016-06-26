import React, { Component, PropTypes } from 'react'
import { createGroup } from '../../actions/groups.js'
import GroupsInput from '../../components/GroupsInput'

class GroupsInputContainer extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      groupValue: '',
    }
  }

  onSubmit(event) {
    event.preventDefault()
    const groupValue = this.state.groupValue
    if (groupValue) {
      this.context.store.dispatch(createGroup(groupValue))
      this.setState({
        groupValue: '',
      })
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  render() {
    const field = {
      type: 'text',
      value: this.state.groupValue,
      id: 'groupValue',
    }
    return <GroupsInput field={field} onSubmit={this.onSubmit} handleChange={this.handleChange} />
  }
}

GroupsInputContainer.contextTypes = {
  store: PropTypes.object,
}

export default GroupsInputContainer

