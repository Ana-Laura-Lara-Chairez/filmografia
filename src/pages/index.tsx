import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { api } from './api/filmografia'
import { Filmografia } from '@/interfaces/Filmografia'
import { validateYearRange } from '@/helpers/validateYearRange'
import ScrollToTop from "react-scroll-to-top";
import { SideBar } from '@/components/SideBar'
import { NavBar } from '@/components/NavBar'
import { SearchBar } from '@/components/SearchBar'
import Select from '@/components/Select'


export default function Home({
  filmografias,
}: {
  filmografias: Filmografia[]
}) {

  const [data, setData] = useState<Filmografia[]>(filmografias);

  const [term, setTerm] = useState<string>('');
  const [terms, setTerms] = useState<{
    country: string;
    year: number;
  }>({
    country: '',
    year: undefined || 0,
  });


  useEffect(() => {
    // const { country, year } = terms;
    const { year } = terms;
    const filteredData = filmografias.filter(
      (filmografia) =>
        // (!country || filmografia.pais === country) &&  the api doesn't have the country field
        (!year || validateYearRange(filmografia.year, year)) &&
        (!term || filmografia.titulo.toLowerCase().includes(term.toLowerCase()))
    );
    setData(filteredData);

  }, [term, terms])

  return (
    <div className="bg-blue-60 min-h-screen">
      <NavBar/>
      {/* <Select/> */}
      <SearchBar
        onDebounce={(value: string) => setTerm(value)}
      />
      <SideBar
        terms={terms}
        setTerms={setTerms}
      />

      <div className="grid p-8 justify-center">
        <h1 className="text-4xl text-white">Filmografía de Durango</h1>
      </div>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 p-10">
        {data.map((filmografia) => (
          <Link key={filmografia.uid} href={filmografia.uid}>
            <div className="
              bg-blue-60
              rounded-lg
              shadow-lg
              p-5
              flex
              flex-col 
              justify-between
              hover:shadow-2xl
              transition
              duration-500
              ease-in-out
              transform
              hover:-translate-y-1
              hover:scale-105
            ">
              <Image
                src={filmografia.cartel_url
                  ? filmografia.cartel_url
                  : '/images/placeholder.png'}
                alt={filmografia.titulo}
                width={200}
                height={300}
                className="place-self-center rounded-md"
              />

              <h2 className="place-self-center mt-3 text-white font-semibold text-md text-center">{filmografia.titulo}</h2>
            </div>
          </Link>
          
        ))}
        <div>
      <div style={{ marginTop: "150vh"}} />
      <ScrollToTop smooth color="#ff7b1c" width='40' height='30' />
      </div>
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
