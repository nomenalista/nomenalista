import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import Cadastro from '../src/routes/Cadastro'
import Estabelecimento from '../src/routes/Estabelecimento'

const store = {
  dispatch: () => {},
  subscribe: () => {},
  getState: () => {}
}

describe('Render test', () => {
  it('Should render Cadastro/Login component without crashing', () => {
    render(
      <Provider store={store}>
        <Cadastro />
      </Provider>,
      document.createElement('div')
    )
  })

  it('Should render Estabelecimento component without crashing', () => {
    render(
      <Provider store={store}>
        <Estabelecimento />
      </Provider>,
      document.createElement('div')
    )
  })
})
