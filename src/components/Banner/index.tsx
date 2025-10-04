"use client";

import { useCallback } from "react";

export default function Banner() {
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
    <section className="relative w-full h-screen min-h-screen flex justify-center gap-[15%] items-center overflow-hidden">
      {/* Imagem de fundo */}
      <img
        src="/banner-bg.jpg"
        className="absolute bottom-0 left-0 w-full h-full z-0"
        alt=""

      />
        <div className="w-1/2 h-screen flex flex-col sm:flex-row justify-end z-10 gap-10 items-center">
          {/* Imagem principal */}
          <img
                src="/banner.png"
                alt="FAIP"
                className="h-4/5"
              />
        </div>

        <div className="w-1/2 flex flex-col sm:flex-row max-w-7xl z-10 gap-100">
          {/* Conteúdo à direita */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/vest-faip.png"
              alt="FAIP"
              className="w-full max-w-[400px] mb-6"
            />

            {/* Texto Responsivo */}
            <div className="w-full max-w-3xl font-bold flex flex-col justify-center items-center text-center text-white mt-6">
              <span className="text-[70px] sm:text-[50px] md:text-[68px] lg:text-[60px] xl:text-[75px] leading-[1.1]">
                Cursos 100%
              </span>
              <span className="text-[78px] sm:text-[58px] md:text-[78px] lg:text-[96px] xl:text-[85px] leading-[1.1]">
                Presenciais
              </span>
              <span className="text-[42px] sm:text-[31px] md:text-[42px] lg:text-[52px] xl:text-[46px] leading-[1.1] mt-2">
                Desde o 1° Semestre!
              </span>
            </div>

            {/* Botão */}
            <a href="#form" onClick={handleClick} className="mt-8 w-full flex justify-center">
              <button className="bg-[#003000] border-1 border-[#3AEE0D] text-white cursor-pointer rounded-[12px] h-12 w-full max-w-[500px] px-6 font-semibold shadow-lg shadow-green-500/40 backdrop-blur-lg transition-all duration-300 hover:bg-[#01832A] hover:text-white transform hover:-translate-y-1">
                QUERO MINHA BOLSA!
              </button>
            </a>
          </div>
        </div>
    </section>
  );
}
