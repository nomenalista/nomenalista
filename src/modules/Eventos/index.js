import {handleActions} from 'redux-actions'

import {EVENTO_SENDING, EVENTO_SUCCESS, EVENTO_ERROR} from './actions'

const initialState = {
  data: null,
  sending: false
}

export default handleActions(
  {
    [EVENTO_SENDING]: (state, action) => ({
      ...state,
      sending: true
    }),

    [EVENTO_SUCCESS]: (state, action) => ({
      ...state,
      sending: false,
      data: action.payload.data
    }),

    [EVENTO_ERROR]: (state, action) => ({
      ...state,
      sending: false
    })
  },
  initialState
)
