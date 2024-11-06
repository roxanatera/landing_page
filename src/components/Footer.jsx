import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => (
    <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto text-center space-y-4">
            <h2 className="text-xl font-semibold">Agencia de Marketing</h2>
            <p className="text-gray-400">© 2024 Todos los derechos reservados.</p>
            
            {/* Redes Sociales */}
            <div className="flex justify-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-blue-500">
                    <FaFacebookF size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                    <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                    <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                    <FaLinkedinIn size={20} />
                </a>
            </div>
                <p className="text-gray-500 text-sm mt-4">
                    Desarrollado por Julia Natera
                </p>
        </div>
    </footer>
);

export default Footer;
