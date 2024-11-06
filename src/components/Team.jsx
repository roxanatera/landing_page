import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import member1 from '../assets/member1.webp';
import member2 from '../assets/member2.avif';
import member3 from '../assets/member3.avif';

const Team = () => (
    <section id="team" className="p-10 bg-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">Nuestro equipo</h2>
        
        {/* Ajuste de columnas en pantallas grandes y una columna en pantallas pequeñas */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Miembro 1 */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <img src={member1} alt="Miembro 1" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover transform hover:scale-105 transition duration-300" />
                <h3 className="text-lg font-semibold mb-2">Juliet Arten</h3>
                <p className="text-gray-600 mb-4">Rol en la agencia - Especialista en marketing digital y redes sociales.</p>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="text-blue-500 hover:text-blue-700"><FaLinkedin size={20} /></a>
                    <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter size={20} /></a>
                    <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram size={20} /></a>
                </div>
            </div>

            {/* Miembro 2 */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <img src={member2} alt="Miembro 2" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover transform hover:scale-105 transition duration-300" />
                <h3 className="text-lg font-semibold mb-2">Joao Gil</h3>
                <p className="text-gray-600 mb-4">Rol en la agencia - Estratega de contenido y especialista en SEO.</p>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="text-blue-500 hover:text-blue-700"><FaLinkedin size={20} /></a>
                    <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter size={20} /></a>
                    <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram size={20} /></a>
                </div>
            </div>

            {/* Miembro 3 */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <img src={member3} alt="Miembro 3" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover transform hover:scale-105 transition duration-300" />
                <h3 className="text-lg font-semibold mb-2">Patrick Gech</h3>
                <p className="text-gray-600 mb-4">Rol en la agencia - Diseñador gráfico y experto en branding.</p>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="text-blue-500 hover:text-blue-700"><FaLinkedin size={20} /></a>
                    <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter size={20} /></a>
                    <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram size={20} /></a>
                </div>
            </div>
        </div>
    </section>
);

export default Team;
