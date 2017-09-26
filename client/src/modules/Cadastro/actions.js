import {createAction} from 'redux-actions'

import Request from '../service'

export const CADASTRO_SENDING = 'modules/Cadastro/SENDING'
export const CADASTRO_SUCCESS = 'modules/Cadastro/SUCCESS'
export const CADASTRO_ERROR = 'modules/Cadastro/ERROR'

const cadastroSending = createAction(CADASTRO_SENDING)
const cadastroSuccess = createAction(CADASTRO_SUCCESS)
const cadastroError = createAction(CADASTRO_ERROR)

export const sendFormCadastro = values => ({
  type: [cadastroSending, cadastroSuccess, cadastroError],
  payload: {
    data: () => Request({method: 'post', url: '/register', data: values})
  }
})
