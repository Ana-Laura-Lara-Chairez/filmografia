import Image from 'next/image'
import logo from "/public/images/logo.png";

export const NavBar = () => {

    return (
        <nav className="bg-white shadow-md shadow-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <a href="/" className="flex items-center">
                <img src="/images/logo.png" className="h-11 ml-10" alt="Logo" />
            </a>
        </div>
    </nav>
    )
}
