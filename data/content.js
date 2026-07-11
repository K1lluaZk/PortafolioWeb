export const profile = {
  name: 'Mario Suero',
  alias: 'K1lluaZk',
  role: 'Desarrollador de Software',
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
    'Soy desarrollador de software apasionado por crear soluciones que combinan funcionalidad y diseño. Me enfoco en escribir código limpio, mantenible y en aprender continuamente para entregar productos de calidad.',
  values: [
    {
      icon: 'code',
      title: 'Código limpio',
      description: 'Estructurado, mantenible y siguiendo buenas prácticas.',
    },
    {
      icon: 'stack',
      title: 'Full Stack',
      description: 'Desde la base de datos hasta interfaces modernas.',
    },
    {
      icon: 'design',
      title: 'UI/UX',
      description: 'Interfaces responsivas, accesibles y centradas en el usuario.',
    },
    {
      icon: 'team',
      title: 'Trabajo en equipo',
      description: 'Colaboración efectiva bajo metodologías ágiles.',
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
    category: 'Cloud',
    items: [
      { name: 'Azure', icon: 'microsoftazure' },
      { name: 'AWS', icon: 'amazonaws' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'Firebase', icon: 'firebase' },
    ],
  },
  {
    category: 'Herramientas',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'VS Code', icon: 'visualstudiocode' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Postman', icon: 'postman' },
      { name: 'Jira', icon: 'jira' },
      { name: 'Cursor', icon: 'openbadges' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'Flutter', icon: 'flutter' },
      { name: 'NPM', icon: 'npm' },
      { name: 'phpMyAdmin', icon: 'phpmyadmin' },
    ],
  },
];

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
    year: '2026',
  },
  {
    id: 2,
    title: 'NodeStock',
    description:
      'Una solución moderna para la administración de inventarios, control de movimientos, gestión de categorías y usuarios con autenticación segura basada en JWT.',
    image: 'assets/images/projects/nodestock.jpg',
    technologies: ['Node.js', 'Express', 'Firebase', 'Firestore', 'JWT', 'Tailwind CSS', 'EJS'],
    github: 'https://github.com/K1lluaZk/NodeStock',
    demo: 'https://nodestock-bile.onrender.com/',
    status: 'development',
    year: '2026',
  },
  {
    id: 3,
    title: 'Fluxo',
    description:
      'Una aplicación moderna, intuitiva y completamente offline diseñada para ayudarte a administrar tus ingresos, gastos y recordatorios financieros de forma sencilla y eficiente.',
    image: 'assets/images/projects/fluxo.jpg',
    technologies: ['Flutter', 'Dart', 'Hive', 'Provider', 'Material 3', 'Android'],
    github: 'https://github.com/K1lluaZk/Fluxo',
    demo: 'https://github.com/K1lluaZk/Fluxo/releases',
    status: 'development',
    year: '2026',
  },
  {
    id: 4,
    title: 'Balanceo',
    description:
      'Una aplicación moderna para la gestión de ingresos y gastos con arquitectura robusta y filtros avanzados.',
    image: 'assets/images/projects/balanceo.jpg',
    technologies: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB',],
    github: 'https://github.com/K1lluaZk/Balanceo',
    demo: null,
    status: 'live',
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
    year: '2025',
  },
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
    title: 'Estudiante de Desarrollo de Software',
    company: 'Formación académica',
    period: '2024 — Actualidad',
    description:
      'Formación técnica en desarrollo de software con enfoque en aplicaciones web y buenas prácticas.',
    bullets: [
      'Desarrollo con .NET, C#, Python, JavaScript y Node.js.',
      'Proyectos con arquitectura MVC, Metodologias Agiles y patrones de diseño.',
      'Control de versiones con Git en entornos colaborativos.',
    ],
  },
];

export const education = [
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
      'Interfaces web con Node.js, HTML y CSS.',
      'Bases de datos relacionales y control de versiones.',
    ],
  },
];

export const certifications = [
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
