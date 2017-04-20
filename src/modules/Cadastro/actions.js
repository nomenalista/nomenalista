import axios from 'axios'
import {createAction} from 'redux-actions'

export const CADASTRO_SENDING = 'modules/Cadastro/SENDING'
export const CADASTRO_SUCCESS = 'modules/Cadastro/SUCCESS'
export const CADASTRO_ERROR = 'modules/Cadastro/ERROR'

const cadastroSending = createAction(CADASTRO_SENDING)
const cadastroError = createAction(CADASTRO_ERROR)

export const sendFormCadastro = (values, dispatch) => {
  dispatch(cadastroSending())

  axios
    .post('/api/cadastro', values)
    .then(res => dispatch(res.data))
    .catch(err => cadastroError({msg: 'Erro ao cadastrar'}))
}
