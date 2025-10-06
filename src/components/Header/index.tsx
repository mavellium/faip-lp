"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function Header() {

  const xloothScrollTo = useCallback((targetY: number, duration = 600) => {
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
      xloothScrollTo(top, 700);
    }
  };
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); 
    };

    handleResize(); // Chamada inicial
    window.addEventListener("resize", handleResize); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full h-screen xl:h-[50em] flex flex-col xl:justify-start justify-center items-center xl:items-start overflow-hidden">

  {isMobile ? (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover z-10 animate-zoom-slow"
    >
      <source src="/video-mobile.mp4" type="video/mp4" />
    </video>
  ) : (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover z-10 animate-zoom-slow"
    >
      <source src="/video.mp4" type="video/mp4" />
    </video>
  )}


      <div
        className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none degrade" style={{
          background:
            "linear-gradient(to right,rgba(0,104,0,0.7), rgba(0,0,0,0))",
        }}
      ></div>


      <div className="flex gap-7 md:gap-7 w-9/10 sm:w-3/4 xl:w-1/3 flex-col h-screen relative z-30 p-2 pt-6 pb-6 xl:pl-20" id="secao">
        <div className="flex gap-8 xl:gap-10 xl:justify-start justify-center">
          <Image
            src="/faip-logo.webp"
            alt="Logo da FAIP de Marília/SP"
            width={166}
            height={75}
            priority
            className="w-1/4 h-auto"
            id="logo_1"
          />

          <Image
            src="/unigrupofaef-logo.svg"
            alt="Logo da UnigrupoFAEF de Marília/SP"
            width={1}
            height={1}
            priority
            className="w-1/2 h-auto"
            id="logo_2"
          />
        </div>

        <div className="flex flex-col items-center xl:items-start md:justify-center h-full text-center xl:text-start w-full lg:max-w-[100%] xl:w-[26vw]" id="secao_headline">
          <h1 className="text-[clamp(1.55rem,5.6vw,20rem)] xl:text-[clamp(1.43rem,2.23vw,20rem)] font-bold max-w-full xl:max-w-[60em] text-white drop-shadow-xl " id="h1_2">
            <span className="text-[clamp(2.21rem,8vw,4em)] xl:text-[clamp(2.025rem,2.83vw,4em)] font-bold" id="h1_1">Faça sua matrícula</span>
            <br></br>
            e garanta bolsa de até
          </h1>

          <span className="flex items-baseline text-center text-[clamp(10rem,46vw,30rem)] xl:text-[clamp(10rem,13.60vw,20rem)] w-full justify-center font-bold mt-10 text-white drop-shadow-xl leading-[0.7]  h-fit" id="h3_60">
            60
            <span className="text-[56px] sm:text-[64px] xl:text-[80px] xl:text-[50px] ml-2" id="h3_porcentagem">%</span>
          </span>

          <h2 className="text-[clamp(1.09rem,3.95vw,20rem)] xl:text-[clamp(0.992rem,1.52vw,2.5rem)] font-bold w-full mb-4 text-white drop-shadow-xl" id="h2_2">
            <span className="text-[clamp(1.55rem,5.6vw,20rem)] xl:text-[clamp(1.41rem,1.95vw,3rem)]" id="h2_1">e comece o ano garantindo </span>
            <br></br>
            seu sonho de ter o seu diploma!
          </h2>

          <h3 className="text-[clamp(0.81rem,2.94vw,20rem)] xl:text-[clamp(0.736rem,1.11vw,20rem)] mb-6 text-white drop-shadow-xl" id="h3_3">
            Cursos 100% presenciais desde o 1° Semestre!
          </h3>

          <a href="#form" onClick={handleClick} className="flex items-center justify-center bg-white border-2 border-[#045C3A] text-[clamp(0.95rem,3.7vw,20rem)] md:text-[clamp(0.85rem,3.5vw,20rem)] xl:text-[clamp(0.91rem,0.8vw,1rem)] text-[#045C3A] cursor-pointer rounded-[12px] h-12 md:h-20 xl:h-13 w-[clant(80%, 90%, 100%] sm:w-[90%] xl:w-[22.65vw] px-6 font-semibold shadow-xl shadow-green-500/40 backdrop-blur transition-all duration-300 hover:bg-[#045C3A] hover:text-white transform hover:-translate-y-1" id="button">
            QUERO MINHA BOLSA AGORA
          </a>
        </div>
      </div>
    </section>
  );
}
