import React from 'react'
import Cadastro from './containers/cadastro'
import Login from './containers/login'

import Logo from '../../assets/logo.png'

const CadastroLogin = () => (
    <div className="container">
        <div className="row">
            <div className="col-md-4 col-md-offset-4">
                <img src={ Logo } className="img-responsive" alt="NomenaLista" />
            </div>
        </div>
        <br />
        <div className="row">
            <div className="col-md-5">
                <Login/>
            </div>
            <div className="col-md-5 col-md-offset-2">
                <Cadastro/>
            </div>
        </div>
    </div>
)

export default CadastroLogin
