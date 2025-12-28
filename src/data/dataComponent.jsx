import { FaAndroid, FaDocker, FaJava } from "react-icons/fa";
import {
  SiDocker,
  SiMysql,
  SiReact,
  SiSpring
} from "react-icons/si";
import {
  imgFlota,
  imgLaBelgrano,
  imgPuntoVenta,
  imgSelAgropauny,
  imgVivero,
  imgZero_so
} from "./data";

export const sobreMi = (
  <>
    <p
      className="fw-normal text-light"
      style={{
        textAlign: "justify",
        hyphens: "none",
      }}
    >
      ¡Hola! Soy <strong>Exequiel Raineri</strong>, un apasionado por la
      tecnología y el desarrollo de software, nacido y criado en{" "}
      <strong> Santiago del Estero, Argentina</strong>. Actualmente, estoy en mi
      último año de estudios en la{" "}
      <strong>Universidad Nacional de Santiago del Estero (UNSE)</strong>, donde
      curso el{" "}
      <strong>Pregrado de Programador Universitario en Informática</strong>.
      <br />
      <br />
      En los últimos dos años, he dedicado gran parte de mi tiempo a explorar y
      trabajar en proyectos personales de programación. Este camino me ha
      llevado a descubrir mi interés por el <strong>desarrollo backend</strong>,
      especialmente con tecnologías como <strong>Java</strong> y el framework
      <strong> Spring</strong>.
      <br />
      <br />
      Mi meta es seguir creciendo como desarrollador backend y aportar mi
      entusiasmo y experiencia en proyectos de software que hagan una
      diferencia.
      <br />
      <br />
      ¡Espero que podamos crear algo increíble juntos! 💻
    </p>
  </>
);

export const sobreMiEN = (
  <>
    <p
      className="fw-normal text-light"
      style={{
        textAlign: "justify",
        hyphens: "none",
      }}
    >
      Hello! I am <strong>Exequiel Raineri</strong>, a technology and software
      development enthusiast, born and raised in{" "}
      <strong>Santiago del Estero, Argentina</strong>. I am currently in my
      final year at the{" "}
      <strong>National University of Santiago del Estero (UNSE)</strong>,
      pursuing a <strong>University Programmer in Computer Science</strong>.
      <br />
      <br />
      Over the past two years, I have dedicated much of my time to exploring and
      working on personal programming projects. This journey has led me to
      discover my passion for <strong>backend development</strong>, particularly
      with technologies like <strong>Java</strong> and the{" "}
      <strong>Spring</strong> framework.
      <br />
      <br />
      My goal is to continue growing as a backend developer and contribute my
      enthusiasm and experience to software projects that make a difference.
      <br />
      <br />I look forward to creating something amazing together! 💻
    </p>
  </>
);

