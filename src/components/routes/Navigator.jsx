import Link from 'next/link'

export default function Navigator(props) {
  return (
    <Link href={props.destino}>
      <div>{props.titulo}</div>
    </Link>
  )
}
