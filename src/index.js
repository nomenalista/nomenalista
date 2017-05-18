import React from 'react'
import {render} from 'react-dom'
import {Router, hashHistory} from 'react-router'

import './assets/css/bootstrap.min.css'
import './assets/css/index.css'

import {Provider} from 'react-redux'
import {store} from './modules'
import Routes from './routes'

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={Routes} />
  </Provider>,
  document.getElementById('root')
)
