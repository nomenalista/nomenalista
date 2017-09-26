import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import store from '../src/modules'

import Cadastro from '../src/routes/Cadastro'
import Estabelecimento from '../src/routes/Estabelecimento'
import Eventos from '../src/routes/Eventos'

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

  it('Should render Eventos component without crashing', () => {
    render(
      <Provider store={store}>
        <Eventos />
      </Provider>,
      document.createElement('div')
    )
  })
})
