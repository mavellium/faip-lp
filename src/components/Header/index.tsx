"use client";

import Image from "next/image";
import { useCallback } from "react";

export default function Header() {
  // Função scroll suave
  const lgoothScrollTo = useCallback((targetY: number, duration = 600) => {
    const startY = window.scrollY || window.pageYOffset;
    const distanceY = targetY - startY;
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;

      const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const nextScrollY = easeInOutQuad(timeElapsed, startY, distanceY, duration);
      window.scrollTo(0, nextScrollY);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }, []);

  // Handler para clique no botão
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("section-2-form");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY;
     lgoothScrollTo(top, 700);
    }
  };

  return (
    <section className="relative w-full h-screen flex flex-col justify-start items-start overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-10 animate-zoom-slow"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay degradê vertical */}
      <div
        className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none degrade"         style={{
          background:
            "linear-gradient(to right,rgba(0,104,0,0.7), rgba(0,0,0,0))",
        }}
      ></div>

      {/* Logos e conteúdo */}
      <div className="flex gap-18 md:gap-7 w-full md:w-auto flex-col h-screen relative z-30 p-2 pt-6 pb-6 md:pl-20">
        <div className="flex gap-8 lg:gap-10 md:justify-start justify-center">
        <Image
          src="/faip-logo.png"
          alt="Logo FAIP Marília"
          width={102}
          height={50}
          priority
          className="w-[25vw] sm:w-[20vw] md:w-[10vw] lg:w-[7.2vw] h-auto"
        />

        <Image
          src="/unigrupofaef-logo.svg"
          alt="Logo FAIP Marília"
          width={200}
          height={50}
          priority
          className="w-[40vw] md:w-[20vw] lg:w-[15.5vw] h-auto"
        />
        </div>

        {/* Texto e botão */}
        <div className="flex flex-col items-center lg:items-start md:justify-center h-full text-center lg:text-start lg:w-[26vw]">
          <h1 className="text-[clamp(1.55rem,5.6vw,20rem)] md:text-[clamp(1.43rem,2.13vw,20rem)] font-bold max-w-full lg:max-w-[60em] text-white drop-shadow-lg">
            <span className="text-[clamp(2.21rem,8vw,4em)] md:text-[clamp(2.025rem,3vw,4em)] font-bold">Faça sua matrícula</span>
            <br></br>
            e garanta bolsa de até
          </h1>

          <span className="flex items-baseline text-[clamp(10rem,46vw,20rem)] md:text-[clamp(10rem,15vw,20rem)] w-full justify-center font-bold mt-2 leading-none text-white drop-shadow-lg h-[clamp(15vh,40vw,50vh)] sm:h-[30vh] md:h-[18vh] lg:h-[18vh] xl:h-[25vh]">
            60
            <span className="text-[56px] sm:text-[64px] lg:text-[80px] md:text-[50px] ml-2">%</span>
          </span>

          <h2 className="text-[clamp(1.09rem,3.95vw,20rem)] md:text-[clamp(0.992rem,1.48vw,20rem)] font-bold max-w-full lg:max-w-lg mb-4 text-white drop-shadow-lg">
            <span className="text-[clamp(1.55rem,5.6vw,20rem)] md:text-[clamp(1.41rem,2.1vw,20rem)]">e comece o ano garantindo </span>
            <br></br>
            seu sonho de ter o seu diploma!
          </h2>

          <h3 className="text-[clamp(0.81rem,2.94vw,20rem)] md:text-[clamp(0.736rem,1.1vw,20rem)] md:text-[clamp(0.736rem,1.1vw,20rem)] mb-6 text-white drop-shadow-lg">
            Cursos 100% presenciais desde o 1° Semestre!
          </h3>

          {/* Link com handler de scroll suave */}
          <a href="#form" onClick={handleClick}>
            <button className="bg-white border-2 border-[#045C3A] text-[clamp(1rem,3.7vw,20rem)] md:text-[clamp(0.85rem,1.2vw,20rem)] text-[#045C3A] cursor-pointer rounded-[12px] h-12 w-full lg:w-[25vw] px-6 font-semibold shadow-lg shadow-green-500/40 backdrop-blur transition-all duration-300 hover:bg-[#045C3A] hover:text-white transform hover:-translate-y-1">
              QUERO MINHA BOLSA AGORA
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
