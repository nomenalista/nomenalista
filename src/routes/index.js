import Layout from './../layouts'

import Home from './Home'
import About from './About'
import Login from './Login'

const Routes = [
        {
            path: '/',
            component: Login
        }, {
            path: '/home',
            component: Layout,
            indexRoute: Home,
            childRoutes: [About]
        }
    ]

export default Routes
