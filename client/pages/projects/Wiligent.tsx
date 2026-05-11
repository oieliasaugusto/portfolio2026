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
        {/* <div>
          <h3 className="text-xl font-semibold mb-2 text-[#35de8a]">Desafio</h3>
          <p className="text-white/70 leading-relaxed">Fazer o rebranding completo de um novo negócio em Miami.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-[#35de8a]">Resultado</h3>
          <p className="text-white/70 leading-relaxed">Uma nova marca e identidade visual, landing page personalizada com foco em conversão.
            <br /><span className="text-[#35de8a] font-bold">+1.800 </span>acessos em 2 semanas.
          </p>
        </div> */}
      </div>

      <section id="projectImages" className="project-images mt-12">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img src="/portfolio/wiligent/Portfolio_Wiligent_Miami_Crypto_Tax.jpg" alt="Wiligent Miami" className="w-full h-auto" />
        </div>
      </section>

      <OtherProjects currentId="wiligent" />
    </main>
  );
}
