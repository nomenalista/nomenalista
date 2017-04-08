import React from 'react'
import { Field, reduxForm } from 'redux-form'

const Form = (props) => {
      const { handleSubmit, pristine, reset, submitting } = props
      return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>E-mail</label>
                <Field
                    type="text"
                    name="email"
                    component="input"
                    placeholder="E-mail ou Telefone"
                    className="form-control" />
            </div>
            <div className="form-group">
                <label>Senha</label>
                <Field
                    type="password"
                    name="password"
                    component="input"
                    placeholder="Senha"
                    className="form-control" />
            </div>
            <div className="form-group">
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={pristine || submitting}>Enviar
                </button>{' '}
                <button
                    type="button"
                    className="btn btn-default"
                    disabled={pristine || submitting}
                    onClick={reset}>Limpar
                </button>
            </div>
        </form>
      )
}

export default reduxForm({
  form: 'formLogin'
})(Form)
