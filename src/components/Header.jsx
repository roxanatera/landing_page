import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.webp';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="p-4 bg-white shadow-md fixed top-0 w-full z-20">
            <nav className="container mx-auto flex justify-between items-center px-4">
                
               
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Logo de la Agencia" className="w-8 h-8 md:w-10 md:h-10" />
                    <h1 className="text-lg md:text-2xl font-bold text-gray-900">Agencia de Marketing</h1>
                </div>

                {/* Botón de Menú para Pantallas Pequeñas */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-gray-700 md:hidden focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>

                {/* Enlaces de Navegación */}
                <ul
                    ref={menuRef}
                    className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0 ${
                        isMenuOpen ? 'flex' : 'hidden'
                    } md:flex`}
                >
                    <li><a href="#services" className="text-gray-700 hover:text-blue-500">Servicios</a></li>
                    <li><a href="#portfolio" className="text-gray-700 hover:text-blue-500">Portafolio</a></li>
                    <li><a href="#team" className="text-gray-700 hover:text-blue-500">Equipo</a></li>
                    <li><a href="#contact" className="text-gray-700 hover:text-blue-500">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
