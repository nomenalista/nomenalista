import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Form from './components/Form'
import * as actions from '../../modules/Estabelecimento/actions'

class Estabelecimento extends Component {
  handleSubmit = values => this.props.sendForm(values)

  componentWillMount() {
    const {getEstabelecimento, company_id} = this.props
    getEstabelecimento(company_id)
  }

  render() {
    return (
      <div>
        <Form
          onSubmit={this.handleSubmit}
          initialValues={this.props.form_data}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  company_id: state.Login.company_id,
  form_data: state.Estabelecimento.data
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Estabelecimento)
