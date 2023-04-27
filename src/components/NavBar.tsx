import { useDebouncedValue } from "@/hooks";
import { Filmografia } from "@/interfaces/Filmografia"
import { FC, useEffect, useState } from "react"
import Image from 'next/image'


export const NavBar = ({  }) => {


    return (
        <nav className="bg-white shadow-lg shadow-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <a href="/" className="flex items-center">
                <img src="/images/logo.png" className="h-11 ml-10" alt="Logo" />
            </a>
        </div>
    </nav>
    )
}
