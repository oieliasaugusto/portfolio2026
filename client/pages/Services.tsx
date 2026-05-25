import React from "react";
import { Link } from "react-router-dom";
import { projects } from "@/lib/projects";

const services = [
  {
    title: "Web design",
    description: "Criação de landing pages, sites institucionais e aplicativos com foco em conversão e usabilidade (UI/UX).",
    examples: ["wiligent", "fala-com-a-chris"]
  },
  {
    title: "Brand design",
    description: "Desenvolvimento de identidade visual forte e memorável para destacar sua marca no mercado.",
    examples: ["kodie-academy", "wiligent"]
  },
  {
    title: "Motion design",
    description: "Animação 2D, storytelling visual e vídeos dinâmicos para engajar o público.",
    examples: [] // Using reel or general examples if none match perfectly
  }
];

export default function Services() {
  return (
    <div className="min-h-screen text-foreground bg-black pt-32 pb-16 px-6 md:px-10 lg:px-14 xl:px-40 flex flex-col items-center">
      <div className="w-full max-w-[1200px]">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[hsl(var(--foreground))]">
          Serviços
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-card rounded-lg p-8 flex flex-col h-full border border-white/10 hover:border-white/20 transition-colors">
              <h2 className="text-2xl font-bold text-[hsl(var(--tertiary))] mb-4 uppercase tracking-wider">
                {service.title}
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed flex-grow mb-6">
                {service.description}
              </p>
              
              {service.examples.length > 0 && (
                <div className="mt-auto">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-3">
                    Projetos Relacionados
                  </h3>
                  <div className="flex flex-col gap-2">
                    {service.examples.map(exampleId => {
                      const project = projects.find(p => p.id === exampleId);
                      if (!project) return null;
                      return (
                        <Link 
                          key={project.id} 
                          to={project.path}
                          className="text-sm text-white hover:text-[hsl(var(--primary))] transition-colors flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--tertiary))]"></span>
                          {project.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
