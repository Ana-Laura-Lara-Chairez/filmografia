import { useEffect, useState } from 'react'
import { api } from './api/filmografia'
import { Filmografia } from '@/interfaces/Filmografia'
import { validateYearRange } from '@/helpers/validateYearRange'
import { SideBar } from '@/components/SideBar'
import { NavBar } from '@/components/NavBar'
import { SearchBar } from '@/components/SearchBar'
import { MoviesLayout } from '@/layouts/MoviesLayout';
import { Movies } from '@/components/Movies';


export default function Home({
  filmografias,
}: {
  filmografias: Filmografia[]
}) {

  const [data, setData] = useState<Filmografia[]>(filmografias);
  const [years, setYears] = useState<number[]>([])


  useEffect(() => {
    const filteredData = filmografias.filter(
      (filmografia) =>
        // (!country || filmografia.pais === country) &&  the api doesn't have the country field
        (!(years.length >= 1) || validateYearRange(filmografia.year, years))
    );
    setData(filteredData);
  }, [years])

  return (
    <>
      <NavBar />
      {/* <SearchBar
        onDebounce={(value: string) => setTerm(value)}
      /> */}
      {/* <div className="grid p-8 justify-center">
        <h1 className="text-4xl text-white">Filmografía de Durango</h1>
      </div> */}
      <div className="flex sm: flex-col md:flex-row bg-blue-80">
        <SideBar
          years={years}
          setYears={setYears}
        />
        <MoviesLayout>
          <Movies
            data={data}
          />
        </MoviesLayout>
      </div>
    </>
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