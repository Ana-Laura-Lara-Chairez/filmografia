import { Filmografia } from '@/interfaces/Filmografia'
import { GetServerSideProps } from 'next'
import { api } from './api/filmografia'

export default function ViewFilmografia({
  filmografia,
}: {
  filmografia: Filmografia
}) {

  if (filmografia?.titulo === "") {
    var titulo = filmografia?.title
  } else {
    var titulo = filmografia.titulo
  }

  if (filmografia?.title === "") {
    var title = filmografia?.titulo
  } else {
    var title = filmografia.title
  }

  return (
    <div>
      <nav className="bg-white shadow-lg shadow-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <a href="/" className="flex items-center">
                <img src="/images/logo.png" className="h-11 ml-10" alt="Logo" />
            </a>
        </div>
    </nav> 
    <div className="container mt-10">
      <div className="bg-white rounded-lg drop-shadow-xl">
        <div className="flex sm: flex-col md:flex-row">
          <div className="w-1/2 items-center">
            <img className="p-3 ml-12 mt-5 w-4/5" src={filmografia?.cartel} alt={filmografia?.titulo}/>
          </div>

          <div className="w-2/2 p-5">
            <header className="w-full">
              <p> <span className="font-xl font-bold mb-3 mt-10">Pais de origen: </span>{`${filmografia?.pais}`}  </p>
              <h1 className="text-4xl font-semibold mb-3 mt-5 text-blue-80">{titulo}</h1>
              <p> <span className="font-xl font-bold mb-3 mt-10">Nombre original: </span>{title}</p>
              <button className="text-white bg-orange-80 px-2 py-1 mt-2 rounded-lg mb-5">{filmografia?.year}</button>

              <p> <span className="font-xl font-bold">Protagonistas: </span>{filmografia?.protagonistas}</p>

              <div className="grid grid-cols-2 gap-1 mt-5 mb-5">
                <p> <span className="font-xl font-bold">Dirección: </span>{filmografia?.direccion} </p>
                <p> <span className="font-xl font-bold">Duración: </span>{filmografia?.duracion} </p>
                <p> <span className="font-xl font-bold">Guion: </span>{filmografia?.guion} </p>
                <p> <span className="font-xl font-bold">Filmada en: </span>{filmografia?.filmada_en} </p>
                <p> <span className="font-xl font-bold">Fotografía: </span>{filmografia?.fotografia} </p>
                <p> <span className="font-xl font-bold">Música: </span>{filmografia?.musica} </p>
                <p> <span className="font-xl font-bold">Productora: </span>{filmografia?.productora} </p>
              </div>

              <p className="font-xl font-bold">Sinópsis: </p>
              <p className='mt-3 mb-3'>{filmografia?.sipnopsis}.</p>

              <p className="font-xl font-bold">Synopsis: </p>
              <p className='mt-1'> {filmografia?.synopsis}.</p>
            </header>

            <a href="/"><button className="text-white bg-blue-80 px-2 py-1 mt-5 rounded-lg mb-5 justify-end">Volver a inicio</button></a>
          </div>

        </div>
      </div>
    </div>
    </div>
    
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.uid
  const { data } = await api.filmografia(id as string)
  return {
    props: {
      filmografia: data,
    },
  }
}
