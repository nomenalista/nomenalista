export default {
  path: '/estabelecimento',

  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./index').default)
    })
  }
}
