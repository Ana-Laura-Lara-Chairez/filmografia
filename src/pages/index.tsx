import { Filmografia } from '@/interfaces/Filmografia'
import Link from 'next/link'
import { api } from './api/filmografia'

export default function Home({
  filmografias,
}: {
  filmografias: Filmografia[]
}) {
  console.log(filmografias)
  return (
    <div className="p-12">
      <div className="grid grid-cols-4 gap-2 bg-amarillo-500">
        {filmografias.map((filmografia) => (
          <Link key={filmografia.uid} href={filmografia.uid}>
            <div className="shadow-md bg-slate-300">
              <h2>{filmografia.titulo}</h2>
              <p>{filmografia.productora}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const { data } = await api.all()
  return {
    props: {
      filmografias: data,
    },
  }
}
