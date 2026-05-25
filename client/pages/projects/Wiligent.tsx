import { useState } from "react";
import { useProjectAnimation } from "@/hooks/useProjectAnimation";
import OtherProjects from "@/components/OtherProjects";

export default function Wiligent() {
  const [pos, setPos] = useState(50);
  const mainRef = useProjectAnimation();

  return (
    <main ref={mainRef} id="viewProject" className="px-6 lg:px-10 lg:px-14 xl:px-40 py-24 min-h-screen bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 project-info-grid">
        <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">Wiligent <span className="text-[#35de8a]">Miami</span></h1>
        <div>
          <h3 className="text-xs uppercase pb-4 tracking-widest text-[#35de8a]">O Desafio</h3>
          <p className="text-white/70 leading-relaxed">Fazer o rebranding completo de um negócio contábil em Miami, além de tornar a marca moderna e atrativa para o seu público alvo.</p>
        </div>
        <div>
          <h3 className="text-xs uppercase pb-4 tracking-widest text-[#35de8a]">O Resultado</h3>
          <p className="text-white/70 leading-relaxed">Uma nova marca e identidade visual, landing page personalizadacom foco em conversão.
            <br /><span className="text-[#35de8a] font-light tracking-wider">+1.800 </span>acessos em 2 semanas.
          </p>
        </div>
      </div>

      <section id="projectImages" className="project-images mt-12 text-center">
        <div className="flex flex-col justify-center items-center shadow-2xl">
          <img src="/portfolio/wiligent/Wiligent_BrandDesign.svg" alt="Wiligent Miami" className="bg-white p-4 py-12 md:p-32 lg:p-32 w-full h-auto" />
          
          <div className="w-full flex flex-col items-center gap-8 p-12">

          <video src="/portfolio/wiligent/Wiligent_Logo.webm" autoPlay loop muted playsInline webkit-playsinline className="pointer-events-none h-full md:h-[280px] my-24" />

          <div className="w-full flex flex-col items-center md:p-8 md:gap-4">
            <p className="text-gray-400 !pb-0 text-left md:mr-4 !text-[0.9rem]">Simboliza a habilidade de pesquisa, análise e resolução de problemas</p>
            <img src="/portfolio/wiligent/Logo_Destails.svg" alt="Na marca Wiligent, a lupa ao redor do W simboliza a habilidade de pesquisa, análise e resolução de problemas. Enquanto o W em destaque na cor, representa visualmente as ações e negociações de criptomoedas sintetizadas num gráfico de crescimento" className="object-cover w-auto md:h-[200px]" />
            <p className="text-green-400 !pt-0 !text-[0.9rem] text-left md:ml-24">Ações e negociações de criptomoedas sintetizadas num gráfico de crescimento</p>
          </div>

          </div>

          <img src="/portfolio/wiligent/Wiligent_LP_Mockup.png" alt="Landing Page Wiligent" className="mt-14 w-full h-auto object-top" />

          <div className="relative mt-24 flex flex-col md:flex-row justify-center items-center w-full">
            <img src="/portfolio/wiligent/Ebook.png" alt="Ebook Crypto Tax Simplified: Simplificando Regras e Regulamentos para Crypto entusiastas" className="w-full h-auto md:w-[50%] lg:w-[700px] mr-[-64px]" />
            <img src="/portfolio/wiligent/Ebook_Pages.png" alt="Demonstração de páginas internas do Ebook" className="!rounded-none w-full md:w-[50%] lg:w-[700px] h-auto mb-24" />
          </div>
        </div>
      </section>

      <OtherProjects currentId="wiligent" />
    </main >
  );
}
