import React from 'react'
import user1 from '../assets/user1.jpg'
import user2 from '../assets/user2.jpg'
import user3 from '../assets/user3.jpg'

const Testimonials = () => (
    <section id="testimonials" className="p-10 bg-gray-100 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">Testimoniales</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Testimonio 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <img src={user1} alt="Cliente 1" className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-lg font-semibold mb-2">Carlos García</h3>
                <p className="text-sm text-gray-600 mb-4">"Excelente servicio. La agencia transformó completamente nuestra marca y aumentó nuestro alcance en redes sociales."</p>
                <span className="text-yellow-500">★★★★★</span>
            </div>

            {/* Testimonio 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <img src={user2} alt="Cliente 2" className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-lg font-semibold mb-2">Ana Pérez</h3>
                <p className="text-sm text-gray-600 mb-4">"Un equipo profesional y dedicado. Gracias a sus estrategias hemos duplicado nuestro engagement."</p>
                <span className="text-yellow-500">★★★★★</span>
            </div>

            {/* Testimonio 3 */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <img src={user3} alt="Cliente 3" className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-lg font-semibold mb-2">Luis Rodríguez</h3>
                <p className="text-sm text-gray-600 mb-4">"Altamente recomendados. Nos ayudaron a crecer de manera constante y profesional."</p>
                <span className="text-yellow-500">★★★★★</span>
            </div>
        </div>
    </section>
);

export default Testimonials;
