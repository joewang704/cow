import React, { Component, PropTypes } from 'react'
import { createTodoFromGroup } from '../../actions/items'
import TodosInput from '../../components/TodosInput'
import {SAME_ERROR} from '../../constants/actions'

class TodosInputContainer extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      todoValue: '',
      selectedGroup: this.props.currentGroupData,
      isOpen: false,
    }
  }

  componentWillReceiveProps({ currentGroupData: nextGroupData }) {
    if (nextGroupData && nextGroupData.color &&
        nextGroupData.color !== this.props.currentGroupData.color) {
      this.setState({
        selectedGroup: nextGroupData,
      })
    }
  }

  onSubmit(event) {
    event.preventDefault()
    const { todoValue, selectedGroup } = this.state
    const { store } = this.context
    console.log(todoValue)
    if (todoValue) {
      var todoList = this.context.store.getState().todos.toJS()
      console.log(todoList)
      var entityMap = this.context.store.getState().entities.toJS().items
      console.log(entityMap)
      var exists = false;
      todoList.forEach(function(id) {
        if (entityMap[id].text == todoValue && !exists)
          exists = true;
      });
      if (exists) {
        store.dispatch({type:SAME_ERROR})
        this.setState({
          todoValue: '',
        })
      } else {
      store.dispatch(createTodoFromGroup(todoValue, selectedGroup.id))
      this.setState({
        todoValue: '',
      })
    }
    }
  }

  onColorClick(group) {
    this.setState({
      selectedGroup: group,
    })
    this.togglePopover()
  }

  togglePopover() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
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
    return (
      <TodosInput
        field={field}
        onSubmit={this.onSubmit.bind(this)}
        handleChange={this.handleChange}
        togglePopover={this.togglePopover.bind(this)}
        isOpen={this.state.isOpen}
        onColorClick={this.onColorClick.bind(this)}
        selectedGroup={this.state.selectedGroup}
      />
    )
  }
}

TodosInputContainer.contextTypes = {
  store: PropTypes.object,
}

TodosInputContainer.propTypes = {
  currentGroupData: PropTypes.object,
}

export default TodosInputContainer
