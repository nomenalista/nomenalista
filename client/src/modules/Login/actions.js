import {createAction} from 'redux-actions'

import Request from '../service'

export const LOGIN_SENDING = 'modules/Login/SENDING'
export const LOGIN_SUCCESS = 'modules/Login/SUCCESS'
export const LOGIN_ERROR = 'modules/Login/ERROR'

const loginSending = createAction(LOGIN_SENDING)
const loginError = createAction(LOGIN_ERROR, payload => console.log(payload))
const loginSuccess = createAction(LOGIN_SUCCESS)

export const sendFormLogin = values => ({
  type: [loginSending, loginSuccess, loginError],
  payload: {
    data: () => Request({method: 'post', url: '/login', data: values})
  }
})
