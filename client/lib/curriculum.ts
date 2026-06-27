export interface Role {
  title: string;
  period: string;
  duration: string;
  activities: string[];
}

export interface Experience {
  company: string;
  location: string;
  roles: Role[];
}

export interface Certification {
  title: string;
  institution: string;
  date: string;
}

export const experiencesData: Experience[] = [
  {
    company: "KODIE Academy (anteriormente Vai na Web)",
    location: "Remoto, 4 anos e 6 meses – Rio de Janeiro, Brasil",
    roles: [
      {
        title: "Designer Pleno",
        period: "Mar 2025 – Mai 2026",
        duration: "1 ano e 2 meses",
        activities: [
          "Criação de KVs e peças gráficas para campanha de lançamento da marca",
          "Design de interface para Landing Page, Transmissão de LIVE (OBS Studio)",
          "Experiência do usuário e design de interfaces intuitivas para App de Portugal",
          "Colaboração técnica direta com desenvolvedores front-end e back-end"
        ]
      },
      {
        title: "Designer Jr II",
        period: "Jun 2023 – Mar 2025",
        duration: "1 ano e 9 meses",
        activities: [
          "Criação de Identidade visual, Sites e Landing Pages para clientes internacionais",
          "Fluxo do usuário e escrita UX para construção de IA conversacional",
          "Design de experiência para jogos digitais para fins educacionais",
          "UX e UI Design para desenvolvimento web responsivo",
          "Design de Pitch Decks e materiais de apoio comercial",
          "Motion, edição de vídeo e peças gráficas para redes sociais"
        ]
      },
      {
        title: "Designer Jr",
        period: "Nov 2021 – Jun 2023",
        duration: "1 ano e 8 meses",
        activities: [
          "Design de experiência educacional com gamificação, desenvolvimento low-code com Construct3 (C3)",
          "Motion graphics e design de layouts para comunicação interna",
          "Design de interfaces para produtos institucionais"
        ]
      }
    ]
  },
  {
    company: "Mobiplus",
    location: "Remoto, 10 meses – Rio de Janeiro, Brasil",
    roles: [
      {
        title: "Motion designer freelancer",
        period: "Ago 2021",
        duration: "Temporário",
        activities: [
          "Design de Personagem, Ilustração 2D, Rigging e Animação vetorial para construção de avatar de marca para criação de conteúdo no YouTube"
        ]
      },
      {
        title: "Analista de Redes Sociais Jr",
        period: "Nov 2020 – Jul 2021",
        duration: "",
        activities: [
          "Estratégias de posicionamento, comunicação textual e visual da marca",
          "Análise de métricas, relatórios e otimização de performance (LinkedIn page)"
        ]
      }
    ]
  }
];

export const certificationsData: Certification[] = [

// Atual ou Recente

  {
    title: "Linguagem Secreta: Treinamento em Psicologia Aplicada ao Design, Marketing e Negócio",
    institution: "Curso ENVIESADOS, Rian Dutra",
    date: "EM CURSO"
  },

  // {
  //   title: "AI Fluency: Framework & Foundations",
  //   institution: "Antrophic Academy",
  //   date: "2026"
  // },


// 2025
  {
    title: "UI Design Avançado",
    institution: "ORIGAMID Cursos de Web Design",
    date: "2025"
  },
  {
  title: "UX Design Heurísticas",
  institution: "ORIGAMID Cursos de Web Design",
  date: "2025"
  },
  {
  title: "Tipografia Avançada para Web",
  institution: "ORIGAMID Cursos de Web Design",
  date: "2025"
  },

// 2024
  {
  title: "Formação de Desenvolvedor(a) Front-end",
  institution: "Vai na Web",
  date: "2024"
  },
  {
    title: "Design de Produto Lean e UX",
    institution: "Domestika – Óscar Pérez",
    date: "2024"
  },

// 2023
{
  title: "Design Thinking: viabilizando soluções",
  institution: "Alura",
  date: "2023"
},
{
  title: "Branding: criando uma marca forte",
  institution: "Alura",
  date: "2023"
},

// OLD
  {
    title: "Motion Design Essentials",
    institution: "Layer Lemonade – Dhyan Shanasa",
    date: "2018"
  }
];