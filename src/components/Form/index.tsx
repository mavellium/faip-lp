"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Form() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 1280);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  useEffect(() => {
    const formContainer = document.getElementById("section-2-form");
    if (!formContainer) return;

    let scriptLoaded = false;

    // Função que injeta o script
    const loadKommoForm = () => {
      if (scriptLoaded) return;
      scriptLoaded = true;

      const scriptInline = document.createElement("script");
      scriptInline.defer = true;
      scriptInline.textContent = `
        !function(a,m,o,c,r,m){
          a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},
          a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},
          a[o+r]({id:"1555567",hash:"499f2d47ec2957e6d203463ce10956e2",locale:"pt"}),
          a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}
        }(window,0,"amo_forms_","params","load","loaded");
      `;

      const scriptSrc = document.createElement("script");
      scriptSrc.async = true;
      scriptSrc.src =
        "https://forms.kommo.com/forms/assets/js/amoforms.js?1758651212";

      scriptSrc.onload = () => {
        const loader = document.getElementById("form-loader");
        if (loader) loader.style.display = "none";
      };

      formContainer.appendChild(scriptInline);
      formContainer.appendChild(scriptSrc);
    };

    // 1️⃣ Pré-carrega o script 1 segundo após o primeiro paint (sem bloquear)
    const preload = setTimeout(loadKommoForm, 1000);

    // 2️⃣ Fallback: se o usuário rolar rápido e o script ainda não carregou
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadKommoForm();
          observer.unobserve(formContainer);
        }
      });
    });

    observer.observe(formContainer);

    // Limpeza
    return () => {
      clearTimeout(preload);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="form"
      className="relative w-full min-h-screen flex justify-between items-center gap-[15%] text-center overflow-hidden p-4 sm:p-10 flex-col xl:flex-row"
    >
      {/* Imagem de fundo responsiva */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src={isMobile ? "/FORM_BG_MB.avif" : "/FORM_BG_PC.avif"}
          alt="Imagem de fundo da página mostrando o prédio da FAIP"
          fill
          className="lg:w-full lg:h-full bg-no-repeat"
          priority
        />
      </div>

      {/* Texto e selo */}
      <div className="w-full xl:w-1/2 xl:h-screen z-10 flex justify-center xl:justify-end items-center" id="section-2-text">
        <div className="font-bold text-white flex flex-col items-center w-auto">
          <h1 className="text-[clamp(1.4rem,9vw,3.8rem)] xl:text-[clamp(2.025rem,2.83vw,4em)]">
            100% PRESENCIAL
          </h1>
          <h1 className="text-[clamp(2.1rem,14vw,6rem)] xl:text-[clamp(2.025rem,4vw,4em)]">
            100% FAIP
          </h1>
          <h1 className="text-[clamp(1.4rem,9.8vw,3.8rem)] xl:text-[clamp(2.025rem,2vw,4em)]">
            100% VOCÊ!
          </h1>

          <Image
            src="/selo-mec.webp"
            alt="Selo de 5 estrelas do MEC (Ministério da Educação)"
            className="mt-4 mb-20 xl:mb-0 w-full xl:w-4/5"
            height={384}
            width={319}
          />
        </div>
      </div>

      <div
        id="section-2-form"
        className="flex justify-center xl:justify-start z-10 w-full xl:w-1/2 xl:pl-15 min-h-[400px] items-center"
      >
        <div
          id="form-loader"
          className="absolute text-white text-lg font-semibold animate-pulse"
        >
          Carregando formulário...
        </div>
        <noscript>Ative o JavaScript para visualizar o formulário.</noscript>
      </div>
    </section>
  );
}
