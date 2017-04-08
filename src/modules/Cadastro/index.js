import {handleActions} from 'redux-actions'

import {CADASTRO_SENDING, CADASTRO_SUCCESS, CADASTRO_ERROR} from './actions'

const initialState = {
    text     : null,
    sending : false,
    token    : null
}

const reducer = handleActions({

    [CADASTRO_SENDING] : (state, action) => ({
        ...state,
        text     : "Enviando...",
        sending  : true
    }),

    [CADASTRO_SUCCESS] : (state, action) => ({
        ...state,
        text     : action.payload.msg,
        token    : action.payload.token,
        sending  : false
    }),

    [CADASTRO_ERROR] : (state, action) => ({
        ...state,
        text    : action.payload.msg,
        sending : false
    })

}, initialState)


export default reducer
