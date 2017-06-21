import React from 'react'
import {compose, lifecycle} from 'recompose'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'

import CadastroContainer from './containers/cadastro'
import LoginContainer from './containers/login'
import Logo from '../../assets/img/logo.png'

const CadastroLogin = () =>
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-md-offset-4">
        <img src={Logo} className="img-responsive" alt="NomenaLista" />
      </div>
    </div>
    <br />
    <div className="row">
      <div className="col-md-5">
        <LoginContainer />
      </div>
      <div className="col-md-5 col-md-offset-2">
        <CadastroContainer />
      </div>
    </div>
  </div>

export default compose(
  connect(state => state.Login),
  lifecycle({
    componentWillMount() {
      if (this.props.isLogged) {
        browserHistory.push('#/home')
      }
    },
    componentDidUpdate() {
      if (this.props.isLogged) {
        browserHistory.push('#/home')
      }
    }
  })
)(CadastroLogin)
