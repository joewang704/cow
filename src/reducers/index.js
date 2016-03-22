import { combineReducers } from 'redux'
import entities from './entities'
import todos from './todos'
import lists from './lists'
import events from './events'
import sidebar from './sidebar'
import user from './user'
import ui from './ui'

const reducers = combineReducers({
  sidebar,
  user,
  entities,
  events,
  todos,
  lists,
  ui,
})

export default reducers
