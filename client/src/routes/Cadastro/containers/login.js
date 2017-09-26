import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers} from 'recompose'

import Form from '../components/FormLogin'
import {Loader, Alert} from '../../../components/Bootstrap'
import {sendFormLogin} from '../../../modules/Login/actions'

const LoginContainer = ({handleSubmit, text, enviando}) => {
  const status = text ? Alert(text) : null
  return (
    <div className="jumbotron">
      <div className="row text-center">
        <h2>Faça login aqui</h2>
      </div>
      <Form onSubmit={handleSubmit} />
      <div>{enviando ? Loader() : status}</div>
    </div>
  )
}

export default compose(
  connect(state => state.Login),
  withHandlers({
    handleSubmit: props => values => props.dispatch(sendFormLogin(values))
  })
)(LoginContainer)
