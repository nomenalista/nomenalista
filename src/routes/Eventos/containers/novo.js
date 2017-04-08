import React from 'react'
import {Link} from 'react-router'
import Form from '../components/form'

const EventoNovo = () => (
    <div>
        <p className="pull-right">
            <Link to='/eventos' className="btn btn-success">Voltar</Link>
        </p>
        <div className="row">
            <div className="col-md-12">
                <Form />
            </div>
        </div>
    </div>
)

export default EventoNovo
