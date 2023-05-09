import { Dispatch, FC, SetStateAction } from "react"
import { ChipList } from "./ChipList";
import React from "react";
import MultiSelect from "./MultiSelect";

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

const options2 = [
    { label: "Estados Unidos", key: 1950 },
    { label: "México", key: 1960 },
]

export const SideBar: FC<Props> = ({ years, setYears }) => {

    return (
        <div className="
        sm: w-[90%]
        m-5
        md:w-[15%] 
        md:h-[35rem] 
        justify-center 
        items-center 
        shadow-xl 
        p-6
        ml-3
        rounded-xl
        bg-white
        md:sticky top-20 z-50
       ">
            <p className="sm:text-xl md:text-2xl font-bold text-black mt-2 mb-3">Filtros</p>

            <ChipList
                title="Año"
                options={options}
                setYears={setYears}
                years={years}
            />
            <ChipList
                title="Pais"
                options={options2}
                setYears={setYears}
                years={years}
            />

            {/* <p className="mt-5">País</p>
        
            <MultiSelect /> */}
        </div>
    
    )
}