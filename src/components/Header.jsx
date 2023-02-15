import React, {useState} from "react";
// icons
import { RiCheckboxBlankCircleFill, RiMenu3Fill, RiCloseLine } from "react-icons/ri";


const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
     <header className="flex items-center justify-between xl:justify-start w-full p-4 h-[10vh] z-50">
        <div className="xl:w-1/6 text-center">
            <a href="#" className="text-2xl font-bold relative px-1 bg-white">
                Camilo
                <span className="text-primary text-5xl">.</span>
                {""} <RiCheckboxBlankCircleFill className="absolute -left-2 -bottom-2 text-primary -z-10" />
            </a>
        </div>
        <nav className={'bg-white fixed w-[80%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"} top-0 xl:static flex-1 flex flex-col xl:flex-row items-center  justify-center gap-10'}>
            <a href="#" className="text-lg font-semibold">Home</a>
            <a href="#" className="text-lg font-semibold">About Us</a>
            <a href="#" className="text-lg font-semibold">Products</a>
            <a href="#" className="text-lg font-semibold">Services</a>
        </nav>
        <button onClick={() => setShowMenu(!showMenu)} className="text-2xl p-2">
            <RiMenu3Fill />
        </button>
    </header>
    )
};

export default Header;