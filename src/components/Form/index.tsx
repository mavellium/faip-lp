"use client";

import Image from 'next/image';
import { useEffect } from 'react'

export default function Form() {
  useEffect(() => {
    const formContainer = document.getElementById('section-2-form')
    if (!formContainer) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const scriptInline = document.createElement('script')
          scriptInline.defer = true
          scriptInline.textContent = `
            !function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1555567",hash:"499f2d47ec2957e6d203463ce10956e2",locale:"pt"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");
          `
          const scriptSrc = document.createElement('script')
          scriptSrc.async = true
          scriptSrc.charset = 'utf-8'
          scriptSrc.src = 'https://forms.kommo.com/forms/assets/js/amoforms.js?1758651212'
          formContainer.appendChild(scriptInline)
          formContainer.appendChild(scriptSrc)
          observer.unobserve(formContainer)
        }
      })
    })

    observer.observe(formContainer)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="relative w-full min-h-screen flex justify-between items-center gap-[15%] text-center overflow-hidden p-4 sm:p-10 flex-col xl:flex-row"
      id="form"
    >
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src="/faip-bg.webp"
          alt="Imagem de fundo da página mostrando o prédio da FAIP"
          className="w-full h-full object-cover lg:object-fit absolute top-0 left-0 z-0"
          width={999}
          height={1512}
        />
      </div>

      <div className="w-full xl:w-1/2 xl:h-screen z-10 flex justify-center xl:justify-end items-center">
        <div className="font-bold text-white flex flex-col items-center w-auto">
          <h1 className="text-[clamp(1.4rem,9vw,3.8rem)]">100% PRESENCIAL</h1>
          <h1 className="text-[clamp(2.1rem,14vw,6rem)]">100% FAIP</h1>
          <h1 className="text-[clamp(1.4rem,9.8vw,3.8rem)]">100% VOCÊ!</h1>
          <Image
            src="/selo-mec.webp"
            alt="Selo de 5 estrelas do MEC (Ministério da Educação)"
            className="mt-4 mb-20 xl:mb-0 w-full xl:w-4/5"
            height={384}
            width={319}
          />
        </div>
      </div>


      <div id="section-2-form" className="flex justify-center xl:justify-start z-10 w-full xl:w-1/2 xl:pl-15">
        <noscript>Para visualizar o formulário, ative o JavaScript no seu navegador.</noscript>
      </div>
    </section>
  );
}
