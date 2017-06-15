import React from 'react'
import {browserHistory, Redirect} from 'react-router'
import {store} from '../modules'

export const checkSession = () =>
  store.getState().Login.isLogged ? browserHistory.push('/#/home') : null

export default Component =>
  !store.getState().Login.isLogged ? <Redirect to="/" /> : Component
