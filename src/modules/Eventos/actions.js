import {createAction} from 'redux-actions'
import axios from 'axios'

import apiServer from './../server'

export const EVENTO_SENDING = 'modules/Evento/SENDING'
export const EVENTO_SUCCESS = 'modules/Evento/SUCCESS'
export const EVENTO_ERROR = 'modules/Evento/ERROR'

const eventoSending = createAction(EVENTO_SENDING)
const eventoSuccess = createAction(EVENTO_SUCCESS)
const eventoError = createAction(EVENTO_ERROR)

export const sendForm = values => ({
  type: [eventoSending, eventoSuccess, eventoError],
  payload: {
    data: () => axios.post(apiServer + '/events', values)
  }
})

export const getEvento = id => ({
  type: [eventoSending, eventoSuccess, eventoError],
  payload: {
    data: () => axios.get(apiServer + '/events/' + id)
  }
})

export const getEventos = () => ({
  type: [eventoSending, eventoSuccess, eventoError],
  payload: {
    data: () => axios.get(apiServer + '/events')
  }
})
