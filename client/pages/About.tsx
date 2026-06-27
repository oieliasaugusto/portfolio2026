import React from "react";
import BadgeGiratorio from "@/components/Badge";
import { experiencesData, certificationsData } from '../lib/curriculum'; // Certifique-se de que o arquivo data.ts está na mesma pasta

interface Skill {
  name: string;
  percentage: number;
}

const skills: Skill[] = [
  { name: "Motion", percentage: 95 },
  { name: "Low-code", percentage: 90 },
  { name: "Inteligência artificial", percentage: 85 }
];

export default function About() {
  return (
    <div className="min-h-screen text-foreground bg-black pt-32 pb-32 px-6 md:px-10 lg:px-14 xl:px-40 flex flex-col items-center justify-start">

      {/* Container do Profile Card */}
      <div className="w-full max-w-[1000px] mt-[-52px] flex flex-col md:flex-row gap-8 mb-24">
        
        {/* Profile Card */}
        <div className="flex-1">
          <div id="card_EliasAugusto" className="glass-card mx-auto rounded-lg flex flex-col w-[100%] md:w-[65%] p-6 transition-shadow relative h-full">
            <div className="absolute left-[24%] md:left-[60%] top-0 mt-[-20%]"><BadgeGiratorio /></div>
            <div className="bg-white h-[226px] md:h-[300px] rounded-lg">
              <img src="/Eli_profile.png" alt="Homem pardo, de óculos redondos e cabelos cacheados, olhando para a câmera"
                className="h-[300px] md:h-[375px] left-4 md:left-32 top-[-50px] absolute" /></div>
            <div className="pt-8 flex flex-col flex-grow">
              <div className="flex items-center justify-between gap-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-[hsl(var(--foreground))] mb-2 leading-tight">
                  Elias Augusto</h2>
              </div>
              <p className="text-[hsl(var(--tertiary))] text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Designer digital</p>
              <p className="text-[hsl(var(--muted-foreground))] text-sm md:text-md font-light leading-relaxed mb-4">
                Sou um profissional com habilidades multidisciplinares que se integram, permitindo a criação de ecossistemas digitais: de interfaces digitais funcionais e intuitivas (UI/UX) ao desenvolvimento low-code acelerado por IA.
                <br /><br />
                Meu trabalho também envolve criar e aplicar a identidade visual de marcas, de forma gráfica ou em constante movimento (com Motion). Em tempo livre, sou apaixonado por experiências cinematográficas imersivas, muitos estilos de música, patinação, rpg de ação e açaí – com paçoca, sempre!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Seção de Trajetória Integrada --- */}
      <div className="w-full max-w-[1000px] space-y-24 text-zinc-50 font-sans selection:bg-zinc-800">

<figure className="Logos w-full flex items-center justify-center flex-row wrap gap-8">
  <img src="../../public/logos/FRM.png" alt="Fundação Roberto Marinho" />
  <img src="../../public/logos/ITURRI.png" alt="ITURRI" />
  <img src="../../public/logos/KODIE.png" alt="KODIE Academy" />
  <img src="../../public/logos/Blip.png" alt="Blip" />
  <img src="../../public/logos/Labominas.png" alt="Labominas" />
  {/* <img src="../../public/logos/Wiligent.png" alt="Wiligent" />
  <img src="../../public/logos/Chris.png" alt="Fala com a Chris" /> */}
  <img src="../../public/logos/Taaqui.png" alt="TAAQUI" />
</figure>

<div>
<h2 className="text-2xl font-thin text-center pb-12 text-zinc-400 tracking-wider">Stack</h2>

<figure className="Logos w-full flex items-center justify-center flex-row wrap gap-12 h-8">
  
      <img src="../../public/logos/Figma.png" alt="Figma" />
      <img src="../../public/logos/Antigravity.webp" alt="Antigravity" />
      <img src="../../public/logos/After.png" alt="After Effects" />
      <img src="../../public/logos/Magnific.png" alt="Magnific" />
      <img src="../../public/logos/Cavalry.png" alt="Cavalry" />
      <img src="../../public/logos/Photoshop.png" alt="Photoshop" />
      <img src="../../public/logos/Affinity.png" alt="Affinity" />

    {/* LINGUAGENS */}
      <img src="../../public/logos/html.png" alt="HTML" />
      <img src="../../public/logos/css.png" alt="CSS" />

      {/* <img src="../../public/logos/Illustrator.png" alt="Illustrator" /> */}

  </figure>
</div>

        {/* Cursos e Certificações */}
        <div>
          <h2 className="!text-2xl font-thin text-center md:text-4xl mb-8 text-zinc-400 tracking-wider">
            Certificações</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationsData.map((cert, idx) => (
              <div key={idx} className="px-6 pt-6 pb-2 rounded-md bg-zinc-900/50 border border-zinc-700 hover:border-blue-500 transition-colors
              flex flex-col justify-between">
                <div className="pb-4">
                  <p className="text-sm pb-[2px] text-zinc-400">{cert.institution}</p>
                  <h3 className="text-md font-light text-zinc-200 leading-snug mb-2 tracking-wider">{cert.title}</h3>
                </div>
                <p className="text-xs font-mono text-zinc-500 mb-2">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}