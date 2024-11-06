import React from 'react';
import { FaBullhorn, FaSearch, FaEnvelope, FaPencilAlt, FaChartLine, FaDesktop, FaSignal, FaThumbsUp } from 'react-icons/fa';

const Services = () => (
    <section id="services" className="p-10 bg-gray-100 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
                <FaSignal className="text-blue-500 text-4xl mb-4 mx-auto" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Branding</h3>
                <p className="text-gray-600">Desarrollamos la identidad de tu marca.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
                <FaBullhorn className="text-blue-500 text-4xl mb-4 mx-auto" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Publicidad</h3>
                <p className="text-gray-600">Lleva tus campañas al siguiente nivel.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
                <FaThumbsUp className="text-blue-500 text-4xl mb-4 mx-auto" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Redes Sociales</h3>
                <p className="text-gray-600">Administración y crecimiento en redes.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
                <FaDesktop className="text-blue-500 text-4xl mb-4 mx-auto" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Diseño Web</h3>
                <p className="text-gray-600">Desarrollo de sitios web atractivos y funcionales.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
                <FaSearch className="text-blue-500 text-4xl mb-4 mx-auto" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">SEO</h3>
                <p className="text-gray-600">Mejoramos la visibilidad en motores de búsqueda.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
                <FaEnvelope className="text-blue-500 text-4xl mb-4 mx-auto" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Email Marketing</h3>
                <p className="text-gray-600">Conectamos con tus clientes a través del correo electrónico.</p>
            </div>
            
        </div>
    </section>
);

export default Services;
