import express from 'express'
import React from 'react'
import { createStore } from 'redux'
import reducers from './reducers'
import { renderToString } from 'react-dom/server'
import App from './components/App'
import { Provider } from 'react-redux'

const app = express()
export default app

const portNum = process.env.PORT || 8888

app.use('/static', express.static(__dirname + '/static'))

app.get('*', (req, res) => {
  const store = createStore(reducers)
  // TODO: get initialstate from server like user data
  const component = renderToString(
    <Provider store={store}>
      <App />
    </Provider>)
  return res.send(renderFullPage(component, store.getState()))
})

function renderFullPage(component, initialState) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Cow.</title>
        <link rel="stylesheet" href="static/css/bootstrap.min.css">
        <link rel="stylesheet" href="static/css/font-awesome.min.css">
        <link rel="stylesheet" href="static/css/style.css">
        <link href="http://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet" type="text/css">
      </head>
      <body>
        <!--[if lt IE 8]>
          <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browserhappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <div id="app" class="container-fluid">${component}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/js/bundle.js"></script>
      </body>
    </html>
  `
}

app.listen(portNum, () => {
  if (!process.env.PORT) {
    console.log(`Serving port number ${portNum}`)
  }
})
