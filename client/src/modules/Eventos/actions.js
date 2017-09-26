import {createAction} from 'redux-actions'
import Request from '../service'

export const EVENTO_SENDING = 'modules/Evento/SENDING'
export const EVENTO_SUCCESS = 'modules/Evento/SUCCESS'
export const EVENTO_ERROR = 'modules/Evento/ERROR'

const eventoSending = createAction(EVENTO_SENDING)
const eventoSuccess = createAction(EVENTO_SUCCESS)
const eventoError = createAction(EVENTO_ERROR)

export const sendForm = values => ({
  type: [eventoSending, eventoSuccess, eventoError],
  payload: {
    data: () => Request({method: 'post', url: '/events', data: values})
  }
})

export const getEvento = id => ({
  type: [eventoSending, eventoSuccess, eventoError],
  payload: {
    data: () => Request(`/events/${id}`)
  }
})

export const getEventos = company_id => ({
  type: [eventoSending, eventoSuccess, eventoError],
  payload: {
    data: () =>
      Request({method: 'get', url: '/events', data: {company_id: company_id}})
  }
})
