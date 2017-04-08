import React from 'react'
import {Link} from 'react-router'
import List from '../components/list'

const Eventos = () => (
    <div>
        <div>
            <span className="pull-right">
                <Link to='/eventos/novo' className="btn btn-primary">Novo</Link>
            </span>
        </div>
        <List />
    </div>
)

export default Eventos
