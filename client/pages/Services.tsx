import React from "react";
import { Link } from "react-router-dom";
import { projects } from "@/lib/projects";
import ContactForm from "@/components/contactForm";
import { Gem, PenTool, Gauge } from "lucide-react";

// Filtrando exclusivamente os cases solicitados
const featuredProjectIds = ["kodie-academy", "wiligent"];

export default function Services() {
  const featuredProjects = projects.filter((p) =>
    featuredProjectIds.includes(p.id)
  );

  return (
    // Adicionado scroll-smooth nativo para transições suaves nas âncoras da página
    <div className="min-h-screen text-white bg-black selection:bg-[#5B51D8]/30 selection:text-white scroll-smooth">

      {/* 1. HERO SECTION (COM VÍDEO EM LOOP NO BACKGROUND) */}
      <section className="relative min-h-[90vh] pt-24 pb-20 px-6 md:px-10 lg:px-14 xl:px-40 flex items-center justify-center border-b border-white/5 overflow-hidden">

        {/* Container do Vídeo de Background */}
        <div className="absolute w-full lg:w-[40%] lg:translate-x-[75%] translate-y-[40%] bottom-0 inset-0 h-full pointer-events-none overflow-hidden">
          <video
            autoPlay
            playsInline
            loop
            muted
            className="pl-[5%] w-[95%] h-[50%] object-cover mt-20 scale-105 opacity-100 brightness-80"
          >
            <source src="/Loop.mp4" type="video/mp4" />
          </video>
          {/* Gradação para misturar o vídeo perfeitamente com o fundo preto da página */}
          <div className="absolute inset-0 bg-gradient-to-b from-black from-[5%] via-transparent via-[20%] to-black to-[100%] z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black from-[5%] via-transparent via-[20%] to-black to-[100%] z-10" />
        </div>

        {/* Conteúdo da Hero */}
        <div className="max-w-[1200px] text-center mb-[20%] z-20 backdrop-blur-[2px] py-0 rounded-3xl">

          <h1 className="text-3xl md:text-4xl lg:max-w-4xl mx-auto !leading-[1.4] mb-4">
            Valorize sua oferta. Transforme visitantes em clientes.
          </h1>

          <p className="text-sm md:text-lg text-white/60 font-light leading-relaxed mb-10 mx-auto max-w-2xl">
            Combine narrativa estratégica e design profissional estruturado para aumentar a percepção de valor sobre seus produtos e serviços com um parceiro digital focado no seu resultado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="w-full sm:w-auto text-center bg-[#5B51D8] hover:bg-[#4A40C7] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#5B51D8]/20 hover:scale-[1.02]"
            >
              Quero Começar
            </a>
            <a
              href="/"
              className="w-full sm:w-auto text-center bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-8 py-4 rounded-xl transition-all duration-300"
            >
              Ver Cases
            </a>
          </div>
        </div>
      </section>

      {/* 2. DIFERENCIAIS COMPETITIVOS (SEÇÃO NA COR PRIMARY COM CARDS BRANCOS e ÍCONES LUCIDE) */}
      <section className="py-24 px-6 md:px-10 lg:px-14 xl:px-40 text-black">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Bloco 1: Narrativa de Valorização */}
            <div className="p-8 rounded-2xl bg-white shadow-2xl shadow-black/10 flex flex-col justify-between transform hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="text-[#5B51D8] mb-6">
                  <Gem size={40} strokeWidth={1.2} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900">Narrativa de valorização</h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  Não é apenas uma página bonita. A narrativa é pensada e escrita para destacar pontos os fortes do seu negócio e aumentar a autoridade do seu negócio, traduzindo o real valor do seu produto ou serviço em desejo de compra.
                </p>
              </div>
            </div>

            {/* Bloco 2: Identidade Visual Aplicada */}
            <div className="p-8 rounded-2xl bg-white shadow-2xl shadow-black/10 flex flex-col justify-between transform hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="text-[#5B51D8] mb-6">
                  <PenTool size={40} strokeWidth={1.2} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900">Identidade visual aplicada</h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  Sua marca expressa em cada pixel. Logo, cores, tipografias fortes e elementos visuais da sua marca aplicados com harmonia, criando uma experiência agradável e memorável para o seu cliente.
                </p>
              </div>
            </div>

            {/* Bloco 3: Experiência Veloz */}
            <div className="p-8 rounded-2xl bg-white shadow-2xl shadow-black/10 flex flex-col justify-between transform hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="text-[#5B51D8] mb-6">
                  <Gauge size={40} strokeWidth={1.2} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900">Experiência do usuário</h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  Uma experiência projetada para facilitar a jornada de compra do usuário e transformar visitantes em clientes. Otimizada para carregar instantaneamente, mantendo interatividade e qualidade visual sem atraso.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 4. WORKFLOW / ESTEIRA DE EXECUÇÃO REFEITA (COM DETALHES DE CONTORNO ACENTUADOS) */}
      <section id="processo" className="py-24 px-6 md:px-10 lg:px-14 xl:px-40 border-t border-white/10 bg-gradient-to-b from-black to-[#5B51D8]/02">
        <div className="w-full max-w-[1000px] mx-auto">

          <div className="mb-20 md:text-center">
            <h3 className="text-3xl md:text-4xl font-semibold">Como vamos trabalhar juntos</h3>
            <p className="text-white/50 font-light mt-4 max-w-2xl md:mx-auto text-sm md:text-base">
              Um processo transparente e descomplicado para tirar o seu projeto do papel.
            </p>
          </div>

          {/* Container Principal da Linha do Tempo */}
          <div className="flex flex-col items-center w-full">

            {/* INÍCIO (NÃO-CARD): Identificação do problema */}
            <div className="flex flex-col items-center">

              <div className="w-full max-w-[650px] p-6 md:p-8 rounded-2xl border border-white/20 bg-black hover:border-white/30 transition-colors duration-300 relative group">
                <span className="absolute top-4 right-4 text-xs font-mono px-2 py-0.5 bg-[#38761d] rounded text-white">
                  Concluída
                </span>
                <div className="text-white/40 font-mono text-xs uppercase tracking-wider mb-2">fase 1</div>
                <h4 className="text-xl mb-3 text-white">Identificação do Problema</h4>
                <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                  Você já entendeu que precisa de um posicionamento digital estratégico. Lucra offline e às vezes online, mas não tem clareza de como profissionalizar sua presença digital, nem estratégias claras para escalar seus resultados.
                </p>
              </div>

              {/* Linha Conectora com presença acentuada */}
              <div className="w-[2px] h-12 bg-gradient-to-b from-white/25 to-[#5B51D8]" />
            </div>

            {/* CARD 01 - ALINHAMENTO */}
            <div className="w-full max-w-[650px] p-6 md:p-8 rounded-2xl border border-[#5B51D8] bg-[#5B51D8]/05 shadow-xl shadow-[#5B51D8]/5 backdrop-blur-sm relative group">
              <span className="absolute top-4 right-4 text-xs font-mono px-2 py-0.5 bg-[#5B51D8] rounded text-white">
                Você está aqui
              </span>
              <div className="text-[#8B83FF] font-mono text-xs uppercase tracking-wider mb-2">fase 2</div>
              <h4 className="text-xl mb-3 text-white">Alinhamento Inicial</h4>
              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                Vamos entender juntos seus objetivos de negócio, suas vantagens e desafios para então analisar o cenário e propor um caminho claro que se estenda até os seus objetivos. Para isso, basta <a href="#form" className="underline hover:text-[#8B83FF] cursor-pointer">entrar em contato</a>.
              </p>
            </div>

            {/* Linha Conectora forte entre Card 1 e Card 2 */}
            <div className="w-[2px] h-12 bg-[#5B51D8]" />

            {/* CARD 02 - DESIGN */}
            {/* Contorno cinza acentuado de border-white/5 para border-white/20 */}
            <div className="w-full max-w-[650px] p-6 md:p-8 rounded-2xl border border-white/20 bg-black hover:border-white/30 transition-colors duration-300 relative group">
              <div className="text-white/40 font-mono text-xs uppercase tracking-wider mb-2">fase 3</div>
              <h4 className="text-xl mb-3 text-white">Proposta Estrutural e Estratégica</h4>
              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                Criamos o esqueleto estratégico da sua página antes de qualquer linha refinada de design ou código. Aqui, definimos onde e como posicionar as informações: como comunicar promessas, apresentar produtos, a estrutura dos formulários e o posicionamento das chamadas de ação (CTAs).
              </p>
            </div>

            {/* Linha Conectora cinza acentuada de bg-white/5 para bg-white/20 */}
            <div className="w-[2px] h-12 bg-white/20" />

            {/* CARD 03 - APROVAÇÃO */}
            <div className="w-full max-w-[650px] p-6 md:p-8 rounded-2xl border border-white/20 bg-black hover:border-white/30 transition-colors duration-300 relative group">
              <div className="text-white/40 font-mono text-xs uppercase tracking-wider mb-2">fase 4</div>
              <h4 className="text-xl mb-3 text-white">Desenvolvimento e Validação</h4>
              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                Transformamos a estrutura e a estratégia aprovadas em uma página real, extremamente rápida e moderna, com alta fidelidade ao que foi planejado. Todo o projeto é desenvolvido com código limpo, totalmente responsivo e otimizado para SEO, garantindo uma adaptação completa para telas de computadores e celulares.
              </p>
            </div>

            {/* Linha Conectora final para o ponto de entrega */}
            <div className="w-[2px] h-12 bg-gradient-to-b from-white/20 to-emerald-500/50" />

            {/* FIM (NÃO-CARD): Entrega */}
            <div className="flex flex-col items-center">
              {/* Contorno do badge de entrega acentuado para contrastar suavemente */}
              <div className="flex items-center gap-3 bg-white/5 border border-emerald-500/40 px-5 py-2 rounded-full backdrop-blur-sm shadow-lg shadow-emerald-500/5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs md:text-sm font-semibold tracking-wide text-emerald-400 uppercase">
                  Entrega do Projeto
                </span>
              </div>
              <p className="text-sm mt-6 tracking-widest text-white/70">30-90 DIAS</p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FORMULÁRIO DE CONTATO (ÂNCORA AUTOMÁTICA #form) */}
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
}