import { useProjectAnimation } from "@/hooks/useProjectAnimation";
import OtherProjects from "@/components/OtherProjects";

export default function Mobiplus() {
  const mainRef = useProjectAnimation();

  return (
    <main ref={mainRef} id="viewProject" className="px-6 md:px-10 lg:px-14 xl:px-40 pt-32 pb-24 min-h-screen bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 project-info-grid">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Mobiplus</h1>
        {/* <div>
          <h3 className="text-xl font-semibold mb-2">Desafio</h3>
          <p className="text-white/70 leading-relaxed">Desenvolver uma plataforma de soluções e inteligência em tecnologia para otimização de negócios.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Resultado</h3>
          <p className="text-white/70 leading-relaxed">Uma plataforma inovadora, focada em soluções ágeis para mobilidade e negócios digitais.</p>
        </div> */}
      </div>

      <section id="projectImages" className="project-images mt-12">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img src="/portfolio/mobiplus/Portfolio_Mobiplus.jpg" alt="Mobiplus" className="w-full h-auto" />
        </div>
      </section>

      <OtherProjects currentId="mobiplus" />
    </main>
  );
}
