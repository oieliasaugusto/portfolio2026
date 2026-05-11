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
      {/* <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 text-center">Sobre mim</h1>
      <p className="text-center text-[hsl(var(--muted-foreground))] mb-16 max-w-2xl">
        Conheça mais sobre a minha trajetória e habilidades como designer digital.
      </p> */}

      <div className="w-full max-w-[1000px] mt-[-52px] flex flex-col md:flex-row gap-8">

        {/* Profile Card */}
        <div className="flex-1">
          <div id="card_EliasAugusto" className="glass-card mx-auto rounded-lg flex flex-col w-[65%] p-6 transition-shadow relative h-full">
            <div className="absolute left-[60%] top-0 mt-[-20%]"><BadgeGiratorio /></div>
            <div className="bg-white h-[300px] rounded-lg"><img src="/Eli_profile.png" alt="Homem pardo, de óculos redondos e cabelos cacheados, olhando para a câmera"
              className="h-[375px] left-32 top-[-50px] absolute" /></div>
            <div className="pt-8 flex flex-col flex-grow">
              <div className="flex items-center justify-between gap-8">
                <h2 className="text-4xl lg:text-4xl font-bold text-[hsl(var(--foreground))] mb-2 leading-tight">
                  Elias Augusto</h2>
                {/* <div className="flex gap-2">
                  <a href="#"><img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" /></a>
                  <a href="#"><img src="/mail.svg" alt="Mail" className="w-6 h-6" /></a>
                  <a href="#"><img src="/whatsapp.svg" alt="Whatsapp" className="w-6 h-6" /></a>
                </div> */}
              </div>
              <p className="text-[hsl(var(--tertiary))] text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Designer digital</p>
              <p className="text-[hsl(var(--muted-foreground))] text-base font-light leading-relaxed mb-4">
                Sou um profissional com habilidades multidisciplinares que se integram: experiente em interfaces digitais, motion, desenvolvimento low-code e redesign de marcas. Apaixonado por cinema, música boa, patinação e RPG de ação.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Panel */}
        {/* <div className="flex-1 flex flex-col">
          <div className="glass-card rounded-lg flex flex-col w-full p-8 transition-shadow h-full justify-center">
            <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-8">Habilidades Profissionais</h3>
            
            <div className="flex flex-col gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-white/90">{skill.name}</span>
                    <span className="text-sm font-light text-[hsl(var(--primary))]">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[hsl(var(--primary))] rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

      </div>
    </div>
  );
}
