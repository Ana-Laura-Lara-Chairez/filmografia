import { Filmografia } from "@/interfaces/Filmografia"
import { FC, useEffect, useState } from "react"
import Select from "@/components/Select";


interface Props {
    setTerms: (terms: {
        country: string;
        year: number;
    }) => void;
    terms: {
        country: string;
        year: number;
    };
}

export const SideBar: FC<Props> = ({ setTerms, terms }) => {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTerms({ ...terms, [e.target.name]: e.target.value });
    }
    return (
        <div className="grid justify-center bg-orange-80">
            <div className="py-3">

                <label className="text-white px-3">
                    País
                </label>

                <select
                    name="country"
                    value={terms.country}
                    onChange={handleChange}
                    className="text-black bg-white focus:outline-none font-medium rounded-lg text-sm py-2 text-center inline-flex items-center">
                    <option value="">Todos</option>
                    <option value="Alemania">Alemania</option>
                    <option value="Colombia">Colombia</option>
                    <option value="España">España</option>
                    <option value="Estados Unido">Estados Unidos</option>
                    <option value="Francia">Francia</option>
                    <option value="India">India</option>
                    <option value="Italia">Italia</option>
                    <option value="México">México</option>
                    <option value="Reino Unido">Reino Unido</option>
                    <option value="Rumania">Rumania</option>
                    <option value="Suecia">Suecia</option>
                    <option value="Suiza">Suiza</option>
                </select>


                <label className="text-white px-3">
                    Año
                </label>

                <select
                    name="year"
                    value={terms.year}
                    onChange={handleChange}
                    className="text-black bg-white focus:outline-none font-medium rounded-lg text-sm py-2 text-center inline-flex items-center">
                    <option value={''}>Todos</option>
                    <option value={1950}>1950</option>
                    <option value={1960}>1960</option>
                    <option value={1970}>1970</option>
                    <option value={1980}>1980</option>
                    <option value={1990}>1990</option>
                    <option value={2000}>2000</option>
                    <option value={2010}>2010</option>
                    <option value={2020}>2020</option>
                </select>
            </div>
           <Select/>
        </div >

    )
}
