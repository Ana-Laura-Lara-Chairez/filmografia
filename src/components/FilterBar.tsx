import { Filmografia } from "@/interfaces/Filmografia"
import { FC, useEffect, useState } from "react"


interface Props {
    filmografias: Filmografia[]
    setData: (data: Filmografia[]) => void
}

export const FilterBar: FC<Props> = ({ filmografias, setData }) => {

    const [search, setSearch] = useState<string>('');
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        setData(filmografias.filter((filmografia) => filmografia.titulo.toLowerCase().includes(search.toLowerCase())))
    }, [search])

    return (
        <div className="grid justify-center bg-blue-60">
        <div className="py-3">
        <label className="text-white px-3">
            País
        </label>
        
        
        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-black bg-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center" type="button">México<svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

        <label className="text-white px-3">
            Año
        </label>

        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-black bg-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center" type="button">2019<svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
       
        </div>
        </div>
        
    )
}
