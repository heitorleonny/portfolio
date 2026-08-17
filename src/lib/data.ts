export const profile = {
  name: "Heitor Leonny",
  firstName: "HEITOR",
  lastName: "LEONNY",
  role: "FULL STACK DEVELOPER | GEN AI",
  tagline: "BACKEND & CLOUD • IA GENERATIVA • ENGENHARIA DE SOFTWARE",
  location: "RECIFE — PE, BRASIL",
  email: "heitorleonny.contact@gmail.com",
  phone: "(81) 98395-8736",
  whatsapp: "https://wa.me/5581983958736",
  github: "https://github.com/heitorleonny",
  linkedin: "https://www.linkedin.com/in/heitor-leonny-24b564240/",
  cvUrl: "/cv/Heitor-Leonny-CV.pdf",
  photo: "/heitor.jpg",
  bio: "Estudante de Sistemas de Informação na UFRPE e desenvolvedor Full Stack com foco em backend e computação em nuvem (AWS). Construo APIs em TypeScript (NestJS) e Python (FastAPI) e assistentes de IA generativa com Amazon Bedrock. Antes de migrar para desenvolvimento, liderei a área de Projetos da Seed a Bit (empresa júnior da UFRPE), saindo de Analista a Diretor em pouco mais de dois anos.",
  heroBadges: [
    "TypeScript & NestJS",
    "Python & FastAPI",
    "AWS & Bedrock",
    "React & Next.js",
    "PostgreSQL & MySQL",
  ],
  stats: [
    { label: "AWS CERTIFIED", value: "CLOUD PRACTITIONER" },
    { label: "CSAT CLIENTES", value: "5/5" },
    { label: "NPS CLIENTES", value: "10/10" },
  ],
};

export type TimelineEntry = {
  id: string;
  lane: string;
  title: string;
  org: string;
  start: number; // decimal year, e.g. 2023 + (month-1)/12
  end: number;
  current?: boolean;
  ongoingEducation?: boolean;
  description?: string;
};

const ym = (year: number, month: number) => year + (month - 1) / 12;

export const TIMELINE_START = ym(2022, 9);
export const TIMELINE_END = ym(2027, 3);
export const TIMELINE_TODAY = ym(2026, 8);

export const timeline: TimelineEntry[] = [
  {
    id: "nuageit",
    lane: "NuageIT",
    title: "Full Stack Developer | Gen AI",
    org: "NuageIT",
    start: ym(2025, 8),
    end: TIMELINE_TODAY,
    current: true,
    description:
      "APIs REST em NestJS/FastAPI, infraestrutura AWS e agentes de IA generativa com Amazon Bedrock.",
  },
  {
    id: "fejepe",
    lane: "FEJEPE",
    title: "Especialista em Inteligência de Dados",
    org: "FEJEPE",
    start: ym(2026, 1),
    end: ym(2026, 6),
    description:
      "Inteligência de dados para a federação estadual de empresas juniores de Pernambuco.",
  },
  {
    id: "seedabit-diretor",
    lane: "Seed a Bit",
    title: "Diretor de Projetos",
    org: "Seed a Bit Tecnologia",
    start: ym(2024, 12),
    end: ym(2026, 1),
    description:
      "Liderança da área de Projetos. CSAT 5/5 e NPS 10/10 em 2025, com aumento de renovação de contratos e ticket médio.",
  },
  {
    id: "seedabit-gerente",
    lane: "Seed a Bit",
    title: "Gerente de Projetos",
    org: "Seed a Bit Tecnologia",
    start: ym(2024, 8),
    end: ym(2024, 12),
    description:
      "Gestão do time de Projetos e atuação como Product Owner nas entregas aos clientes.",
  },
  {
    id: "seedabit-analista",
    lane: "Seed a Bit",
    title: "Analista de Projetos",
    org: "Seed a Bit Tecnologia",
    start: ym(2023, 8),
    end: ym(2024, 8),
    description:
      "Sites institucionais em WordPress e primeiros projetos com React e Next.js.",
  },
  {
    id: "ufrpe",
    lane: "Formação",
    title: "Bacharelado em Sistemas de Informação",
    org: "UFRPE",
    start: ym(2022, 11),
    end: ym(2026, 12),
    ongoingEducation: true,
    description: "Conclusão prevista para dezembro de 2026.",
  },
];

