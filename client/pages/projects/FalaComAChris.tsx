import { useProjectAnimation } from "@/hooks/useProjectAnimation";
import OtherProjects from "@/components/OtherProjects";

export default function FalaComAChris() {
  const mainRef = useProjectAnimation();

  return (
    <main ref={mainRef} id="viewProject" className="px-6 md:px-10 lg:px-14 xl:px-40 py-24 min-h-screen bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 project-info-grid">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Fala com <br /><span className="text-[#3b82f6]">a Chris</span></h1>
        {/* <div>
          <h3 className="text-xl mb-2 text-[#3b82f6]">Desafio</h3>
          <p className="text-white/70 leading-relaxed">
            Criar uma plataforma MVP que conecte contratantes e profissionais qualificados na região de Grande Lisboa, focada em agilidade e confiança.
          </p>
        </div>
        <div>
          <h3 className="text-xl mb-2 text-[#3b82f6]">Resultado</h3>
          <p className="text-white/70 leading-relaxed">
            Um sistema completo com fluxo de usuário otimizado, design responsivo e uma identidade visual acolhedora e profissional.
          </p>
        </div> */}
      </div>

      <section id="projectImages" className="project-images mt-12">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img src="/portfolio/ptchris/Portfolio_App_Fala_com_a_Chris.jpg" alt="Fala com a Chris" className="w-full h-auto" />
        </div>
      </section>

      <OtherProjects currentId="fala-com-a-chris" />
    </main>
  );
}
