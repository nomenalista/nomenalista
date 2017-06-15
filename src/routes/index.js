import Layout from './../layouts'

import Home from './Home'
import {Eventos, EventoNovo} from './Eventos/routes'
import Estabelecimento from './Estabelecimento/routes'
import CadastroLogin from './Cadastro'

const Routes = [
  {
    path: '/',
    component: CadastroLogin
  },
  {
    path: '/home',
    component: Layout,
    indexRoute: Home,
    childRoutes: [Eventos, EventoNovo, Estabelecimento]
  }
]

export default Routes
