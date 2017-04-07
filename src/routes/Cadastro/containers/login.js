import React, {Component} from 'react'
import {connect} from 'react-redux'
import Form from '../components/FormLogin'
import {sendFormLogin} from '../../../modules/Login/actions'
import {Alert, Loader} from '../../../components'
import {checkSession} from './../../../components/Session'

class LoginContainer extends Component {

    handleSubmit(values, dispatch) {
        return sendFormLogin(values, dispatch)
    }

    componentDidUpdate() {
        const {isLogged} = this.props

        if (isLogged) {
            return checkSession(isLogged)
        }
    }

    render() {
        const { text, enviando }    = this.props
        const status                = (text) ? Alert(text) : null
        const loading               = Loader()

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

const mapStateToProps = state => {
    return {
        ...state.Login,
        isLogged : state.Auth.isLogged
    }
}

export default connect(mapStateToProps)(LoginContainer)
