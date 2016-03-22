import React, { Component, PropTypes } from 'react'
import { createTodoFromList } from '../../actions/items'
import InputGroup from '../../components/InputGroup'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      todoValue: '',
    }
  }

  onSubmit(event) {
    event.preventDefault()
    const todoValue = this.state.todoValue
    const { store } = this.context
    const { listId } = this.props
    if (todoValue) {
      store.dispatch(createTodoFromList(todoValue, listId))
      this.setState({
        todoValue: '',
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
      value: this.state.todoValue,
      id: 'todoValue',
    }
    return <InputGroup field={field} onSubmit={this.onSubmit} handleChange={this.handleChange} />
  }
}

TodoForm.contextTypes = {
  store: PropTypes.object
}

TodoForm.propTypes = {
  listId: PropTypes.number
}

export default TodoForm
