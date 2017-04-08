import Layout from './../layouts'

import Home from './Home'
import Eventos from './Eventos'
import CadastroLogin from './Cadastro'

const EventoNovo = {
    path: '/eventos/novo',

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./Eventos/containers/novo').default)
        })
    }
}

const Estabelecimento = {
    path: '/estabelecimento',

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./Estabelecimento').default)
        })
    }
}

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
