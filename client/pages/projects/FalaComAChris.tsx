import { useProjectAnimation } from "@/hooks/useProjectAnimation";
import OtherProjects from "@/components/OtherProjects";
import UserFlow from "@/components/ChrisAppUserFlow";

export default function FalaComAChris() {
  const mainRef = useProjectAnimation();

  return (
    <main ref={mainRef} id="viewProject" className="px-6 lg:px-10 lg:px-14 xl:px-40 py-24 min-h-screen bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12 project-info-grid">
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">App Fala <br />com <span className="text-[#3b82f6]">a Chris</span></h1>
        <div>
          <h3 className="text-xs uppercase pb-4 tracking-widest text-[#3b82f6]">O Desafio</h3>
          <p className="text-white/70 leading-relaxed">
            Criar uma Aplicativo MVP que conecte contratantes e profissionais qualificados na região de Portugal, focada em agilidade e confiança.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase pb-4 tracking-widest text-[#3b82f6]">O Resultado</h3>
          <p className="text-white/70 leading-relaxed">
            Um aplicativo com interfaces intuitivas, com fluxo de usuário otimizado, com identidade visual competitiva e landing page pronta para captação de leads.
          </p>
        </div>
      </div>

      <section id="projectImages" className="project-images mt-12">
        <div className="overflow-hidden shadow-2xl">

          <img src="/portfolio/ptchris/BannerChris.jpg" alt="Chris website" className="w-full h-auto" />

          <div className="flex flex-col gap-4 items-center justify-center w-full p-4 py-12 md:p-14 lg:p-52 bg-white">
            <img src="/portfolio/ptchris/Chris_BrandDesign.svg" alt="" className="h-auto" />
          </div>

          <div className="bg-[#2170CC] lg:rounded-3xl w-full grid grid-cols-1">
            <div className="flex flex-col lg:flex-row items-center !py-8 lg:p-4 gap-4 lg:gap-0 lg:p-8">
              <img src="/portfolio/ptchris/Screen1.png" alt="" className="h-auto w-[90%] !rounded-3xl max-h-auto lg:max-h-[650px] object-contain shadow-xl z-index-10" />
              <img src="/portfolio/ptchris/1Cadastro.svg" alt="" 
              className="mt-4 bg-white !rounded-none p-4 lg:px-24 py-4 w-full h-auto max-h-auto lg:max-h-[590px] object-contain z-index-10" />
              <img src="/portfolio/ptchris/Screen2.png" alt="" className="h-auto w-[90%] !rounded-3xl max-h-auto lg:max-h-[650px] object-contain shadow-xl z-index-10" />
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-y-8 rounded-3xl bg-[#2170CC] pb-12 lg:p-8">
              <img src="/portfolio/ptchris/Screen3.png" alt="" className="h-auto w-[90%]  max-h-auto !rounded-3xl lg:max-h-[650px] object-contain shadow-xl" />
              <img src="/portfolio/ptchris/2Contratacao.svg" alt="" className="bg-white p-4 md:p-24 w-full !rounded-none h-auto max-h-auto lg:max-h-[580px] object-contain" />
              <img src="/portfolio/ptchris/Screen3.png" alt="" className="h-auto w-[90%]  max-h-auto !rounded-3xl lg:max-h-[650px] object-contain shadow-xl" />

            </div>

            <div className="flex flex-col lg:flex-row items-center gap-4 rounded-3xl bg-[#2170CC] pb-12 lg:p-8">
              <img src="/portfolio/ptchris/Resumo.png" alt="" className="w-full w-[90%] h-auto max-h-auto lg:max-h-[650px] object-contain" />
              <img src="/portfolio/ptchris/Screen4.png" alt="" className="w-full w-[90%] h-auto max-h-auto lg:max-h-[650px] object-contain" />
              <img src="/portfolio/ptchris/Screen5.png" alt="" className="w-full w-[90%] h-auto max-h-auto lg:max-h-[650px] object-contain" />
              <img src="/portfolio/ptchris/Screen6.png" alt="" className="w-full w-[90%] h-auto max-h-auto lg:max-h-[650px] object-contain" />
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-y-4 lg:p-8">
              <img src="/portfolio/ptchris/3Atendimento.svg" alt="" className="lg:block hidden bg-white p-2 lg:p-24 md:w-full h-auto max-h-auto lg:max-h-[500px] object-contain" />
              <img src="/portfolio/ptchris/Screen7.png" alt="" 
              className="lg:relative w-[90%] top-0 right-20 !rounded-[2rem] mb-8 h-auto max-h-auto lg:max-h-[650px] object-contain shadow-xl" />
            </div>

          </div>

        </div>
      </section>

      <OtherProjects currentId="fala-com-a-chris" />
    </main>
  );
}
