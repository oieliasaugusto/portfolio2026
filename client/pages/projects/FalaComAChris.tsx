import { useProjectAnimation } from "@/hooks/useProjectAnimation";
import OtherProjects from "@/components/OtherProjects";
import UserFlow from "@/components/ChrisAppUserFlow";

export default function FalaComAChris() {
  const mainRef = useProjectAnimation();

  return (
    <main ref={mainRef} id="viewProject" className="px-6 md:px-10 lg:px-14 xl:px-40 py-24 min-h-screen bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 project-info-grid">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">App Fala <br />com <span className="text-[#3b82f6]">a Chris</span></h1>
        <div>
          <h3 className="text-xl mb-2 font-light text-[#3b82f6]">Desafio</h3>
          <p className="text-white/70 leading-relaxed">
            Criar uma plataforma MVP que conecte contratantes e profissionais qualificados na região de Grande Lisboa, focada em agilidade e confiança.
          </p>
        </div>
        <div>
          <h3 className="text-xl mb-2 font-light text-[#3b82f6]">Resultado</h3>
          <p className="text-white/70 leading-relaxed">
            Um aplicativo com interfaces intuitivas, com fluxo de usuário otimizado, com identidade visual competitiva e landing page de captação de leads.
          </p>
        </div>
      </div>

      <section id="projectImages" className="project-images mt-12">
        <div className="overflow-hidden shadow-2xl">
          {/* <img src="/portfolio/ptchris/Portfolio_App_Fala_com_a_Chris.jpg" alt="Fala com a Chris" className="w-full h-auto" /> */}

          <div className="rounded-3xl bg-[#2170CC] px-16 py-8">
            <img src="/portfolio/ptchris/Screens.png" alt="KODIE Academy" className="w-full h-auto" />
          </div>

          <h4 className="mt-14 text-center">App & Play Store Icon</h4>
          <div className="ChrisAppIcon rounded-3xl pt-2 relative flex items-center justify-center gap-12 ">
            <img src="/portfolio/ptchris/AppIcon.svg" alt="KODIE Studio" className="w-64 h-auto object-contain rounded-none" />
          </div>
          <div className="h-64 flex gap-4 mt-12">
            <img src="/portfolio/ptchris/Restauracao.png" alt="KODIE Academy" className="w-auto h-full" />
            <img src="/portfolio/ptchris/Limpeza.png" alt="KODIE Academy" className="w-auto h-full" />
            <img src="/portfolio/ptchris/Transporte.png" alt="KODIE Academy" className="w-auto h-full" />
          </div>

          <h4 className="text-center mt-12">Guia de Estilo</h4>
          <div className="pt-4 pb-8">
            <h5 className="pb-2 text-center font-light">Paleta de Cores</h5>
            <div className="flex justify-center gap-4 pb-4">
              <div className="bg-[#2070CC] text-white h-20 rounded-xl w-48 flex items-center justify-center">#2070CC</div>
              <div className="bg-[#145BAC] text-white h-20 rounded-xl w-48 flex items-center justify-center">#145BAC</div>
              <div className="bg-[#243B54] text-white h-20 rounded-xl w-48 flex items-center justify-center">#243B54</div>
              <div className="bg-[#94A3B8] text-white h-20 rounded-xl w-48 flex items-center justify-center">#94A3B8</div>
            </div>
            <div className="flex justify-center gap-12">
              <div>
                <h5 className="font-light mb-2 pt-4">Inputs</h5>
                <input type="text" placeholder="Input padrão" className="bg-[#fafafa] border border-[#dddddd] text-black p-4 rounded-xl mr-4 w-full" />
              </div>
              <div className="mt-4">
                <h5 className="font-light mb-2">Botões</h5>
                <div className="flex gap-4">
                  <button className="whitespace-nowrap bg-[#2170CC] text-white px-6 py-4 rounded-lg hover:bg-[#3b82f6] transition-colors duration-300">Botão Primário</button>
                  <button className="whitespace-nowrap bg-[#3b82f6] text-white px-6 py-4 rounded-lg hover:bg-[#2170CC] transition-colors duration-300">Botão Secundário</button>
                  <button className="whitespace-nowrap bg-[#2170CC] text-white px-6 py-4 rounded-lg hover:bg-[#3b82f6] transition-colors duration-300">Botão Terciário</button>
                </div>
              </div>
            </div>
          </div>

          <h4 className="mt-14 text-center">Como funciona o App</h4>
          <UserFlow />
        </div>
      </section>

      <OtherProjects currentId="fala-com-a-chris" />
    </main>
  );
}
