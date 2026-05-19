import type { Lang } from './utils';

/* ── Tipos ──────────────────────────────────────────── */
interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  achievements: string[];
}

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

interface CvData {
  personalInfo: {
    name: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
  };
  summary: string;
  skills: Record<string, string[]>;
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: string[];
}

interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
}

/* ── Datos compartidos (sin traducción) ─────────────── */
const personalInfo = {
  name:     'Carlos Rodríguez',
  title:    'Full Stack Developer | C# .NET · Python · PHP Laravel · React',
  location: 'Bucaramanga, Colombia',
  phone:    '+57 302 305 5402',
  email:    'karlosdr025@gmail.com',
  linkedin: 'https://linkedin.com/in/carlos-rod-453448292',
  github:   'https://github.com/carlos259310',
};

const skills = {
  Backend:       ['C# .NET', 'Python', 'PHP Laravel 11', 'Node.js', 'NestJS', 'Java Spring Boot', 'APIs REST'],
  Frontend:      ['React', 'Vite', 'Angular', 'TypeScript', 'JavaScript', 'Blade', 'HTML5/CSS3'],
  Database:      ['SQL Server', 'MySQL', 'PostgreSQL', 'SAP HANA SQL', 'T-SQL', 'PL/SQL'],
  Analytics:     ['Power BI', 'Crystal Reports', 'ETL', 'Dashboards'],
  Tools:         ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Linux', 'Composer', 'NPM'],
};

/* Los skills varían levemente por idioma */
const skillsEs = {
  ...skills,
  Integration:   ['Pasarelas de pago PSE', 'APIs de terceros', 'Webhooks', 'Integración ERP SAP'],
  Methodologies: ['Scrum', 'Agile', 'Clean Code', 'Pruebas unitarias'],
};

const skillsEn = {
  ...skills,
  Integration:   ['PSE Payment Gateways', 'Third-party APIs', 'Webhooks', 'SAP ERP Integration'],
  Methodologies: ['Scrum', 'Agile', 'Clean Code', 'Unit Testing'],
};

/* ── Experiencia ─────────────────────────────────────── */
const experienceEs: ExperienceItem[] = [
  {
    company:  'GROWING NETWORK',
    location: 'Bucaramanga',
    role:     'Desarrollador Web Full Stack',
    period:   'Jul 2025 – Abr 2026',
    achievements: [
      'Implementé pasarela de pagos PSE con PlaceToPay para el Instituto de Tránsito de Girón, incluyendo webhooks, validación de estados y reconciliación bancaria.',
      'Desarrollé plataformas ciudadanas con PHP Laravel 11 y React + Vite; APIs REST con autenticación por tokens y middlewares de autorización.',
      'Administración de MySQL y despliegue continuo en entornos Linux.',
      'Construcción de componentes React reutilizables con Context API y hooks personalizados; diseño responsive e integración con servicios externos.',
    ],
  },
  {
    company:  'UNIVERSO ONLINE',
    location: 'Bucaramanga',
    role:     'Ingeniero Programador',
    period:   'Nov 2024 – Jul 2025',
    achievements: [
      'Backend en C# .NET y frontends HTML/CSS/JS para aplicaciones web corporativas.',
      'SQL Server: diseño de procedimientos almacenados, optimización de consultas y mantenimiento correctivo en producción.',
    ],
  },
  {
    company:  'INDUSTRIAS BICICLETAS MILÁN',
    location: 'Bucaramanga',
    role:     'Desarrollador Web Nivel I',
    period:   'Dic 2023 – Nov 2024',
    achievements: [
      'Full stack con PHP Laravel + React; automatización de procesos y ETL con Python.',
      'Integración y administración de SAP HANA SQL; soporte funcional de SAP Business One.',
      'Dashboards analíticos con Power BI y Crystal Reports para equipos directivos.',
    ],
  },
  {
    company:  'NEOSOFTWARE INGENIERÍA',
    location: 'Bucaramanga',
    role:     'Desarrollador de Software',
    period:   'Abr 2023 – Dic 2023',
    achievements: [
      'Software contable con C# .NET y Visual Basic; bases de datos MySQL y SQL Server.',
      'Documentación técnica y soporte del aplicativo NEXIS.',
    ],
  },
  {
    company:  'EQUALITY SOLUTIONS',
    location: 'Bucaramanga',
    role:     'Programador Junior',
    period:   'Sep 2022 – Abr 2023',
    achievements: [
      'Aplicaciones web con C# .NET, Angular y JavaScript; bases de datos SQL Server y PostgreSQL.',
      'Desarrollo de servicios backend con Node.js: APIs REST, manejo de eventos y procesamiento asíncrono; uso de NestJS como framework para arquitectura modular, inyección de dependencias y TypeScript.',
      'Pruebas de calidad y documentación técnica.',
    ],
  },
];

