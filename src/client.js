import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import App from './components/App'
import thunk from 'redux-thunk'
import transit from 'transit-immutable-js'

const immutableState = transit.fromJSON(window.__INITIAL_STATE__)

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
