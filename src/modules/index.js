import {combineReducers}          from 'redux'
import {reducer as formReducer}   from 'redux-form'

import {createStore, applyMiddleware, compose} from 'redux'
import promiseMiddleware from 'redux-promise'

import Auth from './Auth'
import Cadastro from './Cadastro'
import Login from './Login'

const combineReducer = combineReducers({
    form : formReducer,
    Auth,
    Cadastro,
    Login
})

/*
* Store
*/
export const store = createStore(combineReducer, {}, compose(
    applyMiddleware(promiseMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

/*
* Api Server
*/
import R from 'ramda'

export const apiServer = (R.equals(window.location.hostname, 'localhost'))
                         ? 'http://nomenalista.github.dev:8000'
                         : 'https://nomenalista.herokuapp.com/'
