import axios from 'axios'
import apiServer from './server'

export default (request, data = null) => {
  if (typeof request !== 'object') {
    request = {
      method: 'get',
      url: request,
      data: data
    }
  }

  request.url = apiServer + request.url

  return axios(request)
}
