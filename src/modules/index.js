import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import {createStore, applyMiddleware, compose} from 'redux'
import promiseMiddleware from 'redux-promise'
import fetchMiddleware from 'fetch-middleware'

import Auth from './Auth'
import Cadastro from './Cadastro'
import Login from './Login'
import Estabelecimento from './Estabelecimento'

const combineReducer = combineReducers({
  form: formReducer,
  Login,
  Auth,
  Cadastro,
  Estabelecimento
})

export const store = createStore(
  combineReducer,
  {},
  compose(
    applyMiddleware(promiseMiddleware, fetchMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
