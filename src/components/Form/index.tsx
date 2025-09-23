"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  nome: z.string().min(1, "Por favor, informe seu nome."),
  whatsapp: z
    .string()
    .min(1, "Por favor, informe seu número de WhatsApp.")
    .regex(/^\+?\d{8,15}$/, "Número de WhatsApp inválido."),
  email: z.string().min(1, "Por favor, informe seu e-mail.").email("E-mail inválido."),
  curso: z.string().min(1, "Por favor, selecione um curso."),
});

type FormData = z.infer<typeof schema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Dados do formulário:", data);
    alert("Formulário enviado com sucesso!");
  };

  return (
    <section
      className="relative min-h-screen flex justify-center items-center text-center overflow-hidden p-6 sm:p-10"
      id="form"
    >
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img src="/faip-bg.png" alt="FAIP" className="w-full h-full" />
      </div>

      <div className="z-10 flex flex-col lg:flex-row gap-10 lg:gap-32 items-center justify-center w-full">
        <div className="font-bold text-white flex flex-col items-center lg:items-center">
          <h1 className="text-3xl sm:text-4xl">100% PRESENCIAL</h1>
          <h1 className="text-4xl sm:text-5xl">100% FAIP</h1>
          <h1 className="text-2xl sm:text-3xl">100% VOCÊ!</h1>
          <img src="selo-mec.png" alt="Selo MEC" className="mt-4" />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full max-w-md sm:max-w-lg bg-black/65 rounded-xl p-6 sm:p-8"
          noValidate
        >
          <input
            {...register("nome")}
            className={`bg-white text-black placeholder:text-[#353535] placeholder:pl-2 rounded-md h-12 ${
              errors.nome ? "border border-red-500" : ""
            }`}
            type="text"
            placeholder="Qual seu nome?"
          />
          {errors.nome && (
            <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>
          )}

          <input
            {...register("whatsapp")}
            className={`bg-white text-black placeholder:text-[#353535] placeholder:pl-2 rounded-md mt-4 h-12 ${
              errors.whatsapp ? "border border-red-500" : ""
            }`}
            type="text"
            placeholder="Digite seu Número de WhatsApp"
          />
          {errors.whatsapp && (
            <p className="text-red-500 text-sm mt-1">{errors.whatsapp.message}</p>
          )}

          <input
            {...register("email")}
            className={`bg-white text-black placeholder:text-[#353535] placeholder:pl-2 rounded-md mt-4 h-12 ${
              errors.email ? "border border-red-500" : ""
            }`}
            type="email"
            placeholder="Digite seu melhor e-mail"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}

          <select
            {...register("curso")}
            className={`bg-white text-black rounded-md mt-4 h-12 px-2 ${
              errors.curso ? "border border-red-500" : ""
            }`}
          >
            <option value="">Selecione um curso</option>
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
              <option value="/cursos/engenhariacivil">Engenharia Civil</option>
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
          {errors.curso && (
            <p className="text-red-500 text-sm mt-1">{errors.curso.message}</p>
          )}

          <div className="flex gap-4 mt-5 items-start">
            <input
              type="checkbox"
              id="termos"
              className="accent-green-600 w-4 h-4"
            />
            <label
              htmlFor="termos"
              className="text-white text-sm select-none cursor-pointer text-start items-start"
            >
              Aceito os termos de uso e a política de privacidade.
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#028401] border border-[#3AEE0D] text-white rounded-md mt-6 h-12 font-semibold hover:bg-[#02a501] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            GARANTA SUA BOLSA AGORA
          </button>
        </form>
      </div>
    </section>
  );
}
