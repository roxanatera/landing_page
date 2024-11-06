import React from 'react';
import project1 from '../assets/project1.avif'
import project2 from '../assets/project2.avif'
import project3 from '../assets/project3.avif'

const Portfolio = () => (
    <section id="portfolio" className="p-10 bg-gray-100 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">Portafolio</h2>
        
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
          
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="overflow-hidden rounded-md mb-4">
                    <img src={project1} alt="Campaña de Redes Sociales" className="w-full h-40 object-cover transform hover:scale-105 transition duration-300" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Campaña de Redes Sociales</h3>
                <p className="text-gray-600 mb-4">Campaña de marketing en redes sociales para aumentar la visibilidad del cliente.</p>
            </div>

            
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="overflow-hidden rounded-md mb-4">
                    <img src={project2} alt="Diseño de Marca" className="w-full h-40 object-cover transform hover:scale-105 transition duration-300" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Diseño de Marca</h3>
                <p className="text-gray-600 mb-4">Proyecto de branding que incluye logo, paleta de colores y papelería.</p>
            </div>

            
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="overflow-hidden rounded-md mb-4">
                    <img src={project3} alt="Diseño de Sitio Web" className="w-full h-40 object-cover transform hover:scale-105 transition duration-300" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Diseño de Sitio Web</h3>
                <p className="text-gray-600 mb-4">Desarrollo de un sitio web moderno y responsivo para un cliente.</p>
            </div>
        </div>
    </section>
);

export default Portfolio;
