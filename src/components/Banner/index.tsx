"use client";

import { useCallback } from "react";

export default function Banner() {
  // Função de scroll suave
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

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }, []);

  // Handler do clique no link
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const el = document.getElementById("form");
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        smoothScrollTo(top, 700);
      }
    },
    [smoothScrollTo]
  );

  return (
    <section className="relative w-full h-[125vh] min-h-[125vh] max-h-[125vh] sm:h-[125vh] sm:min-h-[135vh] sm:max-h-[125vh] flex flex-col justify-start items-start overflow-hidden">
      {/* Imagem de fundo */}
      <img
        src="/banner-bg.png"
        className="absolute top-0 left-0 w-full h-full object-cover z-1"
        alt="" />

      <div className="flex flex-col w-full items-center justify-around sm:flex-row">
        {/* Imagem */}
        <div className="flex items-center m-25 z-10">
          <a href="#form" onClick={handleClick}>
            <img
              src="/banner.png"
              alt="FAIP"
              width={550}
              className="cursor-pointer"
              sizes="(max-width: 600px) 200vw, 1200px"
            />
          </a>
        </div>

        <div className="flex items-center flex-col p-5 z-10">
          <img
            src="/vest-faip.png"
            alt="FAIP"
            width={550}
            className="cursor-pointer"
            sizes="(max-width: 600px) 100vw, 1200px"
          />
          <div className="w-[35em] text-base/[110px] font-bold flex flex-col justify-center items-center text-center mt-10">
            <span className="text-[98px]">Cursos 100%</span>
            <span className="text-[108px]">Presenciais</span>
            <span className="text-[58px]">Desde o 1° Semestre!</span>
            </div>
          <a href="#form" onClick={handleClick}>
            <button className="bg-white border-2 border-[#045C3A] text-[#045C3A] cursor-pointer rounded-[12px] h-12 w-[33em] px-6 font-semibold shadow-lg shadow-green-500/40 backdrop-blur lg transition-all duration-300 hover:bg-[#045C3A] hover:text-white transform hover:-translate-y-1">
              QUERO MINHA BOLSA!
            </button>
          </a>
        </div>
      </div>

    </section>
  );
}
