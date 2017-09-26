import React from 'react'
import {Field, reduxForm} from 'redux-form'
import renderField from 'redux-form-field-wrapper'

const defaultConfig = {
  divClass: 'form-group',
  component: renderField
}

const Form = props => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        type="text"
        name="email"
        label="E-mail"
        placeholder="E-mail ou Telefone"
        {...defaultConfig}
      />

      <Field
        type="password"
        name="password"
        label="Senha"
        placeholder="Senha"
        {...defaultConfig}
      />

      <div className="form-group">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={pristine || submitting}>
          Enviar
        </button>{' '}
        <button
          type="button"
          className="btn btn-default"
          disabled={pristine || submitting}
          onClick={reset}>
          Limpar
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'formLogin'
})(Form)
