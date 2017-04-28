import {browserHistory} from 'react-router'

export const validateSession = isLogged => {
  if (!isLogged) {
    return browserHistory.push('/')
  }

  return true
}

export const checkSession = isLogged => {
  if (isLogged) {
    return browserHistory.push('/#/home')
  }

  return false
}