const experienceEn: ExperienceItem[] = [
  {
    company:  'GROWING NETWORK',
    location: 'Bucaramanga',
    role:     'Full Stack Web Developer',
    period:   'Jul 2025 – Apr 2026',
    achievements: [
      'Implemented PSE payment gateway with PlaceToPay for the Girón Transit Institute, including webhooks, status validation, and bank reconciliation.',
      'Developed citizen-facing platforms with PHP Laravel 11 and React + Vite; REST APIs with token authentication and authorization middleware.',
      'MySQL administration and continuous deployment in Linux environments.',
      'Built reusable React components with Context API and custom hooks; responsive design and integration with external services.',
    ],
  },
  {
    company:  'UNIVERSO ONLINE',
    location: 'Bucaramanga',
    role:     'Software Engineer',
    period:   'Nov 2024 – Jul 2025',
    achievements: [
      'C# .NET backend and HTML/CSS/JS frontends for corporate web applications.',
      'SQL Server: stored procedure design, query optimization, and corrective maintenance in production.',
    ],
  },
  {
    company:  'INDUSTRIAS BICICLETAS MILÁN',
    location: 'Bucaramanga',
    role:     'Junior Web Developer',
    period:   'Dec 2023 – Nov 2024',
    achievements: [
      'Full stack with PHP Laravel + React; process automation and ETL scripts with Python.',
      'SAP HANA SQL integration and administration; functional support for SAP Business One.',
      'Analytical dashboards with Power BI and Crystal Reports for management teams.',
    ],
  },
  {
    company:  'NEOSOFTWARE INGENIERÍA',
    location: 'Bucaramanga',
    role:     'Software Developer',
    period:   'Apr 2023 – Dec 2023',
    achievements: [
      'Accounting software with C# .NET and Visual Basic; MySQL and SQL Server databases.',
      'Technical documentation and support for the NEXIS application.',
    ],
  },
  {
    company:  'EQUALITY SOLUTIONS',
    location: 'Bucaramanga',
    role:     'Junior Programmer',
    period:   'Sep 2022 – Apr 2023',
    achievements: [
      'Web applications with C# .NET, Angular, and JavaScript; SQL Server and PostgreSQL databases.',
      'Backend service development with Node.js: REST APIs, event handling, and asynchronous processing; NestJS as framework for modular architecture, dependency injection, and TypeScript.',
      'Quality testing and technical documentation.',
    ],
  },
];

/* ── Educación ───────────────────────────────────────── */
const educationEs: EducationItem[] = [
  { degree: 'Ingeniería de Sistemas',                                           institution: 'UNICIENCIA', year: '2026' },
  { degree: 'Tecnología en Análisis y Desarrollo de Sistemas de Información',   institution: 'SENA',       year: '2023' },
  { degree: 'Técnico Profesional en Sistemas',                                  institution: 'SENA',       year: '2019' },
];

const educationEn: EducationItem[] = [
  { degree: 'Systems Engineering',                                              institution: 'UNICIENCIA', year: '2026' },
  { degree: 'Technology in Information Systems Analysis and Development',       institution: 'SENA',       year: '2023' },
  { degree: 'Professional Technician in Systems',                               institution: 'SENA',       year: '2019' },
];

/* Certificaciones: nombres oficiales, se mantienen en español */
const certifications = [
  'Diplomado en Linux | CONFENALCO | 2024',
  'Diplomado en Java Spring Boot y Angular | CONFENALCO | 2024',
  'Diplomado en Power BI | CONFENALCO | 2023',
  'Diplomado en Python | CONFENALCO | 2022',
  'Diplomado en PHP y Laravel | CONFENALCO | 2022',
];

