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
        <div className="flex flex-col justify-center items-center overflow-hidden shadow-2xl">
          <img src="/portfolio/wiligent/Wiligent_BrandDesign.svg" alt="Wiligent Miami" className="bg-white p-4 py-12 md:p-32 lg:p-52 w-full h-auto !rounded-none md:!rounded-3xl" />
          
          <div className="flex flex-col lg:flex-row align-between w-full justify-between pt-14">
            
            <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-4">
              <div className="flex flex-col md:flex-row w-full justify-center items-center gap-4">
                <div className="flex justify-center w-full bg-[#01152C] items-center border border-white/40 rounded-2xl h-[160px] md:h-[220px] w-full lg:w-[500px] overflow-hidden inline-block">
                  <video src="/portfolio/wiligent/LogoAnimation.mp4" autoPlay loop muted playsInline webkit-playsinline className="pointer-events-none w-auto h-[320px]" />
                </div>

                <div className="flex justify-center w-full bg-[#061f3e] px-12 items-center border border-white/40 rounded-2xl h-[180px] md:h-[220px] w-full lg:w-[500px] overflow-hidden inline-block">
                  <video src="/portfolio/wiligent/Loading1.mp4" autoPlay loop muted playsInline webkit-playsinline className="pointer-events-none w-auto" />
                </div>
              </div>

              <div className="flex flex-col p-8 gap-0 md:gap-4 rounded-xl">
                <p className="text-gray-400 !pb-0 text-left mr-4 !text-[0.9rem]">Simboliza a habilidade de pesquisa, análise e resolução de problemas</p>
                <img src="/portfolio/wiligent/Logo_Destails.svg" alt="" className="object-cover w-auto h-[200px]" />
                <p className="text-gray-400 !pb-0 !text-[0.9rem]">Ações e negociações de criptomoedas sintetizadas num gráfico de crescimento</p>
              </div>
              <img src="/portfolio/wiligent/Wiligent_Logo.png" alt="Logo" className="w-full lg:w-[480px] md:w-[380px]" />
            </div>
          
          </div>

          <img src="/portfolio/wiligent/Wiligent_LP.png" alt="Landing Page Wiligent" className="mt-14 w-full h-auto object-top" />

          <div className="relative mt-24 flex flex-col md:flex-row justify-center items-center w-full">
            <img src="/portfolio/wiligent/Ebook.png" alt="Ebook Crypto Tax Simplified: Simplificando Regras e Regulamentos para Crypto entusiastas" className="w-full md:w-[50%] lg:w-[700px] h-auto" />
            <img src="/portfolio/wiligent/Ebook_Pages.png" alt="Demonstração de páginas internas do Ebook" className="!rounded-none w-full md:w-[50%] lg:w-[700px] h-auto mb-24" />
          </div>
        </div>
      </section>

      <OtherProjects currentId="wiligent" />
    </main >
  );
}
