import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'

import Routes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/index.css'

/*
* Redux
*/
import {Provider} from 'react-redux'
import {store} from  './modules'

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={Routes} />
    </Provider>,
  document.getElementById('root')
)
