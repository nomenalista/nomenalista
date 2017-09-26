import React from 'react'
import {Field, reduxForm} from 'redux-form'
import renderField from 'redux-form-field-wrapper'

const defaultConfig = {
  divClass: 'form-group',
  inputClass: 'col-md-10',
  labelClass: 'col-md-2',
  component: renderField
}

const Form = props => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <Field type="hidden" name="id" {...defaultConfig} />
      <Field
        type="text"
        name="name"
        placeholder="Nome do estabelecimento"
        label="Nome"
        {...defaultConfig}
      />
      <div className="form-group">
        <div className="col-md-offset-2 col-md-10">
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
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'formEstabelecimento',
  enableReinitialize: true
})(Form)
