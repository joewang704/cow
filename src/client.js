import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import thunk from 'redux-thunk'
import transit from 'transit-immutable-js'
import { AppContainer } from 'react-hot-loader'

const immutableState = transit.fromJSON(window.__INITIAL_STATE__)

const store = createStore(
  rootReducer,
  immutableState,
  applyMiddleware(thunk)
)

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
    render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>
    , document.getElementById('app'))
  })
}