export const laneOrder = ["NuageIT", "FEJEPE", "Seed a Bit", "Formação"];

export type Project = {
  id: string;
  title: string;
  org?: string;
  category: "pessoal" | "nuageit" | "seedabit";
  featured?: boolean;
  tag: string;
  description: string;
  bullets?: string[];
  stack: string[];
  link?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: "portal-fejepe",
    title: "Portal FEJEPE",
    category: "pessoal",
    featured: true,
    tag: "INTELIGÊNCIA DE DADOS",
    description:
      "Projeto pessoal para acompanhar e comparar o desempenho de 43 empresas juniores do estado de Pernambuco, cruzando indicadores de gestão e resultados para apoiar decisões de inteligência de dados na FEJEPE.",
    bullets: [
      "Consolidação de indicadores de 43 empresas juniores de PE",
      "Calculadora de cluster/SDE para tracking de desempenho",
      "Apoio à tomada de decisão orientada por dados na FEJEPE",
    ],
    stack: ["TypeScript", "Python", "Docker"],
    link: "https://github.com/heitorleonny/projetos",
  },
  {
    id: "send-email-api",
    title: "Send Email API",
    category: "pessoal",
    tag: "MICROSSERVIÇO",
    description:
      "Microsserviço de envio de e-mails desenvolvido com Java e Spring Boot.",
    stack: ["Java", "Spring Boot", "PostgreSQL"],
    link: "https://github.com/heitorleonny/send-email-api",
  },
  {
    id: "plataforma-de-eventos",
    title: "Plataforma de Eventos",
    category: "pessoal",
    tag: "GESTÃO DE EVENTOS",
    description:
      "Plataforma para criação e inscrição em eventos, com exportação da lista de participantes em CSV e geração automática de certificados.",
    stack: ["Python", "Django"],
    link: "https://github.com/heitorleonny/Plataforma-de-Eventos",
  },
  {
    id: "escola-movel",
    title: "Escola Móbile",
    org: "NuageIT",
    category: "nuageit",
    tag: "IA NA EDUCAÇÃO",
    description:
      "Uso de IA generativa para classificar, responder e criar questões escolares.",
    stack: ["Python", "Amazon Bedrock", "AWS S3", "DynamoDB", "SQS"],
  },
  {
    id: "manservai",
    title: "ManservAI",
    org: "NuageIT",
    category: "nuageit",
    tag: "AGENTE DE RH",
    description: "Agente de IA para a área de RH da empresa Manserv.",
    stack: ["Python", "Amazon Bedrock", "Streamlit", "AWS"],
  },
  {
    id: "api-notas-fiscais",
    title: "API de Notas Fiscais",
    org: "NuageIT · Surf Telecom",
    category: "nuageit",
    tag: "VENDAS EXTERNAS",
    description: "Criação de endpoint para vendas externas de chips.",
    stack: ["Node.js", "NestJS", "PHP", "MySQL"],
  },
  {
    id: "bloqueio-sbcs",
    title: "Bloqueio SBCs",
    org: "NuageIT · Surf Telecom",
    category: "nuageit",
    tag: "SERVERLESS",
    description: "Projeto serverless para bloqueio em massa de chips.",
    stack: ["Serverless", "NestJS", "PHP", "MySQL", "AWS S3", "SQS"],
  },
  {
    id: "quill",
    title: "Quill",
    org: "NuageIT",
    category: "nuageit",
    tag: "AGENTE ESPECIALISTA",
    description:
      "Agente de IA especialista em due diligence de negligências imobiliárias.",
    stack: ["Python", "Amazon Bedrock", "React", "MongoDB"],
  },
  {
    id: "elefante-letrado",
    title: "Elefante Letrado",
    org: "NuageIT",
    category: "nuageit",
    tag: "IA & VOZ",
    description:
      "Aplicação em nuvem para classificar a fala de crianças.",
    stack: ["Python", "Amazon Bedrock", "Amazon Transcribe", "AWS"],
  },
  {
    id: "seed-a-bit-cases",
    title: "Cases institucionais",
    org: "Seed a Bit Tecnologia",
    category: "seedabit",
    tag: "GESTÃO & ENTREGA",
    description:
      "Sites institucionais em WordPress e projetos em React/Next.js entregues como Analista; como PO e Diretor, liderança da área de Projetos com CSAT 5/5 e NPS 10/10 em 2025.",
    stack: ["WordPress", "React", "Next.js", "Figma"],
  },
];

