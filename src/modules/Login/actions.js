import axios from 'axios'
import {createAction} from 'redux-actions'

import apiServer from './../server'
import {loggedIn} from './../Auth'

export const LOGIN_SENDING = 'modules/Login/SENDING'
export const LOGIN_SUCCESS = 'modules/Login/SUCCESS'
export const LOGIN_ERROR =  'modules/Login/ERROR'

const loginSending = createAction(LOGIN_SENDING)
const loginError   = createAction(LOGIN_ERROR)
const loginSuccess = createAction(LOGIN_SUCCESS)

export const sendFormLogin = (values, dispatch) => {

    dispatch(loginSending())

    axios.post(apiServer + '/login', values)
    .then(res => {
        const {data} = res

        if (data.error) {
            return dispatch(loginError({
                msg : data.error.msg
            }))
        }

        dispatch(loginSuccess())
        return dispatch(loggedIn(data.id))
    })
    .catch(err => {
        dispatch(loginError({
            msg : 'Erro ao logar'
        }))
    })
}
