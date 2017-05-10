export const EventoNovo = {
    path: '/eventos/novo',

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./containers/novo').default)
        })
    }
}
