import {createAction} from 'redux-actions'

import {loggedIn} from './../Auth'
import Request from '../service'

export const LOGIN_SENDING = 'modules/Login/SENDING'
export const LOGIN_SUCCESS = 'modules/Login/SUCCESS'
export const LOGIN_ERROR = 'modules/Login/ERROR'

const loginSending = createAction(LOGIN_SENDING)
const loginError = createAction(LOGIN_ERROR)
const loginSuccess = createAction(LOGIN_SUCCESS)

export const sendFormLogin = values => store => {
  const {dispatch} = store

  return next => action => {
    dispatch(loginSending())

    return Request({method: 'post', url: '/login', data: values}).then(res => {
      const {data} = res

      if (data.error) {
        return dispatch(
          loginError({
            msg: data.error.msg
          })
        )
      }

      dispatch(loginSuccess())
      return dispatch(loggedIn(data))
    })
  }
}
