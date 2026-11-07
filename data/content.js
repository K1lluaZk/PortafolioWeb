export const profile = {
  name: 'Mario Suero',
  alias: 'K1lluaZk',
  role: 'Desarrollador de Software | Automatización y QA',
  tagline:
    'Construyo soluciones digitales eficientes, escalables y con atención al detalle en cada línea de código.',
  email: 'mario.suerodejesus@gmail.com',
  location: 'República Dominicana',
  github: 'https://github.com/K1lluaZk',
  linkedin:
    'https://www.linkedin.com/in/mario-de-jesus-suero-de-leon-4431602a8',
  cv: 'assets/cv/mario-suero-cv.pdf',
  available: true,
};

export const about = {
  title: 'Sobre mí',
  subtitle: 'Conóceme',
  description:
    'Soy Desarrollador de software junior con enfoque en automatización de procesos e integración de sistemas, con experiencia formativa en desarrollo Full Stack y participación en entornos QA, aplicando conocimientos de desarrollo, pruebas y validación de soluciones tecnológicas.',
  values: [
    {
    icon: 'code',
    title: 'Código limpio',
    description: 'Desarrollo de soluciones mantenibles, automatización de procesos, integración de IA generativa y construcción de agentes inteligentes.',
  },
  {
    icon: 'stack',
    title: 'Full Stack',
    description: 'Diseño e integración de soluciones de extremo a extremo, gestión de bases de datos SQL, consumo de APIs y plataformas Low-Code.',
  },
  {
    icon: 'design',
    title: 'UI/UX',
    description: 'Diseño de interfaces responsivas, accesibles y centradas en el usuario, aplicando principios de usabilidad y experiencia digital.',
  },
  {
    icon: 'team',
    title: 'Trabajo en equipo (CI/CD)',
    description: 'Colaboración bajo Scrum y Kanban, fundamentos de PMI, integración continua, gestión de proyectos y conocimiento de normativas de protección de datos.',
  },
  ],
};

export const technologies = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css3' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'EJS', icon: 'ejs' },
      { name: 'Bootstrap', icon: 'bootstrap' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'Express.js', icon: 'express' },
      { name: 'C#', icon: 'csharp' },
      { name: '.NET', icon: 'dotnet' },
      { name: 'Python', icon: 'python' },
      { name: 'Django', icon: 'django' },
      { name: 'RestAPIs', icon: 'windowsterminal' },
    ],
  },
  {
    category: 'Bases de datos',
    items: [
      { name: 'SQL Server', icon: 'microsoftsqlserver' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Sqlite', icon: 'sqlite' },
    ],
  },
  {
    category: 'Servicios y Plataformas / Cloud',
    items: [
      { name: 'Azure', icon: 'microsoftazure' },
      { name: 'AWS', icon: 'amazonaws' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'AzureDevops', icon: 'azuredevops' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'Jira', icon: 'jira' },
      { name: 'Power Platform', icon: 'paddle' },
    ],
  },
  {
    category: 'Herramientas',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'VS Code', icon: 'visualstudiocode' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Android Studio', icon: 'androidstudio' },
      { name: 'Cursor', icon: 'openbadges' },
      { name: 'Flutter', icon: 'flutter' },
      { name: 'NPM', icon: 'npm' },
      { name: 'phpMyAdmin', icon: 'phpmyadmin' },
      { name: 'Selenium', icon: 'selenium' },
      { name: 'Postman', icon: 'postman' },
      { name: 'Power automate', icon: 'powerautomate' },
      { name: 'Power apps', icon: 'powerapps' },
      { name: 'n8n', icon: 'nano' },
    ],
  },
]

export const projectTypes = {
  web: 'Aplicación web',
  mobile: 'Aplicación móvil',
  desktop: 'Desktop',
};

