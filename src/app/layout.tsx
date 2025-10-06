import type { Metadata } from "next";
import GoogleTagManager from "../components/GoogleTagManager";
import "./globals.css";
import { Poppins, League_Spartan } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-poppins" });
const league = League_Spartan({ subsets: ["latin"], variable: "--font-league" });

export const metadata: Metadata = {
  title: "Bolsas de Até 60% na FAIP – Inscreva-se Já!",
  description: `
    💚 Estude na FAIP em Marília com até 60% de desconto! Aproveite a bolsa exclusiva para cursos de graduação e transforme seu futuro. Na FAIP, você conta com professores experientes, infraestrutura moderna e uma formação reconhecida no mercado.

    Não perca a chance de iniciar sua carreira com descontos imperdíveis e condições especiais de matrícula. Inscreva-se agora e garanta sua bolsa nos cursos de Administração, Engenharia, Educação Física, Direito e muito mais.

    ✅ Bolsas de até 60%
    ✅ Cursos de graduação reconhecidos e atualizados
    ✅ Aprendizado prático e proximidade com o mercado de trabalho

    Clique em “Quero minha bolsa agora” e dê o primeiro passo rumo ao seu futuro de sucesso na FAIP!`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`
          ${poppins.variable} 
          ${league.variable} 
          antialiased
        `}
      >
        <GoogleTagManager gtmId="GTM-TZ827BTR" />

        {children}
      </body>
    </html>
  );
}
