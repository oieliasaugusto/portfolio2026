import { useProjectAnimation } from "@/hooks/useProjectAnimation";
import OtherProjects from "@/components/OtherProjects";

export default function Toca() {
  const mainRef = useProjectAnimation();

  return (
    <main ref={mainRef} id="viewProject" className="px-6 md:px-10 lg:px-14 xl:px-40 py-24 min-h-screen bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 project-info-grid">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Toca do <span className="text-[#fbbf24]">Sabor</span></h1>
        {/* <div>
          <h3 className="text-xl font-semibold mb-2 text-[#fbbf24]">Desafio</h3>
          <p className="text-white/70 leading-relaxed">Criar uma identidade visual marcante e elementos de comunicação para um negócio regional de gastronomia.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-[#fbbf24]">Resultado</h3>
          <p className="text-white/70 leading-relaxed">Uma marca reconhecível que traduz o sabor e a tradição do estabelecimento em cada ponto de contato.</p>
        </div> */}
      </div>

      <section id="projectImages" className="project-images mt-12">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img src="/portfolio/tocasabor/Portfolio_Toca_do_Sabor.jpg" alt="Toca do Sabor" className="w-full h-auto" />
        </div>
      </section>

      <OtherProjects currentId="toca" />
    </main>
  );
}
