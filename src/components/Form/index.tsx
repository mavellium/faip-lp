"use client";

export default function Form() {
    return (
        <>
            <section className="relative h-screen flex justify-center items-center text-center overflow-hidden p-[40px]" id="form">
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <img
                        src="/faip-bg.png"
                        alt="FAIP"
                        className="hero-image w-full h-full object-cover grayscale-[80%]"
                    />
                    <div className="hero-overlay-dark absolute top-0 left-0 w-full h-full bg-[#012C00]/90"></div>
                </div>
                <div className="z-10 flex gap-[10em]">
                    <div className=" font-bold text-wrap">
                        <h1 className="text-[36px]">100% PRESENCIAL</h1>
                        <h1 className="text-[52px]">100% FAIP</h1>
                        <h1 className="text-[36px]">100% VOCÊ!</h1>
                        <img src="selo-mec.png" alt="" />
                    </div>
                    <div className="flex w-[600px] bg-black/65 rounded-xl">
                        <div className="flex flex-col w-full p-[24px] flex justify-center">
                            <input className="bg-white text-black placeholder:text-[#353535] placeholder:pl-[10px] rounded-md h-15" type="text" placeholder="Qual seu nome?" />
                            <input className="bg-white text-black placeholder:text-[#353535] placeholder:pl-[10px] rounded-md mt-5 h-15" type="text" placeholder="Digite seu Número de WhatsApp" />
                            <input className="bg-white text-black placeholder:text-[#353535] placeholder:pl-[10px] rounded-md mt-5 h-15" type="email" placeholder="Digite seu melhor e-mail" />
                            <select className="bg-white text-black placeholder:text-[#353535] placeholder:pl-[10px] rounded-md mt-5 h-15">
                                <optgroup label="GRADUAÇÃO">
                                    <option value="/cursos/administracao">Administração</option>
                                    <option value="/cursos/arquitetureaurbanismo">Arquitetura e Urbanismo</option>
                                    <option value="/cursos/biomedicina">Biomedicina</option>
                                    <option value="/cursos/educacaofisica">Educação Física</option>
                                    <option value="/cursos/enfermagem">Enfermagem Diurno &amp; Noturno</option>
                                    <option value="/cursos/engenhariacivil">Engenharia Civil</option>
                                    <option value="/cursos/engenhariaeletrica">Engenharia Elétrica</option>
                                    <option value="/cursos/esteticacosmetica">Estética &amp; Cosmética</option>
                                    <option value="/cursos/fisioterapia">Fisioterapia</option>
                                    <option value="/cursos/gastronomia">Gastronomia</option>
                                    <option value="/cursos/moda">Moda</option>
                                    <option value="/cursos/nutricao">Nutrição</option>
                                    <option value="/cursos/pedagogia">Pedagogia</option>
                                    <option value="/cursos/producaopublicitaria">Produção Publicitária</option>
                                </optgroup>
                            </select>
                            <button className="bg-[#028401] border-[#3AEE0D] border-1 text-white rounded-md mt-10 h-10">GARANTIR MINHA MATRÍCULA</button>
                        </div>
                    </div>
                </div>
            </section >

        </>
    );
}