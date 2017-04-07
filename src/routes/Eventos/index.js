
export default {
  path: '/eventos',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./containers').default)
    })
  }
}
