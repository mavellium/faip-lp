"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
      className="relative min-h-screen flex justify-center items-center text-center overflow-hidden p-6 sm:p-10"
      id="form"
    >
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img src="/faip-bg.png" alt="FAIP" className="w-full h-full absolute bottom-0 left-0 w-full h-full z-0" />
      </div>

      <div className="z-10 flex flex-col lg:flex-row gap-10 lg:gap-32 items-center justify-center w-full">
        <div className="font-bold text-white flex flex-col items-center lg:items-center">
          <h1 className="text-3xl sm:text-4xl">100% PRESENCIAL</h1>
          <h1 className="text-4xl sm:text-5xl">100% FAIP</h1>
          <h1 className="text-2xl sm:text-3xl">100% VOCÊ!</h1>
          <img src="selo-mec.png" alt="Selo MEC" className="mt-4" />
        </div>

        <div
        id="section-2-form"
        className="w-full max-w-[560px] rounded-[10px] px-3 sm:px-8 py-4 sm:py-10 h-full flex justify-center"
      >
        <noscript>Para visualizar o formulário, ative o JavaScript no seu navegador.</noscript>
      </div>
      </div>
    </section>
  );
}
