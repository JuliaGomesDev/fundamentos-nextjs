import Layout from '../../../components/layout/Layout'
import { useRouter } from 'next/router'

export default function Cliente() {
  const rounter = useRouter()

  return (
    <Layout titulo="Navegação dinâmica">
      <div>Filial: {rounter.query.filial} </div>
      <div>Código Cliente: {rounter.query.codigo}</div>
    </Layout>
  )
}
