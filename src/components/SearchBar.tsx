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
        <input
            type="text"
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            placeholder="Search"
            value={search}
            onChange={handleSearch}
        />
    )
}
