import axios from 'axios'
import apiServer from './server'
import {getState} from 'redux-localstore'

const {company_id, user_id} = getState().Login

const auth = JSON.stringify({
  company_id,
  user_id
})

axios.defaults.baseURL = apiServer
axios.defaults.headers.common['Authorization'] = auth

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
