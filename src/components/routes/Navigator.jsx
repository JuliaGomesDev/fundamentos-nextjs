import Link from 'next/link'
import styles from './Navigator.module.css'

export default function Navigator(props) {
  return (
    <Link href={props.destino}>
      <div
        className={styles.navigator}
        style={{ backgroundColor: props.color ?? 'dodgerblue' }}
      >
        {props.titulo}
      </div>
    </Link>
  )
}
