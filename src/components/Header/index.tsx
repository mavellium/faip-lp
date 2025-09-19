"use client";

import Image from "next/image";

export default function Header() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-start items-start overflow-hidden p-6 sm:p-10 lg:pl-20">
      {/* Vídeo de fundo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Logos */}
      <div className="flex gap-8 sm:gap-12 w-auto flex-col relative z-10">
        <div className="flex gap-10 mb-10">
          <Image
            src="/faip-logo.png"
            alt="Logo FAIP Marília"
            width={132}
            height={50}
            priority
          />
          <Image
            src="/unigrupofaef-logo.svg"
            alt="Logo FAIP Marília"
            width={250}
            height={50}
            priority
          />
        </div>

        {/* Texto e botão */}
        <div className="flex flex-col items-start sm:items-start mt-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold max-w-full sm:max-w-md text-white drop-shadow-lg">
            Faça sua matrícula e garanta bolsa de até
          </h1>

          <h1 className="flex items-baseline text-[150px] sm:text-[200px] md:text-[250px] font-bold mt-2 leading-none text-white drop-shadow-lg">
            60
            <span className="text-[40px] sm:text-[50px] md:text-[50px] ml-2">%</span>
          </h1>

          <h2 className="text-base sm:text-lg md:text-xl font-bold max-w-full sm:max-w-lg mb-4 text-white drop-shadow-lg">
            e comece o ano garantindo seu sonho de ter o seu diploma!
          </h2>

          <h3 className="text-sm sm:text-base md:text-base mb-6 text-white drop-shadow-lg">
            Cursos 100% presenciais desde o 1° Semestre!
          </h3>

          <button className="bg-white border-2 border-[#045C3A] text-[#045C3A] cursor-pointer rounded-full h-12 px-6 font-semibold shadow-lg shadow-green-500/40 backdrop-blur-sm transition-all duration-300 hover:bg-[#045C3A] hover:text-white transform hover:-translate-y-1">
            FAZER MINHA MATRÍCULA AGORA
          </button>
        </div>
      </div>
    </section>
  );
}