export type SkillIcon =
  | "cloud"
  | "code"
  | "layers"
  | "terminal"
  | "zap"
  | "database"
  | "container"
  | "bot"
  | "wand"
  | "search"
  | "dynamodb"
  | "chart"
  | "react"
  | "globe"
  | "wordpress"
  | "figma"
  | "clipboard"
  | "scrum"
  | "users"
  | "git";

export type SkillGroup = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  skills: { name: string; note: string; icon: SkillIcon }[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "sys-01",
    title: "Cloud & Backend",
    subtitle: "APIs, Infraestrutura & Dados",
    description:
      "Construção de APIs REST e infraestrutura em nuvem para aplicações escaláveis em produção.",
    skills: [
      { name: "AWS", note: "Lambda, S3, EC2, SQS, SAM, CloudWatch", icon: "cloud" },
      { name: "TypeScript", note: "APIs modulares com NestJS", icon: "code" },
      { name: "NestJS", note: "Arquitetura em camadas", icon: "layers" },
      { name: "Python", note: "APIs com FastAPI e Django", icon: "terminal" },
      { name: "FastAPI", note: "Serviços assíncronos", icon: "zap" },
      { name: "PostgreSQL", note: "Modelagem relacional", icon: "database" },
      { name: "MySQL", note: "Queries & persistência", icon: "database" },
      { name: "Docker", note: "Containerização", icon: "container" },
    ],
  },
  {
    id: "sys-02",
    title: "IA Generativa",
    subtitle: "Agentes & LLMs",
    description:
      "Construção de assistentes e agentes de IA generativa aplicados a processos reais de negócio.",
    skills: [
      { name: "Amazon Bedrock", note: "Agentes & assistentes", icon: "bot" },
      { name: "Prompt Engineering", note: "Guardrails & contexto", icon: "wand" },
      { name: "RAG", note: "Bases de conhecimento vetorizadas", icon: "search" },
      { name: "Amazon DynamoDB", note: "Persistência para agentes", icon: "dynamodb" },
      { name: "Streamlit", note: "Prototipagem de dados", icon: "chart" },
    ],
  },
  {
    id: "sys-03",
    title: "Frontend & Gestão",
    subtitle: "Produto, Web & Liderança",
    description:
      "Interfaces web modernas somadas à vivência em liderança de times e gestão de produto.",
    skills: [
      { name: "React", note: "Componentes & hooks", icon: "react" },
      { name: "Next.js", note: "App Router", icon: "globe" },
      { name: "WordPress", note: "Sites institucionais", icon: "wordpress" },
      { name: "Figma", note: "Prototipagem & UI", icon: "figma" },
      { name: "Product Owner", note: "Gestão de entregas", icon: "clipboard" },
      { name: "Scrum", note: "Rituais ágeis", icon: "scrum" },
      { name: "Liderança", note: "Direção da área de Projetos", icon: "users" },
      { name: "Git / GitHub", note: "Versionamento & code review", icon: "git" },
    ],
  },
];

export const certification = {
  title: "AWS Certified Cloud Practitioner",
  issuer: "Amazon Web Services",
  date: "Fevereiro de 2026",
};
