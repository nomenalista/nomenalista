import React from 'react'
import { Field, reduxForm } from 'redux-form'

const Form = (props) => {
      const { handleSubmit, pristine, reset, submitting } = props
      return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Nome</label>
                <Field type="text"
                    name="nome"
                    component="input"
                    placeholder="Nome"
                    className="form-control" />
            </div>
            <div className="form-group">
                <label>E-mail</label>
                <Field type="text"
                    name="login"
                    component="input"
                    placeholder="E-mail"
                    className="form-control" />
            </div>
            <div className="form-group">
                <label>Estabelecimento</label>
                <Field type="text"
                    name="estabelecimento"
                    component="input"
                    placeholder="Nome do estabelecimento/casa"
                    className="form-control" />
            </div>
            <div className="form-group">
                <label>Senha</label>
                <Field type="password"
                    name="senha"
                    component="input"
                    placeholder="Senha"
                    className="form-control" />
            </div>
            <div className="form-group">
                <label>Re-digite a Senha</label>
                <Field type="password"
                    name="re_senha"
                    component="input"
                    placeholder="Re-digite a Senha"
                    className="form-control" />
            </div>
            <div className="form-group">
                <button type="submit"
                    className="btn btn-primary"
                    disabled={pristine || submitting}>Enviar
                </button>{' '}
                <button type="button"
                    className="btn btn-default"
                    disabled={pristine || submitting}
                    onClick={reset}>Limpar
                </button>
          </div>
        </form>
      )
}

export default reduxForm({
  form: 'formCadastro'
})(Form)
