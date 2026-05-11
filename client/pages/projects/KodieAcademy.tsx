import { useProjectAnimation } from "@/hooks/useProjectAnimation";
import OtherProjects from "@/components/OtherProjects";

export default function KodieAcademy() {
  const mainRef = useProjectAnimation();

  return (
    <main ref={mainRef} id="viewProject" className="px-6 md:px-10 lg:px-14 xl:px-40 py-24 min-h-screen bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 project-info-grid">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">KODIE <span className="text-[#ff5c35]">Academy</span></h1>
        {/* <div>
          <h3 className="text-xl font-semibold mb-2 text-[#ff5c35]">Desafio</h3>
          <p className="text-white/70 leading-relaxed">
            Desenvolver uma estratégia de lançamento e posicionamento premium para a mentoria exclusiva da Dra. Luciana Laisa, focada em educação médica de alta performance.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-[#ff5c35]">Resultado</h3>
          <p className="text-white/70 leading-relaxed">
            Uma marca com autoridade, landing page de alta conversão e materiais visuais que comunicam sofisticação e conhecimento.
          </p>
        </div> */}
      </div>

      <section id="projectImages" className="project-images mt-12">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img src="/portfolio/kodie/Portfolio_KODIE_Academy.jpg" alt="KODIE Academy" className="w-full h-auto" />
        </div>
      </section>

      <OtherProjects currentId="kodie-academy" />
    </main>
  );
}
