import React from 'react'

const List = props => {
  const eventos = props.eventos.map((evento, key) => (
    <tr key={evento.id}>
      <td>{evento.id}</td>
      <td>{evento.name}</td>
      <td>{evento.status}</td>
      <td>11/11/1111</td>
    </tr>
  ))

  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Status</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {eventos}
      </tbody>
    </table>
  )
}

export default List
