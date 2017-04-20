import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

import List from '../components/list'
import * as actions from '../../../modules/Eventos/actions'

class Eventos extends Component {
  componentWillMount() {
    this.props.dispatch(actions.getEventos())
  }

  render() {
    return (
      <div>
        <div>
          <span className="pull-right">
            <Link to="/eventos/novo" className="btn btn-primary">Novo</Link>
          </span>
        </div>
        <List eventos={this.props.data} />
      </div>
    )
  }
}

const mapStateToProps = state => state.Eventos

export default connect(mapStateToProps)(Eventos)
