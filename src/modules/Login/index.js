import {handleActions} from 'redux-actions'

import {LOGIN_SENDING, LOGIN_SUCCESS, LOGIN_ERROR} from './actions'

const initialState = {
  text: null,
  sending: false
}

const reducer = handleActions(
  {
    [LOGIN_SENDING]: (state, action) => ({
      ...state,
      sending: true
    }),

    [LOGIN_SUCCESS]: (state, action) => ({
      ...state,
      sending: false
    }),

    [LOGIN_ERROR]: (state, action) => ({
      ...state,
      text: action.payload.msg,
      sending: false
    })
  },
  initialState
)

export default reducer
