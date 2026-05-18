import { useProjectAnimation } from "@/hooks/useProjectAnimation";
import OtherProjects from "@/components/OtherProjects";
import UserFlow from "@/components/ChrisAppUserFlow";

export default function FalaComAChris() {
  const mainRef = useProjectAnimation();

  return (
    <main ref={mainRef} id="viewProject" className="px-6 md:px-10 lg:px-14 xl:px-40 py-24 min-h-screen bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 project-info-grid">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">App Fala <br />com <span className="text-[#3b82f6]">a Chris</span></h1>
        <div>
          <h3 className="ttext-xs uppercase pb-4 tracking-widest text-[#3b82f6]">O Desafio</h3>
          <p className="text-white/70 leading-relaxed">
            Criar uma plataforma MVP que conecte contratantes e profissionais qualificados na região de Grande Lisboa, focada em agilidade e confiança.
          </p>
        </div>
        <div>
          <h3 className="text-xs uppercase pb-4 tracking-widest text-[#3b82f6]">O Resultado</h3>
          <p className="text-white/70 leading-relaxed">
            Um aplicativo com interfaces intuitivas, com fluxo de usuário otimizado, com identidade visual competitiva e landing page de captação de leads.
          </p>
        </div>
      </div>

      <section id="projectImages" className="project-images mt-12">
        <div className="overflow-hidden shadow-2xl">

          <div className="flex flex-col md:flex-row gap-y-8 rounded-3xl bg-[#2170CC]  pb-12 p-8">
            <img src="/portfolio/ptchris/Screen1.png" alt="KODIE Academy" className="w-full h-auto max-h-auto md:max-h-[800px] object-contain" />
            <img src="/portfolio/ptchris/Screen2.png" alt="KODIE Academy" className="w-full h-auto max-h-auto md:max-h-[800px] object-contain" />
            <img src="/portfolio/ptchris/Screen3.png" alt="KODIE Academy" className="w-full h-auto max-h-auto md:max-h-[800px] object-contain" />
          </div>

          <div className="flex flex-col md:flex-wrap pt-12 md:flex-row gap-x-4 gap-y-4">
            <p className="!pb-0 text-center text-gray-400 w-full">Fotografias geradas com NanoBanana</p>
            <img src="/portfolio/ptchris/Restauracao.png" alt="KODIE Academy" className="w-full md:w-[49%] h-auto" />
            <img src="/portfolio/ptchris/Limpeza.png" alt="KODIE Academy" className="w-full md:w-[49%] h-auto" />
          </div>

          <h4 className="mt-14 text-center">Logo design</h4>
          <div className="ChrisAppIcon rounded-3xl relative w-full bg-[#2070CC] flex flex-wrap items-center justify-center ">
            <img src="/portfolio/ptchris/AppIcon.svg" alt="KODIE Studio" className="w-64 h-auto object-contain" />
            {/* <p className="pt-2 text-gray-400 w-full text-center !pb-0">App & Play Store icon</p> */}
            {/* <img src="/portfolio/ptchris/logoChris-1.png" alt="KODIE Studio" className="w-64 h-auto object-contain !rounded-none" /> */}
          </div>

          <h4 className="text-center !pt-12">Guia de Estilo</h4>
          <div className="flex flex-wrap content-center justify-center gap-2 pt-4 px-4 pb-8 p-4 bg-white rounded-3xl">
            <h5 className="w-full pb-2 text-center font-light text-gray-400">Paleta de Cores</h5>
            <div className="flex justify-center gap-2">
              <div className="bg-[#2070CC] text-white h-20 rounded-xl w-40 md:w-48 flex items-center justify-center">#2070CC</div>
              <div className="bg-[#145BAC] text-white h-20 rounded-xl w-40 md:w-48 flex items-center justify-center">#145BAC</div>
            </div>
            <div className="flex justify-center gap-2">
              <div className="bg-[#243B54] text-white h-20 rounded-xl w-40 md:w-48 flex items-center justify-center">#243B54</div>
              <div className="bg-[#94A3B8] text-white h-20 rounded-xl w-40 md:w-48 flex items-center justify-center">#94A3B8</div>
            </div>
            <div className="flex flex-col w-full md:flex-row justify-center gap-8 mt-4">
              <div className="w-full max-w-[410px]">
                <h5 className="font-light mb-2 text-gray-400 text-center">Inputs</h5>
                <input
                  type="text"
                  placeholder="Insira um texto"
                  className="bg-[#fafafa] border border-[#94A3B8] text-black p-4 rounded-xl w-full
                  outline-none focus:border-[#2070CC] focus:ring-1 focus:ring-[#2070CC]"
                />
              </div>
              <div className="">
                <h5 className="font-light mb-2 text-gray-400 text-center">Botões</h5>
                <div className="flex flex-col md:flex-row gap-2 justify-center">
                  <button className="whitespace-nowrap bg-[#2070CC] text-white px-6 py-4 rounded-lg hover:bg-[#145BAC] transition-colors duration-300">Botão Primário</button>
                  <button className="whitespace-nowrap bg-none border border-[#2070CC] text-[#243B54] px-6 py-4 rounded-lg hover:bg-blue-50 transition-colors duration-300">Botão Secundário</button>
                </div>
              </div>
            </div>
          </div>

          {/* <h4 className="mt-14 text-center">Como funciona o App</h4>
          <UserFlow /> */}
        </div>
      </section>

      <OtherProjects currentId="fala-com-a-chris" />
    </main>
  );
}
