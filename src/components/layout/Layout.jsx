import styles from './Layout.module.css'
import Link from 'next/link'

export default function Layout(props) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>{props.titulo ?? 'Mais um exemplo'}</h1>
        <Link href="/">Voltar</Link>
      </header>
      <main className={styles.main}>{props.children}</main>
    </div>
  )
}
