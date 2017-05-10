import React, {Component} from 'react'
import {connect} from 'react-redux'
import Form from '../components/FormCadastro'
import {sendFormCadastro} from './../../../modules/Cadastro/actions'
import Alert from '../../../components/Alert'
import Loader from '../../../components/Loader'
import {validateSession} from './../../../components/Session'

class CadastroContainer extends Component {
  handleSubmit = values => this.props.dispatch(sendFormCadastro(values))

  componentDidUpdate() {
    const {isLogged} = this.props

    if (isLogged) {
      return validateSession(isLogged)
    }
  }

  render() {
    const {text, enviando} = this.props
    const status = text && Alert(text)
    const loading = Loader()
    return (
      <div className="jumbotron">
        <div className="row text-center">
          <h2>Ainda não possui cadastro?</h2>
        </div>
        <Form onSubmit={this.handleSubmit} />
        <div>
          {enviando ? loading : status}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.Cadastro,
  isLogged: state.Login.isLogged
})

export default connect(mapStateToProps)(CadastroContainer)
