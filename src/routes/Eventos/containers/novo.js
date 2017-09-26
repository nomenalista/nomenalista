import React from 'react'
import {Link} from 'react-router'
import Form from '../components/Form'

const EventoNovo = () =>
  <div>
    <p className="pull-right">
      <Link to="/eventos" className="btn btn-default">Voltar</Link>
    </p>
    <div className="row">
      <div className="col-md-12">
        <Form />
      </div>
    </div>
  </div>

export default EventoNovo
