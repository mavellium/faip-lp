"use client";

export default function Form() {
  return (
    <section
      className="relative min-h-screen flex justify-center items-center text-center overflow-hidden p-6 sm:p-10"
      id="form"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src="/faip-bg.png"
          alt="FAIP"
          className="w-full h-full"
        />
      </div>

      {/* Conteúdo */}
      <div className="z-10 flex flex-col lg:flex-row gap-10 lg:gap-32 items-center justify-center w-full">
        {/* Texto lateral */}
        <div className="font-bold text-white flex flex-col items-center lg:items-center">
          <h1 className="text-3xl sm:text-4xl">100% PRESENCIAL</h1>
          <h1 className="text-4xl sm:text-5xl">100% FAIP</h1>
          <h1 className="text-2xl sm:text-3xl">100% VOCÊ!</h1>
          <img
            src="selo-mec.png"
            alt="Selo MEC"
            className="mt-4"
          />
        </div>

        {/* Formulário */}
        <div className="flex w-full max-w-md sm:max-w-lg bg-black/65 rounded-xl">
          <div className="flex flex-col w-full p-6 sm:p-8">
            <input
              className="bg-white text-black placeholder:text-[#353535] placeholder:pl-2 rounded-md h-12"
              type="text"
              placeholder="Qual seu nome?"
            />
            <input
              className="bg-white text-black placeholder:text-[#353535] placeholder:pl-2 rounded-md mt-4 h-12"
              type="text"
              placeholder="Digite seu Número de WhatsApp"
            />
            <input
              className="bg-white text-black placeholder:text-[#353535] placeholder:pl-2 rounded-md mt-4 h-12"
              type="email"
              placeholder="Digite seu melhor e-mail"
            />
            <select className="bg-white text-black rounded-md mt-4 h-12 px-2">
              <optgroup label="GRADUAÇÃO">
                <option value="/cursos/administracao">Administração</option>
                <option value="/cursos/arquitetureaurbanismo">
                  Arquitetura e Urbanismo
                </option>
                <option value="/cursos/biomedicina">Biomedicina</option>
                <option value="/cursos/educacaofisica">Educação Física</option>
                <option value="/cursos/enfermagem">
                  Enfermagem Diurno &amp; Noturno
                </option>
                <option value="/cursos/engenhariacivil">
                  Engenharia Civil
                </option>
                <option value="/cursos/engenhariaeletrica">
                  Engenharia Elétrica
                </option>
                <option value="/cursos/esteticacosmetica">
                  Estética &amp; Cosmética
                </option>
                <option value="/cursos/fisioterapia">Fisioterapia</option>
                <option value="/cursos/gastronomia">Gastronomia</option>
                <option value="/cursos/moda">Moda</option>
                <option value="/cursos/nutricao">Nutrição</option>
                <option value="/cursos/pedagogia">Pedagogia</option>
                <option value="/cursos/producaopublicitaria">
                  Produção Publicitária
                </option>
              </optgroup>
            </select>
            <button className="bg-[#028401] border border-[#3AEE0D] text-white rounded-md mt-6 h-12 font-semibold hover:bg-[#02a501] transition">
              GARANTIR MINHA BOLSA AGORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
