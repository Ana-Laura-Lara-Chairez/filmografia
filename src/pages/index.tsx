import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SearchBar } from '@/components'
import { api } from './api/filmografia'
import { Filmografia } from '@/interfaces/Filmografia'

export default function Home({
  filmografias,
}: {
  filmografias: Filmografia[]
}) {

  const [data, setData] = useState<Filmografia[]>(filmografias);

  return (
    <div className="p-12">
      <SearchBar
        filmografias={filmografias}
        setData={setData}
      />
      <div className="grid grid-cols-4 gap-2 bg-amarillo-500">
        {data.map((filmografia) => (
          <Link key={filmografia.uid} href={filmografia.uid}>
            <div className="
              bg-white
              rounded-lg
              shadow-lg
              p-4
              flex
              flex-col
              justify-between
              hover:shadow-2xl
              transition
              duration-500
              ease-in-out
              transform
              hover:-translate-y-1
              hover:scale-110
            ">
              <h2>{filmografia.titulo}</h2>
              <p>{filmografia.productora}</p>

              <Image
                src={filmografia.cartel_url
                  ? filmografia.cartel_url
                  : '/images/placeholder.png'}
                alt={filmografia.titulo}
                width={200}
                height={300}
              />
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
