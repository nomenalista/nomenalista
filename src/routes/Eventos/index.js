import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {compose, lifecycle} from 'recompose'

import List from './components/List'
import {getEventos} from '../../modules/Eventos/actions'

const Eventos = ({eventos}) =>
  <div>
    <div>
      <span className="pull-right">
        <Link to="/eventos/novo" className="btn btn-primary">Novo</Link>
      </span>
    </div>
    {eventos && <List eventos={eventos} />}
  </div>

export default compose(
  connect(state => ({
    eventos: state.Eventos.data,
    company_id: state.Login.company_id
  })),
  lifecycle({
    componentDidMount() {
      const {company_id, dispatch} = this.props
      dispatch(getEventos(company_id))
    }
  })
)(Eventos)
