export interface Project {
  id: string;
  title: string;
  description: string;
  banner: string;
  path: string;
}

export const projects: Project[] = [
  {
    id: "kodie-academy",
    title: "KODIE Academy",
    description: "Campanha de lançamento de marca e mentoria exclusiva para médicos com foco em posicionamento premium.",
    banner: "/portfolio/kodie/KODIE.jpg",
    path: "/projetos/kodie-academy",
  },
  {
    id: "fala-com-a-chris",
    title: "Fala com a Chris",
    description: "Plataforma MVP conectando profissionais e contratantes em Portugal com interface moderna e intuitiva.",
    banner: "/portfolio/ptchris/ChrisPortugal.jpg",
    path: "/projetos/fala-com-a-chris",
  },
  {
    id: "wiligent",
    title: "Wiligent",
    description: "Sistema visual para marca e landing page com foco em conversão.",
    banner: "/portfolio/wiligent/WiligentMiami.jpg",
    path: "/projetos/wiligent",
  },
  {
    id: "kensei",
    title: "KENSEI",
    description: "Criação de identidade visual e materiais digitais para presença sólida e consistente.",
    banner: "/portfolio/kensei/KENSEI.jpg",
    path: "/projetos/kensei",
  },
  {
    id: "mobiplus",
    title: "Mobiplus",
    description: "Plataforma de soluções e inteligência em tecnologia para otimização de negócios.",
    banner: "/portfolio/mobiplus/Mobiplus.jpg",
    path: "/projetos/mobiplus",
  },
  {
    id: "toca",
    title: "Toca do Sabor",
    description: "Identidade visual marcante e elementos de comunicação diversos para um negócio regional.",
    banner: "/portfolio/tocasabor/TocaDoSabor.jpg",
    path: "/projetos/toca",
  },
  {
    id: "vnw",
    title: "Vai na Web",
    description: "Identidade moderna e kit de conteúdo para redes e campanhas.",
    banner: "/portfolio/vnw/VaiNaWeb.jpg",
    path: "/projetos/vnw",
  },
];
