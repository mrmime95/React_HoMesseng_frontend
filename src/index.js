import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import * as serviceWorker from './serviceWorker'

import App from './App'
import routeConfig from './routes'
import configureStore from './store'
import { ROOT_ELEMENT_ID, INITIAL_STATE_KEY } from './utils/constants'

const root = document.getElementById(ROOT_ELEMENT_ID)
const store = configureStore(window[INITIAL_STATE_KEY])

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App routeConfig={routeConfig} />
    </BrowserRouter>
  </Provider>,
  root
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
