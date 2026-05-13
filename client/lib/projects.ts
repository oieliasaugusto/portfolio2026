export interface Project {
  id: string;
  title: string;
  description: string;
  banner: string;
  path: string;
}

export const projects: Project[] = [
  {
    id: "fala-com-a-chris",
    title: "Fala com a Chris",
    description: "Aplicativo MVP criado para conectar profissionais e contratantes em Portugal.",
    banner: "/portfolio/ptchris/Capa.jpg",
    path: "/projetos/fala-com-a-chris",
  },
  {
    id: "kodie-academy",
    title: "KODIE Academy",
    description: "Campanha de lançamento de marca ao mercado de educação e tecnologia latino-americano.",
    banner: "/portfolio/kodie/KODIE.jpg",
    path: "/projetos/kodie-academy",
  },
  {
    id: "wiligent",
    title: "Wiligent",
    description: "Redesign de identidade visual, design de Landing page e E-book, com foco em conversão.",
    banner: "/portfolio/wiligent/WiligentMiami.jpg",
    path: "/projetos/wiligent",
  },
  // {
  //   id: "invites",
  //   title: "Convites",
  //   description: "Convites personalizados para eventos.",
  //   banner: "/portfolio/convites/convites.jpg",
  //   path: "/projetos/convites",
  // },


  // {
  //   id: "kensei",
  //   title: "KENSEI",
  //   description: "Criação de identidade visual e materiais digitais para presença sólida e consistente.",
  //   banner: "/portfolio/kensei/KENSEI.jpg",
  //   path: "/projetos/kensei",
  // },
  // {
  //   id: "mobiplus",
  //   title: "Mobiplus",
  //   description: "Plataforma de soluções e inteligência em tecnologia para otimização de negócios.",
  //   banner: "/portfolio/mobiplus/Mobiplus.jpg",
  //   path: "/projetos/mobiplus",
  // },
  // {
  //   id: "toca",
  //   title: "Toca do Sabor",
  //   description: "Identidade visual marcante e elementos de comunicação diversos para um negócio regional.",
  //   banner: "/portfolio/tocasabor/TocaDoSabor.jpg",
  //   path: "/projetos/toca",
  // },
  // {
  //   id: "vnw",
  //   title: "Vai na Web",
  //   description: "Identidade moderna e kit de conteúdo para redes e campanhas.",
  //   banner: "/portfolio/vnw/VaiNaWeb.jpg",
  //   path: "/projetos/vnw",
  // },
];
