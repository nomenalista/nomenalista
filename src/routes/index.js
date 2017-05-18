import Layout from './../layouts'

import Home from './Home'
import {Eventos, EventoNovo} from './Eventos/routes'
import Estabelecimento from './Estabelecimento/routes'
import CadastroLogin from './Cadastro'

import Session from '../components/Session'

const Routes = [
  {
    path: '/',
    component: CadastroLogin
  },
  {
    path: '/home',
    component: Layout,
    indexRoute: Home,
    childRoutes: [
      Session(Estabelecimento),
      Session(Eventos),
      Session(EventoNovo)
    ]
  }
]

export default Routes
