"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function Banner() {
  const [isMobile, setIsMobile] = useState(false);

  // Detecta se é mobile para trocar a imagem de fundo
  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // Scroll suave até o formulário
  const smoothScrollTo = useCallback((targetY: number, duration = 600) => {
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

      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const el = document.getElementById("section-2-form");
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        smoothScrollTo(top, 700);
      }
    },
    [smoothScrollTo]
  );

  return (
    <section className="relative w-full min-h-screen flex justify-center gap-[15%] items-center overflow-hidden flex-col-reverse xl:flex-row pt-18 xl:pt-0">

      {/* 🎨 Fundo responsivo */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src={isMobile ? "/BANNER_BG_MB.avif" : "/BANNER_BG_PC.avif"}
          alt="Imagem de fundo do prédio da FAIP visão de cima"
          fill
          className="lg:w-full lg:h-full bg-no-repeat"
          priority
        />
      </div>

      {/* 📸 Imagem lateral (modelo) */}
      <div className="w-7/8 xl:w-1/2 xl:h-screen flex flex-col sm:flex-row justify-center xl:justify-end z-10 gap-10 items-center">
        <Image
          src="/modelo.webp"
          alt="Aluna da FAIP com seu diploma"
          height={888}
          width={556}
          className="w-auto h-4/5"
          priority
        />
      </div>

      {/* 🧠 Texto e botão */}
      <div className="w-7/8 xl:w-1/2 flex flex-col justify-center xl:justify-start sm:flex-row max-w-7xl z-10 gap-100">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/vest-faip.webp"
            alt="Ícone do vestibular da FAIP"
            height={580}
            width={279}
            className="w-full max-w-[32rem] mb-6"
            priority
          />

          <div className="w-full max-w-3xl font-bold flex flex-col justify-center items-center text-center text-white mt-6">
            <span className="text-[clamp(1rem,15.7vw,5.6rem)] leading-[1.1]" id="titulo-1">
              Cursos 100%
            </span>
            <span className="text-[clamp(2rem,18vw,6.5rem)] leading-[1.1]" id="titulo-2">
              Presenciais
            </span>
            <span className="text-[clamp(1.5rem,9.8vw,3.53rem)] leading-[1.1] mt-2" id="titulo-3">
              Desde o 1° Semestre!
            </span>
          </div>

          <a href="#form" onClick={handleClick} className="mt-8 w-full flex justify-center">
            <button className="bg-[#003000] mb-18 xl:mb-0 border-1 border-[#3AEE0D] text-white cursor-pointer rounded-[12px] h-15 w-full max-w-[500px] px-6 font-semibold shadow-xl shadow-green-500/40 backdrop-blur-xl transition-all duration-300 hover:bg-[#01832A] hover:text-white transform hover:-translate-y-1 text-[1.3rem] lg:text-[1.8rem]">
              QUERO MINHA BOLSA!
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
