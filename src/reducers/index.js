import { combineReducers } from 'redux'
import entities from './entities'
import todos from './todos'
import groups from './groups'
import events from './events'
import sidebar from './sidebar'
import user from './user'
import calendar from './calendar'
import notification from './notifications'
import errors from './errors'

const reducers = combineReducers({
  sidebar,
  user,
  entities,
  events,
  todos,
  groups,
  calendar,
  notification,
  errors
})

export default reducers
