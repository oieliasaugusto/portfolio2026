import React from "react";
import BadgeGiratorio from "@/components/Badge";

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
    <div className="min-h-screen text-foreground bg-black pt-32 pb-16 px-6 md:px-10 lg:px-14 xl:px-40 flex flex-col items-center justify-center">

      <div className="w-full max-w-[1000px] mt-[-52px] flex flex-col md:flex-row gap-8">

        {/* Profile Card */}
        <div className="flex-1">
          <div id="card_EliasAugusto" className="glass-card mx-auto rounded-lg flex flex-col w-[100%] md:w-[65%] p-6 transition-shadow relative h-full">
            <div className="absolute left-[20%] md:left-[60%] top-0 mt-[-20%]"><BadgeGiratorio /></div>
            <div className="bg-white h-[220px] md:h-[300px] rounded-lg">
              <img src="/Eli_profile.png" alt="Homem pardo, de óculos redondos e cabelos cacheados, olhando para a câmera"
                className="h-[300px] md:h-[375px] left-4 md:left-32 top-[-50px] absolute" /></div>
            <div className="pt-8 flex flex-col flex-grow">
              <div className="flex items-center justify-between gap-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-[hsl(var(--foreground))] mb-2 leading-tight">
                  Elias Augusto</h2>
                {/* <div className="flex gap-2">
                  <a href="#"><img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" /></a>
                  <a href="#"><img src="/mail.svg" alt="Mail" className="w-6 h-6" /></a>
                  <a href="#"><img src="/whatsapp.svg" alt="Whatsapp" className="w-6 h-6" /></a>
                </div> */}
              </div>
              <p className="text-[hsl(var(--tertiary))] text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Designer digital</p>
              <p className="text-[hsl(var(--muted-foreground))] text-sm md:text-base font-light leading-relaxed mb-4">
                Um profissional com habilidades multidisciplinares que se integram permitindo a criação de ecossistemas digitais. Experiente com interfaces digitais funcionais e intuitivas (UI/UX), além de desenvolvimento low-code acelerado por IA.
                <br /><br />
                Também trabalho com motion e identidade visual. Em tempo livre, sou apaixonado por experiências cinematográficas imersivas, muitos estilos de música, patinação, rpg de ação e açaí com paçoca – sempre!
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