export const projects = [
  {
    id: 1,
    title: 'HunterChat',
    description:
      'Una aplicación de mensajería instantánea moderna, rápida y minimalista, diseñada para conversaciones fluidas y escalables.',
    image: 'assets/images/projects/hunterchat.jpg',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Express', 'SQLite', 'Socket.io', 'Turso', 'Docker'],
    github: 'https://github.com/K1lluaZk/HunterChat',
    demo: 'https://hunterchat-production.up.railway.app/',
    status: 'live',
    type: 'web',
    year: '2026',
  },
  {
    id: 2,
    title: 'NodeStock',
    description:
      'Una solución moderna para la administración de inventarios, control de movimientos, gestión de categorías y usuarios con autenticación segura basada en JWT.',
    image: 'assets/images/projects/nodestock.jpg',
    technologies: ['Node.js', 'Express', 'Firebase', 'Firestore', 'JWT', 'Tailwind CSS', 'EJS', 'MVC'],
    github: 'https://github.com/K1lluaZk/NodeStock',
    demo: 'https://nodestock-bile.onrender.com/',
    status: 'live',
    type: 'web',
    year: '2026',
  },
  {
    id: 3,
    title: 'Fluxo',
    description:
      'Una aplicación moderna, intuitiva y completamente offline diseñada para ayudarte a administrar tus ingresos, gastos y recordatorios financieros de forma sencilla y eficiente.',
    image: 'assets/images/projects/fluxo.jpg',
    technologies: ['Desarrollo Movil', 'Flutter', 'Dart', 'Hive', 'Provider', 'Material 3', 'Android Studio'],
    github: 'https://github.com/K1lluaZk/Fluxo',
    demo: 'https://github.com/K1lluaZk/Fluxo/releases',
    status: 'development',
    type: 'mobile',
    year: '2026',
  },
  {
    id: 4,
    title: 'Huru',
    description:
      'Una Tienda online (e-commerce) full-stack que permite gestionar productos, usuarios, carrito de compras y pedidos, con un panel administrativo.',
    image: 'assets/images/projects/huru.jpg',
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'Neon',],
    github: 'https://github.com/K1lluaZk/Huru',
    demo: 'https://huru-4j1oaxojw-k1lluazks-projects.vercel.app/',
    status: 'development',
    type: 'web',
    year: '2026',
  },
    {
    id: 5,
    title: 'TicTacToe',
    description:
      'Un juego clásico 3x3 moderno e interactivo, creado con JavaScript puro e integración con Firebase.',
    image: 'assets/images/projects/tictactoe.jpg',
    technologies: ['HTML5', 'CSS', 'JavaScript', 'Firebase'],
    github: 'https://github.com/K1lluaZk/TicTacToeGame/tree/TicTacToeWebApp',
    demo: 'https://htictactoe.vercel.app/',
    status: 'live',
    type: 'web',
    year: '2025',
  },
  {
    id: 6,
    title: 'FateChat',
    description:
      'Una aplicación de mensajería instantánea moderna y segura, construida con tecnologías web contemporáneas.',
    image: 'assets/images/projects/fatechat.jpg',
    technologies: ['HTML5', 'CSS', 'JavaScript', 'TypeScript','InsForge', 'Tailwind CSS',],
    github: 'https://github.com/DogitoMB2006/fatechat',
    demo: 'https://www.fatechat.net/',
    status: 'live',
    type: 'web',
    year: '2026',
  },
  {
    id: 7,
    title: 'HumanizadorIA',
    description:
      'Una aplicación web que utiliza inteligencia artificial para humanizar textos, mejorando la legibilidad y el estilo de escritura.',
    image: 'assets/images/projects/HumanizadorIA.jpg',
    technologies: ['HTML5', '.NET', 'C#', 'Tailwind CSS', 'Docker', 'Arquitectura Limpia'],
    github: 'https://github.com/K1lluaZk/HumanizadorIA',
    demo: 'https://humanizadoria.onrender.com/',
    status: 'development',
    type: 'web',
    year: '2026',
  }
];

