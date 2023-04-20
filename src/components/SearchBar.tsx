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
        <div className="grid justify-center bg-yellow-80">
            <div className="py-3">
                <input
                    type="text"
                    className="py-2 h-8 px-10 border-2 border-gray-50 rounded-lg text-bg focus:outline-none"
                    placeholder="Buscar película"
                    value={search}
                    onChange={handleChange}
                />


            </div>
        </div>

    )
}
