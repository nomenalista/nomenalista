import {handleActions} from 'redux-actions'
import {defineState} from 'redux-localstore'

import {LOGIN_SENDING, LOGIN_SUCCESS, LOGIN_ERROR} from './actions'

const defaultState = {
  text: null,
  sending: false,
  company_id: null,
  user_id: null,
  isLogged: false
}

const initialState = defineState(defaultState, 'Login')

const reducer = handleActions(
  {
    [LOGIN_SENDING]: (state, action) => ({
      ...state,
      text: 'Aguarde... Efetuando login...',
      sending: true
    }),

    [LOGIN_SUCCESS]: (state, action) => ({
      ...state,
      sending: false,
      company_id: action.payload.company_id,
      user_id: action.payload.user_id,
      isLogged: true
    }),

    [LOGIN_ERROR]: (state, action) => ({
      ...state,
      text: action.error.msg,
      sending: false
    })
  },
  initialState
)

export default reducer
