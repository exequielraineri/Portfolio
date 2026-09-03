/**
 * Cada proyecto declara:
 *  - group: clave del filtro ("sistemas" | "web")
 *  - cover: ruta a una captura, o null para usar la portada generada por CSS
 *  - mark:  iniciales de la portada generada
 *  - links: acciones del pie de la tarjeta ({ label, url, kind })
 *           kind "primary" resalta; "muted" es un estado inerte, sin enlace
 */

export const groups = [
  { key: "all", label: "Todos" },
  { key: "sistemas", label: "Sistemas de gestión" },
  { key: "web", label: "Web para negocios" },
];

export const projects = [
  {
    id: "eventpoint",
    group: "sistemas",
    featured: true,
    title: "EventPoint",
    subtitle: "Gestión y descubrimiento de eventos",
    year: "2025",
    cover: "/work/eventpoint.png",
    coverMode: "contain",
    mark: "EP",
    description:
      "Proyecto final de carrera (UNSE). Plataforma para crear, administrar y descubrir eventos, con API REST, panel web y aplicación Android nativa.",
    highlights: [
      "API REST en Spring Boot sobre MySQL, con autenticación y roles vía Spring Security y JWT.",
      "Filtrado de eventos por geolocalización y cercanía en tiempo real.",
      "App Android nativa con arquitectura MVVM consumiendo la misma API.",
    ],
    tech: ["Java", "Spring Boot", "Spring Security", "MySQL", "Android", "React"],
    links: [{ label: "En desarrollo", kind: "muted" }],
  },
  {
    id: "ascendra",
    group: "sistemas",
    featured: true,
    title: "Ascendra",
    subtitle: "Software de gestión para comercios de repuestos",
    year: "2026",
    cover: "/work/ascendragestionsoftware.png",
    coverPosition: "left top",
    mark: "AS",
    description:
      "Producto propio para comercios que hoy llevan todo en papel o Excel: ventas, presupuestos, clientes con cuenta corriente, cheques, órdenes de compra, proveedores, stock, taller, caja y reportes en un solo sistema.",
    highlights: [
      "Backend Express sobre SQLite con better-sqlite3: operaciones síncronas y transaccionales, sin latencia de red.",
      "Panel con ventas del día, valor de stock, deuda de clientes, alertas de stock bajo mínimo y cotización oficial del BNA.",
      "Comprobantes y reportes en PDF generados en el servidor con Puppeteer, listos para imprimir o mandar por WhatsApp.",
      "Se instala como servicio de Windows con NSSM: arranca solo con la máquina y funciona sin internet.",
    ],
    tech: ["Node.js", "Express", "SQLite", "React 19", "Tailwind CSS", "Puppeteer"],
    links: [
      { label: "Ver producto", url: "https://ascendra.exeraineri.com/", kind: "primary" },
      {
        label: "Repositorio",
        url: "https://github.com/exequielraineri/claude-software-gestion",
        kind: "primary",
      },
    ],
  },
  {
    id: "realstate-noa",
    group: "sistemas",
    title: "Real State NOA",
    subtitle: "Gestión inmobiliaria",
    year: "2025",
    cover: "/realStateNoa.png",
    mark: "RS",
    description:
      "Plataforma de administración de propiedades para una inmobiliaria del NOA, orientada a ordenar los procesos de venta y alquiler.",
    highlights: [
      "API REST en Java y Spring Boot con persistencia en MySQL.",
      "Frontend en React para carga, búsqueda y seguimiento de propiedades.",
      "Empaquetado con Docker para replicar el entorno en cualquier servidor.",
    ],
    tech: ["Java", "Spring Boot", "MySQL", "React", "Docker"],
    links: [
      {
        label: "Repositorio",
        url: "https://github.com/exequielraineri/RealStateNOA-Frontend",
        kind: "primary",
      },
    ],
  },
  {
    id: "la-belgrano",
    group: "sistemas",
    title: "La Belgrano",
    subtitle: "E-commerce express por WhatsApp",
    year: "2025",
    cover: "/labelgrano_so.png",
    mark: "LB",
    description:
      "WebApp de pedidos rápidos: el cliente arma el carrito y el pedido llega por WhatsApp, sin pasarela de pago ni fricción de registro.",
    highlights: [
      "Catálogo dinámico administrable en tiempo real desde un panel propio.",
      "Armado del mensaje de pedido e integración directa con la API de WhatsApp.",
      "Backend Spring Boot con panel de administración protegido.",
    ],
    tech: ["Java", "Spring Boot", "MySQL", "React", "Docker"],
    links: [{ label: "Ver demo", url: "https://labelgrano.exeraineri.com/", kind: "primary" }],
  },
  {
    id: "fleet-master",
    group: "sistemas",
    title: "Fleet Master",
    subtitle: "Gestión de flota vehicular",
    year: "2025",
    cover: "/track_so.png",
    mark: "FM",
    description:
      "Sistema interno para monitorear y administrar activos vehiculares, con foco en eficiencia operativa y mantenimiento preventivo.",
    highlights: [
      "Asignación y seguimiento de vehículos por responsable.",
      "Programación de mantenimientos con alertas por vencimiento.",
      "Dashboard analítico de uso y costos de la flota.",
    ],
    tech: ["Java", "Spring Boot", "MySQL", "React", "Docker"],
    links: [{ label: "Privado", kind: "muted" }],
  },

  {
    id: "selagropauny",
    group: "web",
    featured: true,
    title: "Sel Agropauny",
    subtitle: "Concesionaria oficial Pauny",
    year: "2026",
    cover: "/work/selagropauny.png",
    mark: "SA",
    description:
      "Sitio de una concesionaria oficial Pauny de La Banda y Quimilí: tractores 0km, repuestos originales, taller propio con service a domicilio y enlace a la tienda online.",
    highlights: [
      "Identidad industrial fuerte, construida sobre variables CSS y tipografía condensada.",
      "Iconografía generada en build con un script de Node (sharp, lucide-static, simple-icons) que arma sprites y favicons.",
      "Secciones de modelos, sucursales, cobertura y preguntas frecuentes, todas terminando en contacto por WhatsApp.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Vite", "SEO local"],
    links: [{ label: "Visitar sitio", url: "https://www.selagropauny.com/", kind: "primary" }],
  },
  {
    id: "rodamientos",
    group: "web",
    title: "Raineri Rodamientos",
    subtitle: "Distribuidora de rulemanes y retenes",
    year: "2026",
    cover: "/work/rodamientos.jpg",
    mark: "RR",
    description:
      "Sitio para una distribuidora de repuestos de La Banda: catálogo por familia de producto, ubicación, horarios y consulta directa por WhatsApp.",
    highlights: [
      "Optimizado para búsquedas locales por producto y ciudad.",
      "Imágenes servidas en WebP con respaldo JPG para cargar rápido en datos móviles.",
      "Mobile-first: casi todas las consultas entran desde el celular.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "SEO local"],
    links: [
      { label: "Visitar sitio", url: "https://www.rainerirodamientos.com/", kind: "primary" },
    ],
  },
  {
    id: "lo-de-marce",
    group: "web",
    title: "Lo de Marce",
    subtitle: "Confitería artesanal · carta digital",
    year: "2026",
    cover: "/work/lodemarce.jpg",
    mark: "LM",
    description:
      "Sitio y carta digital de una confitería de La Banda: pizzas, milanesas, empanadas y sándwiches caseros, con pedidos por WhatsApp y menú accesible desde la mesa.",
    highlights: [
      "Carta en página propia, separada de la home, para poder compartirla como enlace directo.",
      "Generador de códigos QR incluido, para llevar el menú a las mesas del local sin imprimir cartas nuevas.",
      "HTML, CSS y JS puros con estilos embebidos: sin build ni dependencias, desplegado en Vercel.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    links: [
      {
        label: "Visitar sitio",
        url: "https://lo-de-marce-confiteria.vercel.app/",
        kind: "primary",
      },
    ],
  },
  {
    id: "yuyitos",
    group: "web",
    title: "Yuyitos Materos",
    subtitle: "Catálogo de yuyos, mates y yerba",
    year: "2026",
    cover: "/work/yuyitos.jpg",
    mark: "YM",
    description:
      "Sitio de catálogo para un productor de yuyos materos: más de 25 sabores, mates de calabaza y algarrobo, venta por menor y por mayor.",
    highlights: [
      "Catálogo y contacto en páginas separadas para posicionar cada intención de búsqueda.",
      "Pedido armado desde el catálogo y enviado por WhatsApp.",
      "Identidad visual cálida, construida sobre variables CSS reutilizables.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "SEO local"],
    links: [{ label: "Visitar sitio", url: "https://www.yuyitosmateros.com/", kind: "primary" }],
  },
  {
    id: "alfalfa",
    group: "web",
    title: "Lautaro Raineri",
    subtitle: "Productor de alfalfa",
    year: "2026",
    cover: "/work/alfalfa.jpg",
    mark: "LR",
    description:
      "Landing para un productor de alfalfa: fardos y rollos, proceso de producción, zona de entrega y solicitud de cotización por WhatsApp.",
    highlights: [
      "Estructura orientada a la cotización: cada sección termina en un contacto.",
      "Contenido pensado para búsquedas de compradores de forraje del NOA.",
      "Sitio estático, sin dependencias, con sitemap y robots propios.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "SEO local"],
    links: [{ label: "Visitar sitio", url: "https://www.lautaroraineri.com/", kind: "primary" }],
  },
  {
    id: "personal-trainer",
    group: "web",
    title: "Personal Trainer",
    subtitle: "Landing de servicios",
    year: "2024",
    cover: "/personaltrainer.png",
    mark: "PT",
    description:
      "Landing page para un personal trainer, con foco en una navegación simple y una única acción clara: reservar una sesión.",
    highlights: [
      "Diseño responsive construido en React.",
      "Secciones de servicios, planes y contacto directo.",
    ],
    tech: ["React", "Bootstrap", "CSS3"],
    links: [{ label: "Visitar sitio", url: "https://trainer.exeraineri.com", kind: "primary" }],
  },
];
