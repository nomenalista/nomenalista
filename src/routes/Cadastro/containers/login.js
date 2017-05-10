import React, {Component} from 'react'
import {connect} from 'react-redux'
import Form from '../components/FormLogin'
import {sendFormLogin} from '../../../modules/Login/actions'
import Loader from '../../../components/Loader'
import Alert from '../../../components/Alert'
import {checkSession} from './../../../components/Session'

class LoginContainer extends Component {
  handleSubmit = values => this.props.dispatch(sendFormLogin(values))

  componentDidUpdate() {
    const {isLogged} = this.props

    if (isLogged) {
      return checkSession(isLogged)
    }
  }

  render() {
    const {text, enviando} = this.props
    const status = text ? Alert(text) : null
    const loading = Loader()

    return (
      <div className="jumbotron">
        <div className="row text-center">
          <h2>Faça login aqui</h2>
        </div>
        <Form onSubmit={this.handleSubmit} />
        <div>{enviando ? loading : status}</div>
      </div>
    )
  }
}

const mapStateToProps = state => state.Login

export default connect(mapStateToProps)(LoginContainer)
