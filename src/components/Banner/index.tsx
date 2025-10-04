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
      {/* Imagem de fundo */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
      <img
        src="/banner-bg.webp"
        className="w-full h-full absolute bottom-0 left-0 z-0"
        alt=""
      />
      </div>
        <div className=" w-7/8 xl:w-1/2 xl:h-screen flex flex-col sm:flex-row justify-center xl:justify-end z-10 gap-10 items-center">
          {/* Imagem principal */}
          <img
                src="/banner.png"
                alt="FAIP"
                className="h-4/5"
              />
        </div>

        <div className="w-7/8 xl:w-1/2 flex flex-col justify-center xl:justify-start sm:flex-row max-w-7xl z-10 gap-100">
          {/* Conteúdo à direita */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/vest-faip.png"
              alt="FAIP"
              className="w-full max-w-[32rem] mb-6"
            />

            {/* Texto Responsivo */}
            <div className="w-full max-w-3xl font-bold flex flex-col justify-center  items-center text-center text-white mt-6">
              <span className="text-[clamp(1rem,15.7vw,5.6rem)] leading-[1.1]">
                Cursos 100%
              </span>
              <span className="text-[clamp(2rem,18vw,6.5rem)] leading-[1.1]">
                Presenciais
              </span>
              <span className="text-[clamp(1.5rem,9.8vw,3.53rem)] leading-[1.1] mt-2">
                Desde o 1° Semestre!
              </span>
            </div>

            {/* Botão */}
            <a href="#form" onClick={handleClick} className="mt-8 w-full flex justify-center">
              <button className="bg-[#003000] mb-18 xl:mb-0 border-1 border-[#3AEE0D] text-white cursor-pointer rounded-[12px] h-12 w-full max-w-[500px] px-6 font-semibold shadow-xl shadow-green-500/40 backdrop-blur-xl transition-all duration-300 hover:bg-[#01832A] hover:text-white transform hover:-translate-y-1">
                QUERO MINHA BOLSA!
              </button>
            </a>
          </div>
        </div>
    </section>
  );
}
