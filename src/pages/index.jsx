import Navigator from '../components/routes/Navigator'

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexWrap: 'wrap'
      }}
    >
      <Navigator
        titulo="Exemplo"
        destino="/exemplo"
        color="#9400d3"
      ></Navigator>
      <Navigator
        titulo="Navegação Simples"
        destino="/teste"
        color="#48bfe3"
      ></Navigator>
      <Navigator
        titulo="Navegação Dinâmica"
        destino="/navigation/SP/123"
        color="#dc143c"
      ></Navigator>
      <Navigator
        titulo="Componente com Estado"
        destino="/estado"
        color="#fb6376"
      ></Navigator>
      <Navigator
        titulo="Integração com API #01"
        destino="/integracao_1"
        color="#3fae3f"
      ></Navigator>
    </div>
  )
}
