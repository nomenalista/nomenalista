import React, {Component} from 'react'
import {connect} from 'react-redux'
import Form from '../components/form'

import * as actions from '../../../modules/Estabelecimento/actions'

class Estabelecimento extends Component {
  handleSubmit = values => {
    this.props.dispatch(actions.sendForm(values))
  }

  componentWillMount() {
    const {dispatch, company_id} = this.props
    dispatch(actions.getEstabelecimento(company_id))
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  company_id: state.Login.company_id
})

export default connect(mapStateToProps)(Estabelecimento)
