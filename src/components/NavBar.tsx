import Image from 'next/image'
import logo from "/public/images/logo.png";

export const NavBar = () => {

    return (
        <nav >
            <div className="flex items-center justify-between px-5 py-5">
                <a href="/" className="flex items-center">
                    <Image src={logo} alt="Logo" />
                </a>
            </div>
        </nav>
    )
}
