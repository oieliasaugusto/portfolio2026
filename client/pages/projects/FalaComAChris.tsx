import { useProjectAnimation } from "@/hooks/useProjectAnimation";
import OtherProjects from "@/components/OtherProjects";
import UserFlow from "@/components/ChrisAppUserFlow";

export default function FalaComAChris() {
  const mainRef = useProjectAnimation();

  return (
    <main ref={mainRef} id="viewProject" className="px-6 lg:px-10 lg:px-14 xl:px-40 py-24 min-h-screen bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 project-info-grid">
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
        <div className="overflow-hidden rounded-3xl">

          <img src="/portfolio/ptchris/BannerChris.jpg" alt="Chris website" className="w-auto h-auto !rounded-none" />

          <div className="flex flex-col gap-4 items-center justify-center w-auto p-4 py-12 md:p-14 lg:p-24 bg-white">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-auto h-auto"
            >
              <source src="/portfolio/ptchris/LogoAnimation.webm" type="video/webm" />
            </video>
            <img src="/portfolio/ptchris/Chris_BrandDesign.svg" alt="" className="pt-4 md:pt-8 h-auto !rounded-none md:px-24" />
          </div>

          <div className="bg-[#2170CC] w-auto grid grid-cols-1 md:p-4">
            <div className="flex flex-col md:flex-row content-center items-center !py-8 lg:p-4 gap-4 md:gap-0 w-full">
              <img src="/portfolio/ptchris/Screen1.png" alt="Tela de inicial de busca de profissionais por categoria de serviços" className="h-auto !rounded-3xl max-h-auto md:max-h-[600px] lg:max-h-[650px] object-contain px-4 md:px-0 md:shadow-xl z-index-10" />
              {/* FLUXO DE CADASTRO */}
              <img src="/portfolio/ptchris/1Cadastro.svg" alt="Fluxo de Cadastro de novos usuários" 
              className="bg-white !rounded-none py-8 p-4 lg:p-8 w-auto h-auto max-h-auto md:max-h-[550px] lg:max-h-[590px] object-contain z-index-10" />
              <img src="/portfolio/ptchris/Screen2.png" alt="Tela de personalização da solicitação de serviços" className="h-auto w-[90%] md:w-auto !rounded-3xl max-h-auto md:max-h-[600px] lg:max-h-[650px]  object-contain shadow-xl z-index-10" />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-y-8 bg-[#2170CC] lg:p-8">
              <img src="/portfolio/ptchris/Screen3.png" alt="" className="h-auto w-auto max-h-auto !rounded-3xl md:max-h-[600px] lg:max-h-[650px] object-contain px-4 md:px-0 md:shadow-xl" />
              {/* FLUXO DE CONTRATAÇÃO */}
              <img src="/portfolio/ptchris/2Contratacao.svg" alt="" className="bg-white p-4 md:p-16 lg:p-24 w-auto !rounded-none h-auto max-h-auto md:max-h-[500px] lg:max-h-[580px] object-contain" />
              {/* <img src="/portfolio/ptchris/Screen3.png" alt="" className="h-auto w-auto  max-h-auto !rounded-3xl md:max-h-[500px] lg:max-h-[650px] object-contain shadow-xl" /> */}

            </div>

            <div className="flex flex-col md:flex-row lg:flex-row items-center gap-8 md:gap-8 bg-[#2170CC] px-4 py-8 lg:p-8">
              <img src="/portfolio/ptchris/Resumo.png" alt="" className="w-auto md:w-[280px] h-auto max-h-auto lg:max-h-[650px] object-contain" />
              <img src="/portfolio/ptchris/Screen4.png" alt="" className="w-auto md:w-[280px] h-auto max-h-auto lg:max-h-[650px] object-contain" />
              <img src="/portfolio/ptchris/Screen5.png" alt="" className="w-auto md:w-[280px] h-auto max-h-auto lg:max-h-[650px] object-contain" />
              <img src="/portfolio/ptchris/Screen6.png" alt="" className="w-auto md:w-[280px] h-auto max-h-auto lg:max-h-[650px] object-contain" />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center w-auto gap-y-4 lg:p-8">
              {/* FLUXO DE ATENDIMENTO */}
              <img src="/portfolio/ptchris/3Atendimento.svg" alt="Durante o fluxo de atendimento o profissional notifica o contratando à cada status, da ida ao local até a conclusão dos seus serviços" className="md:block hidden bg-white px-8 py-12 mb-8 lg:p-24 md:w-auto h-auto md:max-h-[400px] lg:max-h-[500px] object-contain !rounded-none" />
              <img src="/portfolio/ptchris/Screen7.png" alt="Printscreen da Avaliação do profissional" 
              className="lg:relative w-auto md:w-[280px] h-auto max-h-auto lg:max-h-[650px] object-contain md:shadow-xl md:mr-0 px-4 pb-4 md:px-0" />
            </div>

          </div>

        </div>
      </section>

      <OtherProjects currentId="fala-com-a-chris" />
    </main>
  );
}
