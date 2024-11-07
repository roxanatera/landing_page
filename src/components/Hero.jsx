import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Autoplay, Pagination } from "swiper/modules"
import backgroundImage1 from "../assets/hero-background1.avif"
import backgroundImage2 from "../assets/hero-background2.avif"
import backgroundImage3 from "../assets/hero-background3.avif"

const Hero = () => (
  <section
    id="hero"
    className="relative h-screen md:h-[70vh] text-center text-white overflow-hidden"
  >
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }} 
      pagination={{ clickable: true }}
      speed={500} 
      className="absolute inset-0 w-full h-full"
    >
      <SwiperSlide>
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage1})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-500 opacity-50"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage2})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-500 opacity-50"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage3})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-500 opacity-50"></div>
        </div>
      </SwiperSlide>
    </Swiper>

    <div className="absolute inset-0 flex items-center justify-center flex-col z-10 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
        Potencia tu marca
      </h2>
      <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200">
        Transformamos tu presencia digital para que impactes en el mercado.
      </p>
      <button className="px-6 sm:px-8 py-2 sm:py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition duration-300 shadow-lg mt-4 md:mt-8">
        Conócenos
      </button>
    </div>
  </section>
);

export default Hero;
