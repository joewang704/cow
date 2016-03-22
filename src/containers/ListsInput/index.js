import React, { Component, PropTypes } from 'react'
import { createList } from '../../actions/lists.js'
import InputGroup from '../../components/InputGroup'

class ListsInput extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      listValue: '',
    }
  }

  onSubmit(event) {
    event.preventDefault()
    const listValue = this.state.listValue
    if (listValue) {
      this.context.store.dispatch(createList(listValue))
      this.setState({
        listValue: '',
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
      value: this.state.listValue,
      id: 'listValue',
    }
    return <InputGroup field={field} onSubmit={this.onSubmit} handleChange={this.handleChange} />
  }
}

ListsInput.contextTypes = {
  store: PropTypes.object
}

export default ListsInput

