import { useProjectAnimation } from "@/hooks/useProjectAnimation";
import OtherProjects from "@/components/OtherProjects";

export default function KodieAcademy() {
  const mainRef = useProjectAnimation();

  return (
    <main ref={mainRef} id="viewProject" className="px-6 md:px-10 lg:px-14 xl:px-40 py-24 min-h-screen bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 project-info-grid">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">KODIE <span className="text-[#ff5c35]">Academy</span></h1>
        <div>
          <h3 className="text-xs tracking-widest uppercase font-light mb-2 text-[#ff5c35]">Desafio</h3>
          <p className="text-white/70 leading-relaxed">
            Desenvolver uma campanha de lançamento da nova marca e comunicar o seu novo modelo de negócio ao mercado de educação e tecnologia latino-americano.
          </p>
        </div>
        <div>
          <h3 className="text-xs tracking-widest uppercase font-light mb-2 text-[#ff5c35]">Resultado</h3>
          <p className="text-white/70 leading-relaxed">
            Uma marca com autoridade, landing page de alta conversão e materiais visuais que comunicam juventude com solidez e confiança.
          </p>
        </div>
      </div>

      <section id="projectImages" className="project-images mt-12">
        <div className="overflow-hidden text-center flex flex-col items-center">

          <img src="/portfolio/kodie/KV_Academy.png" alt="KODIE Academy" className="w-full h-auto" />
          <h4>KV KODIE Academy</h4>
          <p className="max-w-[500px]">Representa talentos formados para conquistar o espaço de protagonistas do futuro no mercado de tecnologia.</p>

          <img src="/portfolio/kodie/KV_Studio.png" alt="KODIE Studio" className="w-full h-auto" />
          <h4>KV KODIE Studio</h4>
          <p className="max-w-[500px]">Talentos preparados para o mercado de trabalho, prontos para entregar soluções de tecnologia de alto nível e impacto.</p>

          <img src="/portfolio/kodie/YT_Banner.png" alt="YouTube" className="pb-4 w-full h-auto" />
          <p>Banner adaptável para Capa do YouTube e LinkedIn.</p>

          <h4 className="">Blusa KODIE</h4>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <img src="/portfolio/kodie/Frente_Blusa.jpg" alt="Blusa KODIE" className="mx-auto object-cover w-[800px] h-[800px]" />
            <img src="/portfolio/kodie/Costas_Blusa.jpg" alt="Blusa KODIE" className="mx-auto object-cover w-[800px] h-[800px]" />
          </div>

          <h4 className="mt-14">One-Page Kodie Academy</h4>
          <img src="/portfolio/kodie/OnePage_KODIE.png" alt="One page" className="w-full h-auto" />

          {/* Landing page ---nao trazer versao mobile */}
          <h4 className="mt-14">Landing page</h4>
          <img src="/portfolio/kodie/LP_KODIE.jpg" alt="KODIE website" className="w-full h-auto" />

          {/* LIVE de Lançamento */}
          {/* <h4 className="mt-14">LIVE de Lançamento</h4>
          <img src="/portfolio/kodie/LIVE.png" alt="LIVE" className="w-full h-auto" /> */}

        </div>
      </section>

      <OtherProjects currentId="kodie-academy" />
    </main>
  );
}
