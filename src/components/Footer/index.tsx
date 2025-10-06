import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#060606]">


      {/* Bloco inferior */}
      <div className="bg-[#012C00] text-[#DEDEDE] py-[50px] text-base">
        <div className="container flex mx-auto px-5 items-center">
          {/* Centro: Logo + direitos (centralizados em relação ao container) */}
          <div className="flex flex-col justify-self-center items-center text-center w-full">
            <div className="flex gap-[32px] sm:flex-row flex-col justify-center items-center mb-8">
              <Image
                src="/faip-logo.webp"
                alt="Logo da FAIP de Marília/SP"
                width={166}
                height={75}
                priority
              />
              <Image
                src="/unigrupofaef-logo.svg"
                alt="Logo da UnigrupoFAEF de Marília/SP"
                width={280}
                height={60}
                priority
              />
            </div>
            <p className="text-lg mt-5 font-medium justify-center items-center flex-col sm:flex-row">
              &copy; 2025 Centro Universitário FAIP/UNIGRUPOFAEF de Marília/SP. </p>
            <p> Todos os direitos reservados.</p>
            <p
              className="flex text-[1rem] font-medium justify-center items-center flex-nowrap sm:flex-row"
              title="Mavellium"
            >Desenvolvido por
              <Image
                src={"/logo_mavellium.webp"}
                height={44}
                width={130}
                alt="Desenvolvido pela empresa Mavellium site https://www.mavellium.com.br, acesse nossa página para conhecer nossos serviços!!"
              />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}