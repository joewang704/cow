import React, { Component, PropTypes } from 'react'
import { saveItem } from '../../actions/items'
import Form from '../../components/Form'
import RadioGroup from 'react-radio-group'

class CalendarDialogForm extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRadioChange = this.handleRadioChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      eventName: '',
      isEvent: true,
      isCheckable: false,
    }
  }

  onSubmit(event) {
    event.preventDefault()
    const { eventName, isCheckable } = this.state
    const { eventId, store } = this.props
    if (eventName) {
      store.dispatch(saveItem(eventId, eventName, isCheckable))
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

  handleRadioChange(checkable) {
    this.setState({
      isCheckable: checkable,
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
        <br />
        <RadioGroup name="isCheckable" id="isCheckable" selectedValue={this.state.isCheckable} onChange={this.handleRadioChange}>
          {
            Radio => (
              <div>
                <label className="radio-inline"><Radio value={false} />Event</label>
                <label className="radio-inline"><Radio value={true} />Todo</label>
              </div>
            )
          }
        </RadioGroup>
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

