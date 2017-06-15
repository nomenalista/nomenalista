import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers, lifecycle} from 'recompose'

import Form from './components/Form'
import {
  sendForm,
  getEstabelecimento
} from '../../modules/Estabelecimento/actions'

const Estabelecimento = ({handleSubmit, form_data}) =>
  <div>
    <Form onSubmit={handleSubmit} initialValues={form_data} />
  </div>

export default compose(
  connect(state => ({
    company_id: state.Login.company_id,
    form_data: state.Estabelecimento.data
  })),
  withHandlers({
    handleSubmit: props => values => props.dispatch(sendForm(values))
  }),
  lifecycle({
    componentDidMount() {
      const {company_id, dispatch} = this.props
      dispatch(getEstabelecimento(company_id))
    }
  })
)(Estabelecimento)
