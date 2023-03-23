import { Filmografia } from '@/interfaces/Filmografia'
import { FilmografiaView } from '@/interfaces/FilmografiaView'
import { GetServerSideProps, GetStaticProps } from 'next'
import { api } from './api/filmografia'

export default function ViewFilmografia({
  filmografia,
}: {
  filmografia: FilmografiaView
}) {
  return (
    <div className="bg-slate-300">
      <h2>{filmografia.title}</h2>
      <p>{filmografia.sipnopsis}</p>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.uid
  console.log(id)
  const { data } = await api.filmografia(id as string)
  console.log(data)
  return {
    props: {
      filmografia: data,
    },
  }
}
