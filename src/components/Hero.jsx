import React from "react";
import backgroundImage from "../assets/hero-background.avif";

const Hero = () => (
  <section
    id="hero"
    className="relative text-center h-screen md:h-[70vh] px-4 bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    {/* Overlay para oscurecer la imagen y mejorar legibilidad */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-500 opacity-80"></div>

    {/* Contenido del Hero */}
    <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center justify-center h-full text-white">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
        Potencia tu marca
      </h2>
      <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200 px-4">
        Transformamos tu presencia digital para que impactes en el mercado.
      </p>
      <button className="px-6 sm:px-8 py-2 sm:py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition duration-300 shadow-lg">
        Conócenos
      </button>
    </div>
  </section>
);

export default Hero;
