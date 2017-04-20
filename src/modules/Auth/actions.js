import {createAction} from 'redux-actions'
import R from 'ramda'

export const getLogin = () => {
  const token = localStorage.getItem('token')

  if (R.isNil(token)) {
    return {
      token: token,
      isLogged: true
    }
  }

  return {
    token: null,
    isLogged: false
  }
}

export const LOGGED_IN = 'modules/Auth/LOGGED_IN'
export const LOGGED_OFF = 'modules/Auth/LOGGED_OFF'

export const loggedIn = createAction(LOGGED_IN, token => {
  localStorage.setItem('token', token)
  return {token}
})

export const loggedOff = createAction(LOGGED_OFF, () => {
  localStorage.removeItem('token')
})
