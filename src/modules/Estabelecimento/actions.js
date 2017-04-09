import {createAction} from 'redux-actions'
import axios from 'axios'

import apiServer from './../server'

export const ESTABELECIMENTO_SENDING = 'modules/Estabelecimento/SENDING'
export const ESTABELECIMENTO_SUCCESS = 'modules/Estabelecimento/SUCCESS'
export const ESTABELECIMENTO_ERROR   =  'modules/Estabelecimento/ERROR'

const estabelecimentoSending = createAction(ESTABELECIMENTO_SENDING)
const estabelecimentoSuccess = createAction(ESTABELECIMENTO_SUCCESS)
const estabelecimentoError   = createAction(ESTABELECIMENTO_ERROR)

export const sendForm = values => ({
    type : [
        estabelecimentoSending,
        estabelecimentoSuccess,
        estabelecimentoError
    ],
    payload : {
        data : () => axios.post(apiServer + '/companies', values)
    }
})

export const getEstabelecimento = id => ({
    type : [
        estabelecimentoSending,
        estabelecimentoSuccess,
        estabelecimentoError
    ],
    payload : {
        data : () => axios.get(apiServer + '/companies/' + id)
    }
})
