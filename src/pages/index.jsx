import Layout from '../components/layout/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Link href="/exemplo">
      <h1>Exemplo</h1>
    </Link>
  )
}
