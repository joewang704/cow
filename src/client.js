import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import { browserHistory  } from 'react-router'
import App from './components/App'
import { fromJS, Set } from 'immutable'
import thunk from 'redux-thunk'

const initialState = window.__INITIAL_STATE__
const immutableState = Object.keys(initialState).reduce(function(obj, key) {
    if (key === 'todos' || key === 'events') {
      obj[key] = Set(initialState[key])
    } else {
      obj[key] = fromJS(initialState[key])
    }
    return obj
}, {})

const store = createStore(
  reducers,
  immutableState,
  applyMiddleware(thunk)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
