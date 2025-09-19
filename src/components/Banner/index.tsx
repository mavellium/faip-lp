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
    <section className="relative min-h-[50vh] min-w-[40vh] sm:min-h-[80vh] md:min-h-[80vh] lg:min-h-screen flex justify-center items-center text-center overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <a href="#form" onClick={handleClick}>
          <img
            src="/banner.jpeg"
            alt="FAIP"
            className="w-full h-full object-fill xl:object-cover cursor-pointer"
            srcSet="/banner-mb.png 800w, /banner.jpeg 1200w"
            sizes="(max-width: 600px) 100vw, 1200px"
          />
        </a>
      </div>
    </section>
  );
}