export const experience = [
  {
    title: 'Desarrollador de Software',
    company: 'Proyectos personales / Freelance',
    period: '2026 — Actualidad',
    description:
      'Desarrollo de aplicaciones web full stack, desde el diseño de bases de datos hasta interfaces de usuario.',
    bullets: [
      'Construcción de APIs REST y aplicaciones web responsivas.',
      'Implementación de autenticación, CRUD y pruebas automatizadas.',
      'Uso de Git y metodologías ágiles para gestión de proyectos.',
    ],
  },
  {
    title: 'Pasante de Desarrollo de Software',
    company: 'Ministerio de Industria, Comercio y Mipymes (MICM)',
    period: '2026 — Actualidad',
    description:
      'Desarrollador de software con enfoque en automatización de procesos e integración de sistemas.',
    bullets: [
      'Desarrollo e implementación de soluciones de automatización de procesos.',
      'Diseño de flujos de trabajo para reducir tareas manuales.',
      'Integración de herramientas y sistemas.',
      'Análisis de procesos para identificar oportunidades de automatización.',
      'Mantenimiento y optimización de soluciones existentes.',
      'Desarrollo de lógica y validaciones mediante programación.',
    ],
  },
];

export const education = [
  {
  title: 'Fundamentos de Arquitectura de Software',
  company: 'Platzi',
  period: '2026',
  description:
    'Curso introductorio sobre principios, patrones y conceptos fundamentales para el diseño de arquitecturas de software.',
  bullets: [
    'Principios fundamentales del diseño y la arquitectura de software.',
    'Comprensión de patrones arquitectónicos y separación de responsabilidades.',
    'Análisis de escalabilidad, mantenibilidad y organización de sistemas de software.',
  ],
},
  {
  title: 'Automatización con n8n',
  company: 'Platzi',
  period: '2026',
  description:
    'Curso sobre diseño e implementación de flujos de automatización e integración de servicios mediante n8n.',
  bullets: [
    'Creación y configuración de workflows utilizando nodos de n8n.',
    'Integración de APIs y servicios externos mediante solicitudes HTTP.',
    'Automatización de procesos y transferencia de información entre aplicaciones.',
  ],
},
{
  title: 'Fundamentos de Azure DevOps',
  company: "O'Reilly",
  period: '2026',
  description:
    'Formación en los fundamentos de Azure DevOps y su aplicación en la gestión del ciclo de vida del desarrollo de software, colaboración técnica y automatización de procesos de entrega.',
  bullets: [
    'Comprensión de los principios de integración continua (CI) y entrega continua (CD) mediante prácticas DevOps.',
    'Gestión de repositorios, control de versiones y colaboración en proyectos de desarrollo.',
    'Fundamentos de planificación, seguimiento de tareas y gestión de proyectos mediante Azure Boards.',
  ],
},
{
  title: 'Power Automate Avanzado',
  company: "O'Reilly",
  period: '2026',
  description:
    'Curso técnico sobre automatización avanzada de procesos empresariales mediante Microsoft Power Automate.',
  bullets: [
    'Diseño y desarrollo de flujos automatizados para procesos empresariales.',
    'Implementación de condiciones, validaciones y manejo de datos en flujos de trabajo.',
    'Integración con servicios y herramientas del ecosistema Microsoft.',
  ],
},
{
  title: 'Curso de Cloud Computing',
  company: 'Google',
  period: '2026',
  description:
    'Curso introductorio sobre computación en la nube, sus fundamentos, servicios y aplicaciones en entornos tecnológicos.',
  bullets: [
    'Fundamentos de Cloud Computing y principales modelos de servicios en la nube.',
    'Conceptos de infraestructura, almacenamiento y recursos computacionales en la nube.',
    'Aplicaciones de la computación en la nube en el desarrollo, despliegue y escalabilidad de soluciones tecnológicas.',
  ],
},
  {
    title: 'Curso De Scrum Basico',
    company: 'Scrum Inc',
    period: '2026',
    description:
      'Curso tecnico de scrum para gestión de proyectos y trabajo en equipo.',
    bullets: [
      'Introducción a los principios y prácticas de Scrum.',
      'Roles y responsabilidades en un equipo Scrum.',
      'Planificación y seguimiento de proyectos utilizando Scrum.',
    ],
  },
  {
    title: 'Curso De Docker',
    company: 'Edutin Academy',
    period: '2026',
    description:
      'Curso tecnico de docker para contenerización de aplicaciones y dockerprojects.',
    bullets: [
      'Configuración y gestión de contenedores con Docker.',
      'Implementación de dockerprojects.',
      'Buenas prácticas en la creación de imágenes y contenedores.',
    ],
  },
  {
    title: 'Desarrollo Web Full Stack',
    company: 'Instituto Dominicano de las Telecomunicaciones - INDOTEL',
    period: '2025 — 2026',
    description:
      'Curso tecnico de desarrollo web full stack con enfoque en tecnologías modernas.',
    bullets: [
      'Desarrollo con Node.js, Express y bases de datos relacionales.',
      'Interfaces web con React, HTML y CSS.',
      'Buenas prácticas en desarrollo web y control de versiones con Git.',
    ],
  },
  {
    title: 'Curso de Fundamentos De Python',
    company: 'Cisco Networking Academy',
    period: '2025',
    description:
      'Curso tecnico de fundamentos de programación en Python para desarrollo de aplicaciones.',
    bullets: [
      'Fundamentos de programación y estructuras de datos en Python.',
      'Desarrollo de aplicaciones con Python.',
      'Buenas prácticas en programación y resolución de problemas.',
    ],
  },
  {
    title: 'Curso de IT Essentials',
    company: 'Cisco Networking Academy',
    period: '2024',
    description:
      'Curso tecnico de fundamentos de hardware, software y redes para soporte técnico.',
    bullets: [
      'Fundamentos de hardware y software de computadoras.',
      'Conceptos básicos de redes y conectividad.',
      'Buenas prácticas en resolución de problemas y soporte técnico.',
    ],
  },
  {
    title: 'Tecnólogo en Desarrollo de Software',
    company: 'Instituto Tecnológico de Las Américas (ITLA)',
    period: '2024 — Actualidad',
    description:
      'Formación técnica en desarrollo de software con enfoque en aplicaciones web y programación orientada a objetos.',
    bullets: [
      'Desarrollo con .NET, C# y arquitectura MVC.',
      'Proyectos con arquitectura MVC, Metodologias Agiles y patrones de diseño.',
      'Control de versiones con Git en entornos colaborativos.',
    ],
  },
];

export const certifications = [
  {
    name: 'Curso de Cloud Computing',
    issuer: 'Google',
    year: '2026',
    icon: 'google',
  },
  {
    name: 'Curso De Scrum Basico',
    issuer: 'Scrum Inc',
    year: '2026',
    icon: 'scrumalliance',
  },
  {
    name: 'Curso De Docker',
    issuer: 'Edutin Academy',
    year: '2026',
    icon: 'docker',
  },
  {
    name: 'Desarrollo Web Full Stack',
    issuer: 'Indotel',
    year: '2025',
    icon: 'windowsterminal',
  },
  {
    name: 'Fundamentos De Python',
    issuer: 'Cisco Networking Academy',
    year: '2025',
    icon: 'cisco',
  },
  {
    name: 'IT Essentials, Hardware y Software de Computadoras',
    issuer: 'Cisco Networking Academy',
    year: '2024',
    icon: 'cisco',
  },
];

export const navLinks = [
  { href: '#hero', label: 'Inicio' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#technologies', label: 'Tecnologías' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#contact', label: 'Contacto' },
];

export const statusLabels = {
  live: 'Live',
  development: 'En desarrollo',
  archived: 'Archivado',
};
