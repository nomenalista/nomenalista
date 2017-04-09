import React, {Component} from 'react'
import {connect} from 'react-redux'
import Form from './components/form'

import * as actions from '../../modules/Estabelecimento/actions'

class Estabelecimento extends Component {

    handleSubmit = values => {
        this.props.dispatch(actions.sendForm(values))
    }

    componentWillMount() {
        this.props.dispatch(actions.getEstabelecimento(1))
    }

    render() {
        return (
            <div>
                <Form
                    onSubmit={this.handleSubmit.bind(this)}
                />
            </div>
        )
    }
}

export default connect()(Estabelecimento)
