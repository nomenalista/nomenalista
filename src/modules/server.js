import R from 'ramda'

const apiServer = (R.equals(window.location.hostname, 'localhost'))
                    ? 'http://localhost:8000'
                    : 'https://nomenalista.herokuapp.com/'

export default apiServer
