import { Filmografia } from "@/interfaces/Filmografia"
import { FC, useEffect, useState } from "react"


interface Props {
    filmografias: Filmografia[]
    setData: (data: Filmografia[]) => void
}

export const SearchBar: FC<Props> = ({ filmografias, setData }) => {

    const [search, setSearch] = useState<string>('');
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        setData(filmografias.filter((filmografia) => filmografia.titulo.toLowerCase().includes(search.toLowerCase())))
    }, [search])

    return (
        <div className="grid justify-center bg-yellow-80">
        <div className="py-3">
        <input
            type="text"
            className="py-2 h-8 px-10 border-2 border-gray-50 rounded-lg text-bg focus:outline-none"
            placeholder="Buscar película" 
            value={search}
            onChange={handleSearch}
        />
        

        </div>
        </div>
        
    )
}