export const proyectos = [
  {
    title: "EventPoint - Sistema de Gestión de Eventos",
    imagen: "/eventpoint.png", 
    description:
      "Proyecto Final de Carrera (UNSE). Plataforma integral para la creación, gestión y descubrimiento de eventos en tiempo real.",
    points: [
      {
        text: "Diseño y desarrollo de una API REST robusta con Spring Boot y MySQL.",
      },
      {
        text: "Seguridad avanzada con Spring Security y JWT.",
      },
      {
        text: "Desarrollo de lógica de geolocalización para filtrado de eventos en tiempo real.",
      },
      {
        text: "App móbil nativa Android con patrón MVVM.",
      },
    ],
    tools: [
      <SiSpring size={"2em"} title="Spring" />,
      <FaJava size={"2em"} title="Java" />,
      <SiMysql size={"2em"} title="MySQL" />,
      <FaAndroid size={"2em"} title="Android" />,
      <SiReact size={"2em"} title="React Js" />,
    ],
    web: {
      btnText: "En Desarrollo",
      url: "#",
    },
  },
  {
    title: "Real State NOA - Gestión Inmobiliaria",
    imagen: "/realStateNoa.png",
    description:
      "Plataforma completa para la administración de propiedades, diseñada para optimizar los procesos de venta y alquiler de una inmobiliaria líder.",
    points: [
      {
        text: "Frontend: React Js.",
      },
      {
        text: "API REST escalable con Java y Spring Boot.",
      },
    ],
    tools: [
      <SiReact size={"2em"} title="React Js" />,
      <FaJava size={"2em"} title="Java" />,
      <FaDocker size={"2em"} title="Docker" />,
      <SiSpring size={"2em"} title="Spring" />,
      <SiMysql size={"2em"} title="MySQL" />,
    ],
    web: {
      btnText: "Repositorio",
      url: "https://github.com/exequielraineri/RealStateNOA-Frontend",
    },
  },
  {
    title: "Sel Agropauny - CRM Agrícola",
    imagen: imgSelAgropauny,
    description:
      "Solución CRM para concesionaria de maquinaria agrícola. Centraliza el control de stock, gestión de clientes y flujo de caja.",
    points: [
      {
        text: "Control de inventario de repuestos en tiempo real.",
      },
      {
        text: "Módulo de facturación y reportes financieros.",
      },
      {
        text: "Infraestructura containerizada con Docker.",
      },
    ],
    tools: [
      <SiReact size={"2em"} title="React Js" />,
      <FaJava size={"2em"} title="Java" />,
      <FaDocker size={"2em"} title="Docker" />,
      <SiSpring size={"2em"} title="Spring" />,
      <SiMysql size={"2em"} title="MySQL" />,
    ],
    web: {
      btnText: "Privado",
      url: "#",
    },
  },
  {
    title: "La Belgrano - E-commerce Express",
    imagen: imgLaBelgrano,
    description:
      "WebApp optimizada para pedidos rápidos vía WhatsApp. Panel administrativo completo para gestión de catálogo en tiempo real.",
    points: [
      {
        text: "Catálogo de productos dinámico.",
      },
      {
        text: "Integración directa con WhatsApp API.",
      },
      {
        text: "Panel de administración seguro.",
      },
    ],
    tools: [
      <SiReact size={"2em"} title="React Js" />,
      <FaJava size={"2em"} title="Java" />,
      <FaDocker size={"2em"} title="Docker" />,
      <SiSpring size={"2em"} title="Spring" />,
      <SiMysql size={"2em"} title="MySQL" />,
    ],
    web: {
      btnText: "Demo",
      url: "https://labelgrano.exeraineri.com/",
    },
  },
  {
    title: "Zona 058 - Landing Gastronómica",
    imagen: imgZero_so,
    description:
      "Experiencia digital inmersiva para conectar con la cultura culinaria venezolana. Diseño enfocado en la conversión y retención de usuarios.",
    points: [
      {
        text: "Diseño UX/UI de alto impacto.",
      },
      {
        text: "Navegación intuitiva y responsive.",
      },
    ],
    tools: [<SiReact size={"2em"} title="React Js" />],
    web: {
      btnText: "Visitar Web",
      url: "https://zona058.exeraineri.com",
    },
  },
  {
    title: "Fleet Master - Gestión de Flota",
    imagen: imgFlota,
    description:
      "Sistema empresarial para el monitoreo y administración de activos vehiculares. Enfoque en la eficiencia operativa y mantenimiento preventivo.",
    points: [
      {
        text: "Tracking y asignación de activos.",
      },
      {
        text: "Programación de mantenimiento y alertas.",
      },
      {
        text: "Dashboard analítico de rendimiento.",
      },
    ],
    tools: [
      <FaJava size={"2em"} title="Java" />,
      <SiSpring size={"2em"} title="Spring" />,
      <SiMysql size={"2em"} title="MySQL" />,
      <SiReact size={"2em"} title="React Js" />,
      <SiDocker size={"2em"} title="Docker" />,
    ],
    web: {
      btnText: "Privado",
      url: "#",
    },
  },
  {
    title: "Vivero Mis Raices - E-commerce",
    imagen: imgVivero,
    description:
      "Tienda online moderna con carrito de compras dinámico y gestión de estado avanzada.",
    points: [
      {
        text: "Carrito de compras con React Context.",
      },
      {
        text: "Diseño limpio y amigable.",
      },
    ],
    tools: [<SiReact size={"2em"} title="React Js" />],
    web: {
      btnText: "Demo",
      url: "https://exequielraineri.github.io/ViveroReact-UTN/",
    },
  },
  /*
  {
    title: "Punto de Venta - ERP Desktop",
    imagen: imgPuntoVenta,
    description:
      "Software de gestión comercial robusto (JavaFX). Control total sobre productos, clientes, proveedores y finanzas.",
    points: [
      {
        text: "Gestión completa de stock y facturación.",
      },
      {
        text: "Reportes semanales y control de caja.",
      },
      {
        text: "Sistema de permisos y roles de usuario.",
      },
    ],
    tools: ["fa-brands fa-java", "fa-solid fa-database"],
    web: {
      btnText: "Repositorio",
      url: "https://github.com/exequielraineri/puntoVenta-JavaFX",
    },
  },*/
];

