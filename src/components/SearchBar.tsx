import { useDebouncedValue } from "@/hooks";
import { Filmografia } from "@/interfaces/Filmografia"
import { FC, useEffect, useState } from "react"


interface Props {
    onDebounce: (value: string) => void;
}

export const SearchBar: FC<Props> = ({ onDebounce }) => {

    const [search, setSearch] = useState<string>('');

    const debouncedValue = useDebouncedValue(search, 500);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }
    useEffect(() => {
        onDebounce(debouncedValue);
    }, [debouncedValue])

    return (
        <div className="mt-3 mb-3 px-5">
            <div className="relative shadow-md w-6/12 rounded-lg ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-orange-80 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search"
                    className="
                        w-full
                        p-2 
                        pl-10 
                        text-bg 
                        bg-gray-100
                        text-gray-900 
                        rounded-lg 
                        focus:outline-none"
                    placeholder="Buscar película..." required value={search}
                    onChange={handleChange} />
            </div>
        </div >

    )
}
