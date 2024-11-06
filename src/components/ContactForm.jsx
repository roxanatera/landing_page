import React from 'react';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

const ContactForm = () => (
    <section id="contact" className="p-10 bg-gradient-to-r from-blue-800 to-blue-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
        <p className="max-w-lg mx-auto mb-8 text-gray-300">
            ¿Tienes alguna pregunta o proyecto en mente? ¡Nos encantaría escucharte!
        </p>
        
        <form className="max-w-md mx-auto space-y-4">
            {/* Campo de Nombre */}
            <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full p-3 pl-10 rounded-md bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
            </div>
            
            {/* Campo de Correo Electrónico */}
            <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="w-full p-3 pl-10 rounded-md bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
            </div>
            
           
            <div className="relative">
                <FaCommentDots className="absolute left-3 top-4 text-gray-400" />
                <textarea
                    placeholder="Mensaje"
                    className="w-full p-3 pl-10 rounded-md bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    rows="4"
                ></textarea>
            </div>
            
           
            <button
                type="submit"
                className="w-full px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition duration-300 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
                Enviar
            </button>
        </form>
    </section>
);

export default ContactForm;