export const projects = [
  {
    title: "Real State NOA - Real Estate Software",
    imagen: "/realStateNoa.png",
    description:
      "System designed for real estate management, focused on simplifying processes and improving the organization of a company in this sector.",
    points: [
      {
        text: "Frontend: React Js.",
      },
      {
        text: "Backend: Java / Spring Boot.",
      },
    ],
    tools: [
      <SiReact size={"2em"} title="React Js" />,
      <FaJava size={"2em"} title="Java" />,
      <FaDocker size={"2em"} title="Docker" />,
      <SiSpring size={"2em"} title="Spring" />,
      <SiMysql size={"2em"} title="MySQL" />,
    ],
    web: {
      btnText: "Repository",
      url: "https://github.com/exequielraineri/RealStateNOA-Frontend",
    },
  },
  {
    title: "Sel Agropauny - CRM",
    imagen: imgSelAgropauny,
    description:
      "Basic CRM system for an agricultural dealership selling spare parts. The main function is to keep track of inventory and cash flow.",
    points: [
      {
        text: "Frontend: React Js.",
      },
      {
        text: "Backend: Java / Spring Boot.",
      },
      {
        text: "Tools: Netbeans IDE, VS Code, Docker, KVM2.",
      },
    ],
    tools: [
      <SiReact size={"2em"} title="React Js" />,
      <FaJava size={"2em"} title="Java" />,
      <FaDocker size={"2em"} title="Docker" />,
      <SiSpring size={"2em"} title="Spring" />,
      <SiMysql size={"2em"} title="MySQL" />,
    ],
    web: {
      btnText: "Private",
      url: "#",
    },
  },
  {
    title: "La Belgrano - Web App",
    imagen: imgLaBelgrano,
    description:
      "Small app for a local butcher shop, whose main function is to receive orders via WhatsApp by selecting products and quantities. In addition, it has a login so that the administrator can add, modify or delete products.",
    points: [
      {
        text: "Frontend: React Js.",
      },
      {
        text: "Backend: Java / Spring Boot.",
      },
    ],
    tools: [
      <SiReact size={"2em"} title="React Js" />,
      <FaJava size={"2em"} title="Java" />,
      <FaDocker size={"2em"} title="Docker" />,
      <SiSpring size={"2em"} title="Spring" />,
      <SiMysql size={"2em"} title="MySQL" />,
    ],
    web: {
      btnText: "Web",
      url: "https://labelgrano.com.ar",
    },
  },
  // {
  //   title: "Pedime App - Landing Page",
  //   imagen: imgPedimeApp,
  //   description: "Landing Page to showcase a Delivery mobile app.",
  //   points: [
  //     {
  //       text: "Frontend: React Js.",
  //     },
  //     {
  //       text: "Sections: Home | About | Features | Functionalities | Gallery.",
  //     },
  //   ],
  //   tools: [
  //     <SiReact size={"2em"} title="React Js" />,
  //   ],
  //   web: {
  //     btnText: "Web",
  //     url: "https://pedimeapp.exeraineri.com/",
  //   },
  // },
  {
    title: "Landing Page - Food Delivery",
    imagen: imgZero_so,
    description:
      "The main objective of the project is to create a landing page that attracts both the growing Venezuelan community in Uruguay and locals interested in exploring new culinary experiences. The page must be visually attractive, easy to navigate and functional, providing all the necessary information so that visitors can learn about the menu, make reservations and learn more about Venezuelan culture.",
    points: [
      {
        text: "Frontend: React Js.",
      },
      {
        text: "Sections: Home | Products | About | Unidad.",
      },
    ],
    tools: [<SiReact size={"2em"} title="React Js" />],
    web: {
      btnText: "Web",
      url: "https://zona058.exeraineri.com",
    },
  },
  {
    title: "Fleet System - Equipment Management",
    imagen: imgFlota,
    description:
      "The main objective of the project is to develop a comprehensive fleet management system that allows the client company to monitor and manage its assets effectively. This system should provide tools for real-time vehicle tracking, maintenance scheduling, driver management, data analysis and detailed reporting.",
    points: [
      {
        text: "CRUD Team",
      },
      {
        text: "Detailed tracking",
      },
      {
        text: "Various reports",
      },
    ],
    tools: [
      <FaJava size={"2em"} title="Java" />,
      <SiSpring size={"2em"} title="Spring" />,
      <SiMysql size={"2em"} title="MySQL" />,
      <SiReact size={"2em"} title="React Js" />,
      <SiDocker size={"2em"} title="Docker" />,
    ],
    web: {
      btnText: "Private",
      // url: "#",
    },
  },
  {
    title: "Nursery Mis Raices",
    imagen: imgVivero,
    description:
      "It is an online store of a local nursery. I did this project together with a classmate and we really loved how it turned out.",
    points: [
      {
        text: "We work together on the Frontend part using React.",
      },
      {
        text: "Pages: Home | Products | Us | Trolley.",
      },
      {
        text: "Features: It can be added to the cart dynamically using useState and useEffect.",
      },
    ],
    tools: [<SiReact size={"2em"} title="React Js" />],
    web: {
      btnText: "Web",
      url: "https://exequielraineri.github.io/ViveroReact-UTN/",
    },
  },
  {
    title: "Point of Sale",
    imagen: imgPuntoVenta,
    description:
      "System to manage products, clients, suppliers and track income and expenses of the premises.",
    points: [
      {
        text: "CRUD (Created, Read, Update, Delete) of all project entities.",
      },
      {
        text: "Implement user system.",
      },
      {
        text: "Weekly reports, varied search filter, invoice generation.",
      },
    ],
    tools: ["fa-brands fa-java", "fa-solid fa-database"],
    web: {
      btnText: "Repositorio",
      url: "https://github.com/exequielraineri/puntoVenta-JavaFX",
    },
  },
  // {
  //   title: "Inventory management",
  //   imagen: imgInventoryPauny,
  //   description:
  //     "This project is about a Point of Sale and Stock Control for an Agricultural Machinery dealership, where they also sell spare parts.",
  //   points: [
  //     {
  //       text: "Designed for two locations, which share a database to check prices and stock, without having to call each other by phone.",
  //     },
  //     {
  //       text: "They generate varied reports.",
  //     },
  //     {
  //       text: "Full control of cash and transactions with Triggers.",
  //     },
  //   ],
  //   tools: [
  //     <SiSpring size={"2em"} title="Spring" />,
  //     <FaJava size={"2em"} title="Java" />,
  //     <FaAws size={"2em"} />,
  //     <SiMysql size={"2em"} title="MySQL" />,
  //   ],
  //   web: {
  //     btnText: "Repositorio",
  //     url: "https://github.com/exequielraineri/Inventario-Pauny",
  //   },
  // },
  // {
  //   title: "ToDo List",
  //   imagen: imgToDoList,
  //   description:
  //     "List of tasks with react capable of storing them in localstorage.",
  //   points: [
  //     {
  //       text: "Task crud.",
  //     },
  //     {
  //       text: "Mark completed.",
  //     },
  //     {
  //       text: "Show number of completed..",
  //     },
  //   ],
  //   tools: [
  //     <SiReact size={"2em"} title="React Js" />,
  //   ],
  //   web: {
  //     btnText: "Web",
  //     url: "https://exequielraineri.github.io/TodoApp/",
  //   },
  // },
];