/* ── Proyectos ───────────────────────────────────────── */
const projectsEs: ProjectItem[] = [
  {
    title: 'Tránsito de Girón',
    description: 'Implementación de pasarela de pagos PSE integrada con PlaceToPay, incluyendo gestión de transacciones, validación de estados, webhooks y procesos idempotentes. Plataforma de servicios al ciudadano para consultas vehiculares y pagos en línea.',
    tech: ['PHP Laravel', 'MySQL', 'APIs REST', 'PlaceToPay', 'PSE', 'Webhooks'],
    link: 'https://www.transitodegiron.com.co/',
    github: '',
  },
  {
    title: 'Tránsito de Cota',
    description: 'Desarrollo full stack de plataforma web para gestión de trámites de tránsito: módulos de consultas, liquidaciones y servicios al ciudadano. Integración de servicios externos y base de datos MySQL para operación institucional.',
    tech: ['PHP Laravel', 'MySQL', 'APIs REST', 'Web Services'],
    link: 'https://transitodecota.com/',
    github: '',
  },
  {
    title: 'Sistema Torneo de Fútbol',
    description: 'Aplicación web interactiva para visualización de resultados, alineaciones y estadísticas en tiempo real. Arquitectura basada en componentes con render dinámico de tablas de posiciones.',
    tech: ['Astro', 'React', 'CSS', 'JSON'],
    link: 'https://torneo-futbol-one.vercel.app/',
    github: '',
  },
  {
    title: 'Invitación de Boda Digital',
    description: 'Landing page personalizada con animaciones, cuenta regresiva y confirmación de asistencia (RSVP). Optimizada para dispositivos móviles y carga rápida.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    link: 'https://boda-andrea-manuel.vercel.app/',
    github: '',
  },
];

const projectsEn: ProjectItem[] = [
  {
    title: 'Girón Transit Platform',
    description: 'PSE payment gateway implementation integrated with PlaceToPay, including transaction management, status validation (APPROVED/PENDING), webhook handling, and idempotent processes. Citizen services platform for vehicle queries and online payments.',
    tech: ['PHP Laravel', 'MySQL', 'REST APIs', 'PlaceToPay', 'PSE', 'Webhooks'],
    link: 'https://www.transitodegiron.com.co/',
    github: '',
  },
  {
    title: 'Cota Transit Platform',
    description: 'Full stack web platform for transit procedures management: query modules, settlements, and citizen services. External service integration and MySQL database structuring for institutional operation.',
    tech: ['PHP Laravel', 'MySQL', 'REST APIs', 'Web Services'],
    link: 'https://transitodecota.com/',
    github: '',
  },
  {
    title: 'Football Tournament System',
    description: 'Interactive web application for real-time display of results, lineups, and statistics. Component-based architecture with dynamic rendering of standings tables.',
    tech: ['Astro', 'React', 'CSS', 'JSON'],
    link: 'https://torneo-futbol-one.vercel.app/',
    github: '',
  },
  {
    title: 'Digital Wedding Invitation',
    description: 'Custom landing page with animations, countdown, and RSVP confirmation. Optimized for mobile devices and fast loading.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    link: 'https://boda-andrea-manuel.vercel.app/',
    github: '',
  },
];

/* ── Funciones exportadas ────────────────────────────── */
export function getCvData(lang: Lang): CvData {
  return {
    personalInfo,
    summary: lang === 'en'
      ? 'Full Stack Developer with 3+ years of experience in C# .NET, Python, and PHP Laravel. Specialized in solid backend architectures, API integration, and relational databases. Real solutions deployed in production for public and private sector companies.'
      : 'Desarrollador Full Stack con más de 3 años de experiencia en C# .NET, Python y PHP Laravel. Especializado en backend robusto, integración de APIs y bases de datos relacionales. Con soluciones reales desplegadas en producción en sector público y privado.',
    skills: lang === 'en' ? skillsEn : skillsEs,
    experience: lang === 'en' ? experienceEn : experienceEs,
    education: lang === 'en' ? educationEn : educationEs,
    certifications,
  };
}

export function getProjectsData(lang: Lang): ProjectItem[] {
  return lang === 'en' ? projectsEn : projectsEs;
}
