import axios from 'axios'
import apiServer from './server'
import {getState} from 'redux-localstore'

const loginState = getState().Login

if (loginState) {
  const {company_id, user_id} = loginState

  const auth = JSON.stringify({
    company_id,
    user_id
  })

  axios.defaults.headers.common['Authorization'] = auth
}

axios.defaults.baseURL = apiServer

export default (request, data = null) => {
  if (typeof request !== 'object') {
    request = {
      method: 'get',
      url: request,
      data: data
    }
  }

  return axios(request)
}
