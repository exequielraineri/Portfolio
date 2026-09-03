export const profile = {
  name: "Exequiel Raineri",
  role: "Backend Developer",
  tagline: "Java · Spring Boot · React",
  location: "Santiago del Estero, Argentina",
  available: true,
  availableText: "Disponible para proyectos",
  intro:
    "Programador Universitario en Informática (UNSE). Diseño y construyo sistemas de gestión y APIs REST para negocios reales: stock, ventas, cuenta corriente, reportes y catálogos que se usan todos los días.",
  bio: [
    "Trabajo de punta a punta: modelo la base de datos, escribo la API, armo el frontend y dejo el sistema andando en la máquina del cliente.",
    "Vengo del backend en Java y Spring Boot, y sumo Node, React y Next.js cuando el proyecto lo pide. Me importan las cosas que se notan en producción: consultas rápidas, datos consistentes y una interfaz que no necesite manual.",
  ],
};

export const stats = [
  { value: "11", label: "proyectos construidos" },
  { value: "5", label: "sitios de clientes online" },
  { value: "2024", label: "freelance desde" },
];

export const contact = {
  email: "exeraineridev@gmail.com",
  whatsapp: "https://wa.me/5493854845145",
  whatsappLabel: "+54 9 385 484-5145",
  linkedin: "https://www.linkedin.com/in/exequielraineri/",
  github: "https://github.com/exequielraineri",
  cv: "/CV_ExequielRaineri.pdf",
};

export const experience = [
  {
    company: "Freelance",
    role: "Desarrollador Full Stack",
    period: "Ene 2024 — Presente",
    current: true,
    points: [
      "Sistemas de gestión a medida con Java, Spring Boot, Node y React: stock, ventas, cuenta corriente y reportes.",
      "Instalación y puesta en marcha en el cliente, incluyendo el despliegue del backend como servicio de Windows.",
      "Sitios y catálogos para comercios de Santiago del Estero, con foco en velocidad, SEO local y contacto por WhatsApp.",
    ],
  },
  {
    company: "UNSE — Universidad Nacional de Santiago del Estero",
    role: "Programador Universitario en Informática",
    period: "Graduado",
    current: false,
    points: [
      "Proyecto final: EventPoint, plataforma de gestión y descubrimiento de eventos con API en Spring Boot y app Android nativa.",
    ],
  },
];

export const stack = [
  {
    title: "Backend",
    items: [
      "Java 17–21",
      "Spring Boot",
      "Spring Security · JWT",
      "Spring Cloud (Gateway, Eureka)",
      "Jakarta EE / JSF",
      "Node.js · Express",
      "APIs REST",
    ],
  },
  {
    title: "Datos",
    items: [
      "MySQL",
      "SQLite",
      "Hibernate / JPA",
      "Prisma ORM",
      "Redis",
      "Apache Kafka",
      "Modelado y normalización",
    ],
  },
  {
    title: "Frontend & Mobile",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Android nativo (MVVM)",
      "HTML5 · CSS3",
      "Figma",
    ],
  },
  {
    title: "Herramientas",
    items: [
      "Docker",
      "Git · GitHub",
      "Vite",
      "Postman",
      "Linux / Terminal",
      "Puppeteer",
      "Firebase",
    ],
  },
];
