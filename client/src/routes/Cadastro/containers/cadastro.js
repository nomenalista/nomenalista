import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers} from 'recompose'

import Form from '../components/FormCadastro'
import {Loader, Alert} from '../../../components/Bootstrap'
import {sendFormCadastro} from './../../../modules/Cadastro/actions'

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
  connect(state => state.Cadastro),
  withHandlers({
    handleSubmit: props => values => props.dispatch(sendFormCadastro(values))
  })
)(CadastroContainer)
