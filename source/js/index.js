import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import 'babel-polyfill'
import logger from 'dev/logger'

import rootReducer from 'reducers'
import Routes from 'routes'
import DevTools from 'dev/redux-dev-tools'
import { composeWithDevTools } from 'redux-devtools-extension'
import injectTapEventPlugin from 'react-tap-event-plugin'
// Load SCSS
import '../scss/app.scss'

const isProduction = process.env.NODE_ENV === 'production'


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

// Creating store
let store = null

if (isProduction) {
  // In production adding only thunk middleware
  const middleware = applyMiddleware(thunk)

  store = createStore(
    rootReducer,
    middleware
  )
} else {
  // In development mode beside thunk
  // logger and DevTools are added
  const middleware = applyMiddleware(thunk, logger)
  /* eslint-disable no-underscore-dangle */
  const enhancer = compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  store = createStore(rootReducer, enhancer)
}


// Render it to DOM
ReactDOM.render(
  <Provider store={ store }>
    <div><MuiThemeProvider><Routes /></MuiThemeProvider></div>
  </Provider>,
  document.getElementById('root')
)
