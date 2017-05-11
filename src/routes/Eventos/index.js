import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

import List from './components/list'
import {getEventos} from '../../modules/Eventos/actions'

class Eventos extends Component {
  componentWillMount() {
    this.props.dispatch(getEventos(this.props.company_id))
  }

  render() {
    const {eventos} = this.props
    return (
      <div>
        <div>
          <span className="pull-right">
            <Link to="/eventos/novo" className="btn btn-primary">Novo</Link>
          </span>
        </div>
        {eventos && <List eventos={eventos} />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  eventos: state.Eventos.data,
  company_id: state.Login.company_id
})

export default connect(mapStateToProps)(Eventos)
