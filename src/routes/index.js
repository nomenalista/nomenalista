import Layout from './../layouts'

import Home from './Home'
import Eventos from './Eventos'
import {EventoNovo} from './Eventos/routes'
import Estabelecimento from './Estabelecimento'
import CadastroLogin from './Cadastro'

const Routes = [
        {
            path: '/',
            component: CadastroLogin
        }, {
            path: '/home',
            component: Layout,
            indexRoute: Home,
            childRoutes: [
                Estabelecimento,
                Eventos,
                EventoNovo
            ]
        }
    ]

export default Routes
