// TODO: will any of the cookie stuff work in production?
import express from 'express'
import React from 'react'
import { createStore } from 'redux'
import reducers from '../reducers'
import { renderToString } from 'react-dom/server'
import App from '../components/App'
import { Provider } from 'react-redux'
import transit from 'transit-immutable-js'
import webpackConfig from '../../webpack.config.js'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import { getInitialStoreState } from './db.js'
import { checkAuthMiddleware, login, logout } from './auth.js'
import { getCookies } from './utils.js'
import ejs from 'ejs'

const app = express()
const portNum = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/static', express.static(`${__dirname}/../static`))

const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  hot: true,
}))
app.use(webpackHotMiddleware(compiler))

app.set('views', `${__dirname}/../static/html`)
app.set('view engine', 'ejs')

app.get('/login', (req, res) => res.render('login'))

app.post('/login', (req, res) => {
  const { email, password } = req.body
  login(email, password).then((success) => {
    if (success) {
      const cookie = getCookies().find(({ key }) => key === 'is2gjoe')
      if (cookie) {
        res.cookie('is2gjoe', cookie.value)
        return res.redirect('/')
      }
      // TODO: throw server error, cookie not found
      return res.redirect('/login')
    }
    return res.redirect('/login')
  })
})

app.post('/logout', (req, res) => {
  logout().then((success) => {
    return res.send({ success })
  })
})

app.get('/', checkAuthMiddleware, (req, res) => {
  getInitialStoreState().then((initialState) => {
    const store = createStore(reducers, initialState)
    store.dispatch({
      type: 'LOGIN',
      payload: {
        user: req.user,
      }
    })
    let component
    try {
      component = renderToString(
      <Provider store={store}>
        <App />
      </Provider>)
    } catch (err) {
      res.send(`Server error: ${err}`)
    }
    return res.send(renderFullPage(component, store.getState()))
  }).catch((err) => res.send(`Server error: ${err}`))
})

const renderFullPage = (component, initialState) => {
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
          window.__INITIAL_STATE__ = ${JSON.stringify(transit.toJSON(initialState))}
        </script>
        <script src="/webpack/bundle.js"></script>
      </body>
    </html>
  `
}

app.listen(portNum, () => {
  if (!process.env.PORT) {
    // eslint-disable-next-line no-console
    console.log(`Serving port number ${portNum}`)
  }
})
