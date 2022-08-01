import Layout from '../components/layout/Layout'
import Link from 'next/link'
import Navigator from '../components/routes/Navigator'

export default function Home() {
  return (
    <div>
      <Navigator titulo="Teste" destino="/exemplo"></Navigator>
    </div>
  )
}
