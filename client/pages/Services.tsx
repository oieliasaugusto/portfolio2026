import React from "react";
import { Link } from "react-router-dom";
import { projects } from "@/lib/projects";
import ContactForm from "@/components/ContactForm";
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
      <section className="relative min-h-[90vh] pt-40 pb-20 px-6 md:px-10 lg:px-14 xl:px-40 flex items-center justify-center border-b border-white/5 overflow-hidden">

        {/* Container do Vídeo de Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <video
            autoPlay
            playsInline
            loop
            muted
            className="w-full h-full object-cover scale-105 opacity-90 brightness-50"
          >
            <source src="/Loop.webm" type="video/webm" />
          </video>
          {/* Gradação para misturar o vídeo perfeitamente com o fundo preto da página */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black z-10" />
        </div>

        {/* Conteúdo da Hero */}
        <div className="w-full max-w-[1200px] text-center relative z-20 backdrop-blur-[2px] py-8 rounded-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B51D8]/10 border border-[#5B51D8]/30 text-[#8B83FF] text-xs uppercase tracking-widest mb-6 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5B51D8] animate-pulse"></span>
            Páginas de Venda do Design ao Código
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-5xl mx-auto !leading-[1.3] mb-6">
            Experiências digitais de alto impacto
          </h1>

          <p className="text-sm md:text-lg text-white/60 font-light leading-relaxed mb-10">
            Experiências que convertem narrativas de valor em conversão para o seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#form"
              className="w-full sm:w-auto text-center bg-[#5B51D8] hover:bg-[#4A40C7] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#5B51D8]/20 hover:scale-[1.02]"
            >
              Quero Digitalizar
            </a>
            <a
              href="#processo"
              className="w-full sm:w-auto text-center bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-8 py-4 rounded-xl transition-all duration-300"
            >
              Ver Portfolio
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
                <h3 className="text-xl font-bold mb-3 text-neutral-900">Narrativa de Valorização</h3>
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
                <h3 className="text-xl font-bold mb-3 text-neutral-900">Identidade Aplicada</h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  Sua marca expressa em cada pixel. Cores, tipografias fortes e elements visuais são fundidos sob medida, criando uma presença digital memorável que afasta o amadorismo.
                </p>
              </div>
            </div>

            {/* Bloco 3: Experiência Veloz */}
            <div className="p-8 rounded-2xl bg-white shadow-2xl shadow-black/10 flex flex-col justify-between transform hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="text-[#5B51D8] mb-6">
                  <Gauge size={40} strokeWidth={1.2} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900">Experiência Veloz</h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  Páginas otimizadas que carregam instantaneamente. Gráficos leves e código limpo garantem que nenhum cliente em potencial vá embora por lentidão.
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
            <h2 className="text-xs uppercase tracking-[0.3em] text-[#8B83FF] mb-3 font-mono">Processo</h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Como vamos trabalhar juntos</h3>
            <p className="text-white/50 font-light mt-4 max-w-lg md:mx-auto text-sm md:text-base">
              Uma esteira simples e transparente para tirar o seu projeto do papel sem complicações técnicas.
            </p>
          </div>

          {/* Container Principal da Linha do Tempo */}
          <div className="flex flex-col items-center w-full">

            {/* INÍCIO (NÃO-CARD): Identificação do problema */}
            <div className="flex flex-col items-center">
              {/* Contorno cinza do badge acentuado de border-white/10 para border-white/25 */}
              <div className="flex items-center gap-3 bg-white/5 border border-white/25 px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-xs md:text-sm font-medium tracking-wide text-white/90">
                  Identificação do Problema
                </span>
              </div>
              {/* Linha Conectora com presença acentuada */}
              <div className="w-[2px] h-12 bg-gradient-to-b from-white/25 to-[#5B51D8]" />
            </div>

            {/* CARD 01 - ALINHAMENTO */}
            <div className="w-full max-w-[650px] p-6 md:p-8 rounded-2xl border border-[#5B51D8] bg-[#5B51D8]/05 shadow-xl shadow-[#5B51D8]/5 backdrop-blur-sm relative group">
              <span className="absolute top-4 right-4 text-xs font-mono px-2 py-0.5 bg-[#5B51D8] rounded text-white animate-pulse">
                Você está aqui
              </span>
              <div className="text-[#8B83FF] font-mono text-xs uppercase tracking-wider mb-2">Etapa 01</div>
              <h4 className="text-xl font-bold mb-3 text-white">Alinhamento & Briefing</h4>
              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                Vamos entender juntos seus objetivos de negócio, suas vantagens e desafios, para então definirmos a melhor solução. Tudo começa ao completar <a href="#form" className="underline text-[#8B83FF]">o form de contato</a>.
              </p>
            </div>

            {/* Linha Conectora forte entre Card 1 e Card 2 */}
            <div className="w-[2px] h-12 bg-[#5B51D8]" />

            {/* CARD 02 - DESIGN */}
            {/* Contorno cinza acentuado de border-white/5 para border-white/20 */}
            <div className="w-full max-w-[650px] p-6 md:p-8 rounded-2xl border border-white/20 bg-black hover:border-white/30 transition-colors duration-300 relative group">
              <div className="text-white/40 font-mono text-xs uppercase tracking-wider mb-2">Etapa 02</div>
              <h4 className="text-xl font-bold mb-3 text-white">Visual & Proposta</h4>
              <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
                Criamos um visual único e marcante feito sob medida para sua empresa. Nada de modelos prontos: moldamos a página para guiar a atenção do cliente direto para a compra.
              </p>
            </div>

            {/* Linha Conectora cinza acentuada de bg-white/5 para bg-white/20 */}
            <div className="w-[2px] h-12 bg-white/20" />

            {/* CARD 03 - APROVAÇÃO */}
            <div className="w-full max-w-[650px] p-6 md:p-8 rounded-2xl border border-white/20 bg-black hover:border-white/30 transition-colors duration-300 relative group">
              <div className="text-white/40 font-mono text-xs uppercase tracking-wider mb-2">Etapa 03</div>
              <h4 className="text-xl font-bold mb-3 text-white">Validação & Ajustes</h4>
              <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
                Você analisa o modelo interativo antes dele ir ao ar. Revisamos juntos cada detalhe, texto e imagem até ficar exatamente do jeito que você sonhou.
              </p>
            </div>

            {/* Linha Conectora cinza acentuada */}
            <div className="w-[2px] h-12 bg-white/20" />

            {/* CARD 04 - DESENVOLVIMENTO */}
            <div className="w-full max-w-[650px] p-6 md:p-8 rounded-2xl border border-white/20 bg-black hover:border-white/30 transition-colors duration-300 relative group">
              <div className="text-white/40 font-mono text-xs uppercase tracking-wider mb-2">Etapa 04</div>
              <h4 className="text-xl font-bold mb-3 text-white">Construção & Código</h4>
              <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
                Transformamos o visual aprovado em uma página real, extremamente rápida, segura e totalmente adaptada para funcionar perfeitamente em celulares e computadores.
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
            </div>

          </div>
        </div>
      </section>

      {/* 5. FORMULÁRIO DE CONTATO (ÂNCORA AUTOMÁTICA #form) */}
      <div id="form">
        <ContactForm />
      </div>
    </div>
  );
}