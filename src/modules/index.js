import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import {createStore, applyMiddleware, compose} from 'redux'
import middlewareInjector from 'redux-middleware-injector'
import fetchMiddleware from 'fetch-middleware'
import storeSynchronize from 'redux-localstore'

import Cadastro from './Cadastro'
import Login from './Login'
import Estabelecimento from './Estabelecimento'
import Eventos from './Eventos'

const combineReducer = combineReducers({
  form: formReducer,
  Login,
  Cadastro,
  Estabelecimento,
  Eventos
})

export const store = createStore(
  combineReducer,
  {},
  compose(
    applyMiddleware(middlewareInjector, fetchMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

storeSynchronize(store)
