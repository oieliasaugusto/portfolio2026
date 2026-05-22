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

          <div className="flex flex-col gap-4 items-center justify-center w-full px-12 py-24 bg-white">
            <img src="/portfolio/ptchris/Chris_BrandDesign.svg" alt="" className="w-50% h-auto" />
            {/* <div className="grid grid-cols-2 pt-12 gap-x-4 gap-y-4">
              <img src="/portfolio/ptchris/Restauracao.png" alt="KODIE Academy" className="w-full h-auto" />
              <img src="/portfolio/ptchris/Limpeza.png" alt="KODIE Academy" className="w-full h-auto" />
            </div> */}
            {/* <p className="!pb-0 text-center text-gray-400 w-full">Ensaios Fotográficos com NanoBanana</p>
            <img src="/portfolio/ptchris/AppStore.jpg" alt="" className="w-[80%] h-auto" /> */}
          </div>

          <div className="bg-[#2170CC] p-8 w-full grid grid-cols-1">
            <div className="flex flex-col md:flex-row items-center pb-12 p-0 md:p-4 gap-4 md:gap-0 md:p-8">
              <img src="/portfolio/ptchris/Screen1.png" alt="KODIE Academy" className="h-auto !rounded-3xl max-h-auto md:max-h-[650px] object-contain shadow-xl z-index-10" />
                            <img src="/portfolio/ptchris/1Cadastro.svg" alt="KODIE Academy" 
                            className="bg-white md:!rounded-none px-1 md:px-24 py-4 w-full h-auto max-h-auto md:max-h-[590px] object-contain z-index-10" />
              <img src="/portfolio/ptchris/Screen2.png" alt="KODIE Academy" className="h-auto !rounded-3xl max-h-auto md:max-h-[650px] object-contain shadow-xl z-index-10" />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-y-8 rounded-3xl bg-[#2170CC] pb-12 md:p-8">
              <img src="/portfolio/ptchris/Screen3.png" alt="KODIE Academy" className="h-auto max-h-auto !rounded-3xl md:max-h-[650px] object-contain shadow-xl" />
              <img src="/portfolio/ptchris/2Contratacao.svg" alt="KODIE Academy" className="bg-white p-24 w-full !rounded-none h-auto max-h-auto md:max-h-[580px] object-contain" />
              <img src="/portfolio/ptchris/Screen3.png" alt="KODIE Academy" className="h-auto max-h-auto !rounded-3xl md:max-h-[650px] object-contain shadow-xl" />

            </div>

            <div className="flex flex-col md:flex-row gap-4 rounded-3xl bg-[#2170CC] pb-12 md:p-8">
              <img src="/portfolio/ptchris/Resumo.png" alt="KODIE Academy" className="w-full h-auto max-h-auto md:max-h-[650px] object-contain" />
              <img src="/portfolio/ptchris/Screen4.png" alt="KODIE Academy" className="w-full h-auto max-h-auto md:max-h-[650px] object-contain" />
              <img src="/portfolio/ptchris/Screen5.png" alt="KODIE Academy" className="w-full h-auto max-h-auto md:max-h-[650px] object-contain" />
              <img src="/portfolio/ptchris/Screen6.png" alt="KODIE Academy" className="w-full h-auto max-h-auto md:max-h-[650px] object-contain" />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center w-full gap-y-4 md:p-8">
              <img src="/portfolio/ptchris/3Atendimento.svg" alt="KODIE Academy" className="md:block hidden bg-white p-2 md:p-24 w-full h-auto max-h-auto md:max-h-[500px] object-contain" />
              <img src="/portfolio/ptchris/Screen7.png" alt="KODIE Academy" 
              className="md:relative top-0 right-20 h-auto max-h-auto md:max-h-[650px] object-contain shadow-xl" />
            </div>

          </div>

        </div>
      </section>

      <OtherProjects currentId="fala-com-a-chris" />
    </main>
  );
}
