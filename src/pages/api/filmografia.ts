import { Filmografia } from '@/interfaces/Filmografia'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const API_URL = 'https://api.dgomx.com/filmografias'
const API_KEY = '34413e5e-019e-46dc-afe3-ef6673ff905b'

type FilmografiaResponse = {
  success: boolean
  data: Filmografia[]
}

export const api = {
  all: async (): Promise<FilmografiaResponse> => {
    const res = await fetch(`${API_URL}/filmografias/grid/?apikey=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    return data
  },
  filmografia: async (uid: string): Promise<FilmografiaResponse> => {
    const res = await fetch(
      `${API_URL}/filmografias/load/?apikey=${API_KEY}&uid=${uid}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const data = await res.json()
    return data
  },
}
