import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers, lifecycle} from 'recompose'

import Form from '../components/FormCadastro'
import {Loader, Alert} from '../../../components/Bootstrap'
import {sendFormCadastro} from './../../../modules/Cadastro/actions'
import {checkSession} from './../../../components/Session'

const CadastroContainer = ({handleSubmit, text, enviando}) => {
  const status = text && Alert(text)
  return (
    <div className="jumbotron">
      <div className="row text-center">
        <h2>Ainda não possui cadastro?</h2>
      </div>
      <Form onSubmit={handleSubmit} />
      <div>
        {enviando ? Loader() : status}
      </div>
    </div>
  )
}

export default compose(
  connect(state => ({
    ...state.Cadastro,
    isLogged: state.Login.isLogged
  })),
  withHandlers({
    handleSubmit: props => values => props.dispatch(sendFormCadastro(values))
  }),
  lifecycle({
    componentDidUpdate() {
      checkSession()
    }
  })
)(CadastroContainer)
