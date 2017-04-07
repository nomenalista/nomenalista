import Layout from './../layouts'

import Home from './Home'
import Eventos from './Eventos'
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
                Eventos
            ]
        }
    ]

export default Routes
