import {handleActions} from 'redux-actions'

import {
  ESTABELECIMENTO_SENDING,
  ESTABELECIMENTO_SUCCESS,
  ESTABELECIMENTO_ERROR
} from './actions'

const initialState = {
  data: null,
  sending: false
}

const reducer = handleActions(
  {
    [ESTABELECIMENTO_SENDING]: (state, action) => ({
      ...state,
      sending: true
    }),

    [ESTABELECIMENTO_SUCCESS]: (state, action) => ({
      ...state,
      sending: false,
      data: action.payload.data
    }),

    [ESTABELECIMENTO_ERROR]: (state, action) => ({
      ...state,
      sending: false
    })
  },
  initialState
)

export default reducer
