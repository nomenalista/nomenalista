import {combineReducers}          from 'redux'
import {reducer as formReducer}   from 'redux-form'

import {createStore, applyMiddleware, compose} from 'redux'
import promiseMiddleware from 'redux-promise'

import Auth from './Auth'
import Cadastro from './Cadastro'
import Login from './Login'

const combineReducer = combineReducers({
    form : formReducer,
    Login,
    Auth,
    Cadastro
})

export const store = createStore(combineReducer, {}, compose(
    applyMiddleware(promiseMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
