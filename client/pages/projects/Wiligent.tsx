import { useState } from "react";
import { useProjectAnimation } from "@/hooks/useProjectAnimation";
import OtherProjects from "@/components/OtherProjects";

export default function Wiligent() {
  const [pos, setPos] = useState(50);
  const mainRef = useProjectAnimation();

  return (
    <main ref={mainRef} id="viewProject" className="px-6 md:px-10 lg:px-14 xl:px-40 py-24 min-h-screen bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 project-info-grid">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Wiligent <span className="text-[#35de8a]">Miami</span></h1>
        <div>
          <h3 className="text-2xl tracking-widest Manuscrita text-[#35de8a]">O Desafio</h3>
          <p className="text-white/70 leading-relaxed">Fazer o rebranding completo de um novo negócio em Miami.</p>
        </div>
        <div>
          <h3 className="text-2xl tracking-widest Manuscrita text-[#35de8a]">O Resultado</h3>
          <p className="text-white/70 leading-relaxed">Uma nova marca e identidade visual, landing page personalizada com foco em conversão.
            <br /><span className="text-[#35de8a] font-light tracking-wider">+1.800 </span>acessos em 2 semanas.
          </p>
        </div>
      </div>

      <section id="projectImages" className="project-images mt-12 text-center">
        <div className="overflow-hidden shadow-2xl">
          <img src="/portfolio/wiligent/Wiligent.jpg" alt="Wiligent Miami" className="w-full h-auto" />

          <h4 className="mt-14">Rebranding</h4>

          <div className="flex flex-col md:flex-row w-full justify-center items-center gap-8">
            <div className="flex flex-col w-full justify-center items-center gap-4">
              <div className="flex justify-center w-full items-center border border-white/40 rounded-2xl h-[150px] w-full md:w-[360px] overflow-hidden inline-block">
                <video src="/portfolio/wiligent/LogoAnimation.mp4" autoPlay loop muted playsInline webkit-playsinline className="pointer-events-none w-auto h-[320px]" />
              </div>
              <img src="/portfolio/wiligent/Wiligent_Logo.png" alt="Logo" className="w-full md:w-[360px]" />
            </div>
            <div className="flex flex-col bg-[#E6E6E6] p-8 gap-4 rounded-xl">
              <p className="text-gray-500 !pb-0 text-left">Simboliza a habilidade de pesquisa, análise e resolução de problemas</p>
              <img src="/portfolio/wiligent/LogoIdea.png" alt="" className="object-cover w-auto h-[200px]" />
              <p className="text-gray-500 !pb-0">Ações e negociações de criptomoedas sintetizadas num gráfico de crescimento</p>
            </div>

          </div>

          <img src="/portfolio/wiligent/Wiligent_LP.png" alt="KODIE website" className="mt-14 w-full h-auto" />

          <h4 className="mt-14">Ebook</h4>
          <img src="/portfolio/wiligent/Ebook.png" alt="Ebooks" className="pl-[8%] w-[700px] h-auto mx-auto" />

        </div>
      </section>

      <OtherProjects currentId="wiligent" />
    </main >
  );
}
