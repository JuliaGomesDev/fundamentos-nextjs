import { useState } from 'react'
import Layout from '../components/layout/Layout'

export default function Integracao() {
  const [codigo, setCodigo] = useState(1)
  const [cliente, setCliente] = useState({})

  function obterCliente() {
    fetch(`http://localhost:3000/api/clientes/${codigo}`)
      .then((resp) => resp.json())
      .then((dados) => setCliente(dados))
  }

  return (
    <Layout titulo="Integracao com API #01">
      <input type="number" onChange={(e) => setCodigo(e.target.value)} />
      <button onClick={obterCliente}>Obter Cliente</button>
      <ul>
        <li>Id: {cliente.id} </li>
        <li>Nome: {cliente.nome}</li>
        <li>Idade: {cliente.idade}</li>
        <li>Email: {cliente.email}</li>
      </ul>
    </Layout>
  )
}
