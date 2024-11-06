import React, { useState } from 'react';
import logo from '../assets/logo.webp';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="p-4 bg-white shadow-md fixed top-0 w-full z-10">
            <nav className="container mx-auto flex justify-between items-center px-4">
                
                {/* Logo y Nombre de la Agencia */}
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Logo de la Agencia" className="w-8 h-8 md:w-10 md:h-10" />
                    <h1 className="text-lg md:text-2xl font-bold text-gray-900">Agencia de Marketing</h1>
                </div>

                {/* Botón de Menú para Pantallas Medianas */}
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

                {/* Enlaces de Navegación con Efecto Hover */}
                <ul
                    className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0 ${
                        isMenuOpen ? 'flex' : 'hidden'
                    } md:flex`}
                >
                    <li>
                        <a
                            href="#services"
                            className="relative text-gray-700 hover:text-blue-500 transition-colors duration-300"
                        >
                            Servicios
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 transform hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#portfolio"
                            className="relative text-gray-700 hover:text-blue-500 transition-colors duration-300"
                        >
                            Portafolio
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 transform hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#team"
                            className="relative text-gray-700 hover:text-blue-500 transition-colors duration-300"
                        >
                            Equipo
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 transform hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="relative text-gray-700 hover:text-blue-500 transition-colors duration-300"
                        >
                            Contacto
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 transform hover:w-full"></span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
