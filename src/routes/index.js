import Layout from './../layouts'

import Home from './Home'
import About from './About'
import CadastroLogin from './Cadastro'

const Routes = [
        {
            path: '/',
            component: CadastroLogin
        }, {
            path: '/home',
            component: Layout,
            indexRoute: Home,
            childRoutes: [About]
        }
    ]

export default Routes
