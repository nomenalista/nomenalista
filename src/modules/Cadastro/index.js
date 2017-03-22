import axios from 'axios'
import {createAction} from 'redux-actions'

const CADASTRO_SENDING = 'modules/Cadastro/SENDING'
const CADASTRO_SUCCESS = 'modules/Cadastro/SUCCESS'
const CADASTRO_ERROR = 'modules/Cadastro/ERROR'

const cadastroSending = createAction(CADASTRO_SENDING)
const cadastroError = createAction(CADASTRO_ERROR)

const initialState = {
    text: null,
    enviando: false,
    token: null
}

export default(state = initialState, action) => {
    switch (action.type) {
        case CADASTRO_SENDING:
            return {
                ...state,
                text: "Enviando...",
                enviando: true
            }
        case CADASTRO_SUCCESS:
            return {
                ...state,
                text: action.payload.msg,
                token: action.payload.token,
                enviando: false
            }
        case CADASTRO_ERROR:
            return {
                ...state,
                text: action.payload.msg,
                enviando: false
            }
        default:
            return state;
    }
}

export const sendFormCadastro = (values, dispatch) => {

    dispatch(cadastroSending())

    axios.post('/api/cadastro', values)
        .then(res => dispatch(res.data))
        .catch(err => cadastroError({msg : 'Erro ao cadastrar'}))

}
