import React, {Component} from 'react'
import {connect} from 'react-redux'
import Form from '../components/FormCadastro'
import {sendFormCadastro} from './../../../modules/Cadastro'
import {Alert, Loader} from './../../../components'
import {validateSession} from './../../../components/Session'
import {loggedIn} from './../../../modules/Auth'

class Cadastro extends Component {

    handleSubmit(values, dispatch) {
        sendFormCadastro(values, dispatch)
    }

    componentDidUpdate() {
        const {token, isLogged, dispatch} = this.props

        if (token) {
            dispatch(loggedIn({token}))
            return validateSession(isLogged)
        }

    }

    render() {
        const {text, enviando} = this.props
        const status = (text)
            ? Alert(text)
            : null
        const loading = Loader()
        return (
            <div className="jumbotron">
                <div className="row text-center">
                    <h2>Ainda não possui cadastro?</h2>
                </div>
                <Form onSubmit={this.handleSubmit}/>
                <div>
                    {enviando
                        ? loading
                        : status
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state.Cadastro,
        isLogged : state.Auth.isLogged
    }
}

export default connect(mapStateToProps)(Cadastro)
