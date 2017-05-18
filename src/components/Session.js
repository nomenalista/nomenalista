import React from 'react'
import {browserHistory, Redirect} from 'react-router'
import {store} from '../modules'

export default Component => {
  if (!store.getState().Login.isLogged) {
    return <Redirect to="/" />
  }
  return Component
}

export const checkSession = isLogged => {
  if (isLogged) {
    return browserHistory.push('/#/home')
  }

  return false
}
