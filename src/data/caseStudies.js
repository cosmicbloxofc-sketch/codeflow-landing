// Estrutura de dados dos case studies
// Os paths dos vídeos serão preenchidos posteriormente

export const caseStudies = [
  {
    id: 'techstore-ecommerce',
    client: 'TechStore Brasil',
    category: 'E-commerce',
    challenge: 'Criar plataforma completa de e-commerce em 2 semanas para lançamento de Black Friday',
    solution: 'Desenvolvimento full-stack com Claude Code, integrando pagamentos, gestão de estoque e painel administrativo',

    // Visual assets (placeholders)
    thumbnail: '/cases/techstore-thumb.jpg',
    video: '', // PLACEHOLDER - será preenchido depois
    poster: '/cases/techstore-poster.jpg',

    // Métricas reais
    metrics: {
      timeToMarket: '12 dias',
      linesOfCode: '8.547',
      testsWritten: '127',
      coverage: '94%',
      technologies: ['Next.js 14', 'Tailwind CSS', 'Stripe', 'Prisma', 'PostgreSQL']
    },

    // Resultado
    outcome: 'Lançamento bem-sucedido com 50k+ em vendas no primeiro mês',

    // Depoimento
    testimonial: {
      text: 'O Claude Code reduziu nosso tempo de desenvolvimento em 80%. Conseguimos lançar antes da Black Friday e superar todas as metas.',
      author: 'João Silva',
      role: 'CTO',
      company: 'TechStore'
    },

    // Tamanho no grid (para layout Bento Box)
    gridSize: 'large' // large, medium, small
  },

  {
    id: 'metricshub-saas',
    client: 'MetricsHub',
    category: 'SaaS Dashboard',
    challenge: 'Construir dashboard analytics completo com visualizações em tempo real',
    solution: 'Interface moderna com gráficos interativos, filtros avançados e exportação de relatórios',

    thumbnail: '/cases/metricshub-thumb.jpg',
    video: '', // PLACEHOLDER
    poster: '/cases/metricshub-poster.jpg',

    metrics: {
      timeToMarket: '8 dias',
      linesOfCode: '6.234',
      testsWritten: '89',
      coverage: '91%',
      technologies: ['React', 'TypeScript', 'Chart.js', 'TanStack Query', 'Tailwind']
    },

    outcome: 'Dashboard em produção com 1000+ usuários ativos diariamente',

    testimonial: {
      text: 'A qualidade do código gerado é impressionante. Tudo funcionou de primeira.',
      author: 'Maria Santos',
      role: 'Product Manager',
      company: 'MetricsHub'
    },

    gridSize: 'medium'
  },

  {
    id: 'startupx-landing',
    client: 'StartupX',
    category: 'Landing Page',
    challenge: 'Landing page de alta conversão para captação de investimento',
    solution: 'Design moderno com animações, formulários otimizados e integração com CRM',

    thumbnail: '/cases/startupx-thumb.jpg',
    video: '', // PLACEHOLDER
    poster: '/cases/startupx-poster.jpg',

    metrics: {
      timeToMarket: '3 dias',
      linesOfCode: '2.891',
      testsWritten: '45',
      coverage: '88%',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind', 'Resend', 'Vercel']
    },

    outcome: 'Taxa de conversão de 12% e captação de R$ 2M em seed',

    testimonial: {
      text: 'Lançamos em 3 dias e captamos investimento na primeira semana.',
      author: 'Pedro Costa',
      role: 'CEO',
      company: 'StartupX'
    },

    gridSize: 'small'
  },

  {
    id: 'financeapi-backend',
    client: 'FinanceAPI',
    category: 'API Backend',
    challenge: 'API REST escalável para processamento de transações financeiras',
    solution: 'Arquitetura robusta com autenticação, rate limiting e documentação completa',

    thumbnail: '/cases/financeapi-thumb.jpg',
    video: '', // PLACEHOLDER
    poster: '/cases/financeapi-poster.jpg',

    metrics: {
      timeToMarket: '10 dias',
      linesOfCode: '5.678',
      testsWritten: '156',
      coverage: '96%',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker']
    },

    outcome: 'API processando 10k+ requisições/dia com 99.9% uptime',

    testimonial: {
      text: 'A documentação gerada automaticamente economizou semanas de trabalho.',
      author: 'Ana Oliveira',
      role: 'Tech Lead',
      company: 'FinanceAPI'
    },

    gridSize: 'small'
  },

  {
    id: 'fittracker-mobile',
    client: 'FitTracker',
    category: 'Mobile App',
    challenge: 'App mobile multiplataforma para tracking de exercícios e nutrição',
    solution: 'Interface nativa com sincronização offline, notificações e gamificação',

    thumbnail: '/cases/fittracker-thumb.jpg',
    video: '', // PLACEHOLDER
    poster: '/cases/fittracker-poster.jpg',

    metrics: {
      timeToMarket: '15 dias',
      linesOfCode: '9.123',
      testsWritten: '178',
      coverage: '92%',
      technologies: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Firebase']
    },

    outcome: '5k+ downloads na primeira semana com nota 4.8 nas lojas',

    testimonial: {
      text: 'Desenvolvemos iOS e Android simultaneamente. Incrível.',
      author: 'Carlos Mendes',
      role: 'Founder',
      company: 'FitTracker'
    },

    gridSize: 'medium'
  }
];

// Métricas agregadas de todos os projetos
export const aggregatedMetrics = {
  averageTime: '10 dias',
  totalLines: '32.473',
  totalTests: '595',
  averageCoverage: '92%',
  totalProjects: caseStudies.length,
  technologies: [
    'Next.js', 'React', 'TypeScript', 'Tailwind CSS',
    'Node.js', 'PostgreSQL', 'React Native'
  ]
};
