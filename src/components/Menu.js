import React from 'react'
import {Link} from 'react-router'
import {pure} from 'recompose'

const Menu = () =>
  <div className="list-group">
    <Link to="/estabelecimento" className="list-group-item">
      Estabelecimento
    </Link>
    <Link to="/eventos" className="list-group-item">Eventos</Link>
    <a href="#" className="list-group-item">Listas</a>
    <a href="#" className="list-group-item">Validação</a>
    <a href="#" className="list-group-item">Benefícios</a>
    <a href="#" className="list-group-item">Usuários</a>
  </div>
export default pure(Menu)
