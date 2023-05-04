import { Dispatch, FC, SetStateAction } from "react"
import { ChipList } from "./ChipList";

interface Props {
    years: number[];
    setYears: Dispatch<SetStateAction<number[]>>
}

const options = [
    { label: "1950", key: 1950 },
    { label: "1960", key: 1960 },
    { label: "1970", key: 1970 },
    { label: "1980", key: 1980 },
    { label: "1990", key: 1990 },
    { label: "2000", key: 2000 },
    { label: "2010", key: 2010 },
    { label: "2020", key: 2020 },
]

export const SideBar: FC<Props> = ({ years, setYears }) => {

    return (
        <div className="
        sm: w-[90%]
        h-full
        m-5
        md:w-[15%] 
        md:h-[45rem] 
        justify-center 
        items-center 
        shadow-xl 
        p-6
        ml-3
        rounded-xl
        bg-white
       ">
            <p className="sm:text-xl md:text-2xl font-bold text-black mt-2 mb-3">Filtros</p>

            <ChipList
                title="Año"
                options={options}
                setYears={setYears}
                years={years}
            />
            {/* <ChipList
                title="Pais"
                options={options}
                setYears={setYears}
                years={years}
            /> */}

        </div >

    )
}


