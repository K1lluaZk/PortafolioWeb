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
      { name: 'React', icon: 'react' },
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
      { name: 'PHP', icon: 'php' },
    ],
  },
  {
    category: 'Bases de datos',
    items: [
      { name: 'SQL Server', icon: 'microsoftsqlserver' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'MongoDB', icon: 'mongodb' },
    ],
  },
  {
    category: 'Cloud',
    items: [
      { name: 'Azure', icon: 'microsoftazure' },
      { name: 'AWS', icon: 'amazonwebservices' },
      { name: 'Vercel', icon: 'vercel' },
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
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Task Manager',
    description:
      'Aplicación web para gestión de tareas con autenticación, sesiones y base de datos. Incluye pruebas automatizadas end-to-end.',
    image: 'assets/images/projects/task-manager.jpg',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Selenium'],
    github: 'https://github.com/K1lluaZk',
    demo: null,
    status: 'development',
    year: '2026',
  },
  {
    id: 2,
    title: 'Portafolio Web',
    description:
      'Portafolio personal minimalista con fondo de cielo nocturno, construido con HTML, Tailwind CSS y JavaScript puro.',
    image: 'assets/images/projects/portfolio.jpg',
    technologies: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/K1lluaZk/PortafolioWeb',
    demo: null,
    status: 'live',
    year: '2026',
  },
  {
    id: 3,
    title: 'API REST',
    description:
      'API RESTful con autenticación JWT, documentación y arquitectura modular para gestión de recursos.',
    image: 'assets/images/projects/api-rest.jpg',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/K1lluaZk',
    demo: null,
    status: 'development',
    year: '2025',
  },
  {
    id: 4,
    title: 'Sistema de Gestión',
    description:
      'Aplicación web con ASP.NET Core y SQL Server para administración de datos con interfaz moderna y responsiva.',
    image: 'assets/images/projects/gestion.jpg',
    technologies: ['C#', 'ASP.NET', 'SQL Server'],
    github: 'https://github.com/K1lluaZk',
    demo: null,
    status: 'archived',
    year: '2024',
  },
];

export const experience = [
  {
    title: 'Desarrollador de Software',
    company: 'Proyecto personal / Freelance',
    period: '2024 — Actualidad',
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
    period: '2022 — Actualidad',
    description:
      'Formación técnica en desarrollo de software con enfoque en aplicaciones web y buenas prácticas.',
    bullets: [
      'Desarrollo con .NET, C#, JavaScript y Node.js.',
      'Proyectos con arquitectura MVC y patrones de diseño.',
      'Control de versiones con Git en entornos colaborativos.',
    ],
  },
];

export const education = [
  {
    title: 'Tecnólogo en Desarrollo de Software',
    company: 'Instituto Tecnológico de Las Américas (ITLA)',
    period: '2022 — Actualidad',
    description:
      'Formación técnica en desarrollo de software con enfoque en aplicaciones web y programación orientada a objetos.',
    bullets: [
      'Desarrollo con .NET, C# y arquitectura MVC.',
      'Interfaces web con React, HTML y CSS.',
      'Bases de datos relacionales y control de versiones.',
    ],
  },
];

export const certifications = [
  {
    name: 'JavaScript Essentials',
    issuer: 'Cisco Networking Academy',
    year: '2025',
    icon: 'javascript',
  },
  {
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    year: '2024',
    icon: 'cisco',
  },
  {
    name: 'Git y GitHub',
    issuer: 'Platzi',
    year: '2024',
    icon: 'github',
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
