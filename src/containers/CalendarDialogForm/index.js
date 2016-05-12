import React, { Component, PropTypes } from 'react'
import { saveItem } from '../../actions/items'
import Form from '../../components/Form'

class CalendarDialogForm extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      eventName: '',
      isEvent: true,
    }
  }

  onSubmit(event) {
    event.preventDefault()
    const eventName = this.state.eventName
    const { eventId, store } = this.props
    if (eventName) {
      store.dispatch(saveItem(eventId, eventName))
      this.setState({
        eventName: '',
      })
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  render() {
    const fields = [{
      type: 'text',
      value: this.state.eventName,
      id: 'eventName',
      autoFocus: true,
    }]
    return (
      <Form onSubmit={this.onSubmit} handleChange={this.handleChange}>
        <input type="text" value={this.state.eventName} id="eventName" autoComplete="off" autoFocus className="form-control" />
        <button type="submit" className="btn">Create</button>
      </Form>
    )
  }
}

CalendarDialogForm.contextTypes = {
  store: PropTypes.object
}

CalendarDialogForm.propTypes = {
  eventId: PropTypes.number
}

export default CalendarDialogForm

