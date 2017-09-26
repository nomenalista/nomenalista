import store from '../modules'
import {renderNothing} from 'recompose'

export default Component =>
  !store.getState().Login.isLogged ? renderNothing() : Component
