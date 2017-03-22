import {createAction} from 'redux-actions'

const getLogin = () => {
    const token = localStorage.getItem('token')
    if ((token !== null) && (token !== 'undefined')) {
        return {token: token, isLogged: true}
    }
    return {token: null, isLogged: false}
}

const LOGGED_IN = 'modules/Auth/LOGGED_IN'
export const LOGGED_OFF = 'modules/Auth/LOGGED_OFF'

const initialState = getLogin()

export default(state = initialState, action) => {
    switch (action.type) {
        case LOGGED_IN:
            return {
                ...state,
                isLogged: true,
                token: action.payload.token
            }
        case LOGGED_OFF:
            return {
                ...state,
                isLogged: false,
                token: null
            }
        default:
            return state;
    }
}

export const loggedIn = createAction(LOGGED_IN, token => {
    localStorage.setItem('token', token)
    return {token}
})
export const loggedOff = createAction(LOGGED_OFF, () => {
    localStorage.removeItem('token')
})
