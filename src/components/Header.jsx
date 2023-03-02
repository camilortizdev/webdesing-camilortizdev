import React, {useState} from "react";
// icons
import { RiCheckboxBlankCircleFill, RiMenu3Fill, RiCloseLine } from "react-icons/ri";


const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center  h-16">
                <div className="float-right text-white text-2xl">
                    <h1>Camilo Ortiz</h1>
                </div>
                <div className="float-left items-center justify-center flex-1">
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                    <a
                        href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Home
                    </a>
    
                    <a
                        href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        About
                    </a>
    
                    <a
                        href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Services
                    </a>
    
                    <a
                        href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Contact
                    </a>
                    </div>
                </div>
                </div>            
            </div>
        </div>
      </nav>
    );
    
};

export default Header;