import React from 'react'
import {Field, reduxForm} from 'redux-form'

const Form = (props) => {
      const { handleSubmit, pristine, reset, submitting } = props
      return (
        <form onSubmit={handleSubmit} className="form-horizontal">
            <div className="form-group">
                <label className="col-md-2">Nome</label>
                <div className="col-md-10">
                    <Field
                        type="text"
                        name="name"
                        component="input"
                        placeholder="Nome do estabelecimento"
                        className="form-control" />
                </div>
            </div>
            <div className="form-group">
                <div className="col-md-offset-2 col-md-10">
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
            </div>
        </form>
      )
}

export default reduxForm({
  form: 'formEstabelecimento'
})(Form)
