import {handleActions} from 'redux-actions'

import {LOGGED_IN, LOGGED_OFF, getLogin} from './actions'

const initialState = getLogin()

const reducer = handleActions({

    [LOGGED_IN] : (state, action) => ({
        ...state,
        isLogged : true,
        token    : action.payload.token
    }),

    [LOGGED_OFF] : (state, action) => ({
        ...state,
        isLogged : false,
        token    : null
    })

}, initialState)

export default reducer
