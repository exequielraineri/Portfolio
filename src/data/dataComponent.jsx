import { FaJava, FaDocker, FaAws, FaHryvnia } from "react-icons/fa";
import {
  SiReact,
  SiJavascript,
  SiSpring,
  SiDocker,
  SiMysql,
} from "react-icons/si";
import {
  imgSelAgropauny,
  imgLaBelgrano,
  imgPedimeApp,
  imgZero_so,
  imgFlota,
  imgVivero,
  imgPuntoVenta,
  imgInventoryPauny,
  imgToDoList,
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
    title: "Real State NOA - Software para Inmobiliaria",
    imagen: "/realStateNoa.png",
    description:
      "Sistema diseñado para la gestión inmobiliaria, enfocado en simplificar procesos y mejorar la organización de una empresa en este sector.",
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
      btnText: "Repositorio",
      url: "https://github.com/exequielraineri/RealStateNOA-Frontend",
    },
  },
  {
    title: "Sel Agropauny - Software para Concesionaria",
    imagen: imgSelAgropauny,
    description:
      "Sistema CRM básico para concesionaria agricola con venta de repuestos. La función principal es llevar un control de inventario y caja.",
    points: [
      {
        text: "Frontend: React Js.",
      },
      {
        text: "Backend: Java / Spring Boot.",
      },
      {
        text: "Herramientas: Netbeans IDE, VS Code, Docker, KVM2.",
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
    title: "La Belgrano - Aplicación Web",
    imagen: imgLaBelgrano,
    description:
      "Pequeña aplicación para una carnicería local, cuya función principal es recibir pedidos vía WhatsApp mediante una selección de productos y cantidades. Además, cuenta con un inicio de sesión para que el administrador pueda agregar, modificar o eliminar productos.",
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
  //   description: "Landing Page para mostrar una aplicación movil de Delivery",
  //   points: [
  //     {
  //       text: "Frontend: React Js.",
  //     },
  //     {
  //       text: "Secciones: Inicio | Acerca De | Caracteristicas | Funcionalidades | Galeria.",
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
    title: "Food Delivery - Landing Page",
    imagen: imgZero_so,
    description:
      "El principal objetivo del proyecto es crear una landing page que atraiga tanto a la creciente comunidad venezolana en Uruguay como a los locales interesados en explorar nuevas experiencias culinarias. La página debe ser visualmente atractiva, fácil de navegar y funcional, proporcionando toda la información necesaria para que los visitantes puedan conocer el menú, hacer reservaciones, y aprender más sobre la cultura venezolana.",
    points: [
      {
        text: "Frontend: React Js.",
      },
      {
        text: "Secciones: Inicio | Productos | Nosotros | Unidades.",
      },
    ],
    tools: [<SiReact size={"2em"} title="React Js" />],
    web: {
      btnText: "Web",
      url: "https://zona058.exeraineri.com/",
    },
  },
  {
    title: "Sistema Flota - Gestion de Equipos",
    imagen: imgFlota,
    description:
      "El objetivo principal del proyecto es desarrollar un sistema de gestión de flota integral que permita a la empresa cliente monitorear y administrar sus activos de manera efectiva. Este sistema deberá proporcionar herramientas para el seguimiento en tiempo real de vehículos, programación de mantenimiento, gestión de conductores, análisis de datos y generación de informes detallados.",
    points: [
      {
        text: "CRUD equipos",
      },
      {
        text: "Seguimiento detallado",
      },
      {
        text: "Reportes Varios",
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
    title: "Vivero Mis Raices",
    imagen: imgVivero,
    description:
      "Es una tienda online de un vivero local. Este proyecto lo hice junto con una compañera de clase y nos encantó cómo quedó.",
    points: [
      {
        text: "Trabajamos juntos en la parte Frontend usando React.",
      },
      {
        text: "Paginas: Inicio | Productos | Nosotros | Carrito.",
      },
      {
        text: "Características: Se puede agregar al carrito dinámicamente usando useState y useEffect.",
      },
    ],
    tools: [<SiReact size={"2em"} title="React Js" />],
    web: {
      btnText: "Web",
      url: "https://exequielraineri.github.io/ViveroReact-UTN/",
    },
  },
  {
    title: "Punto de Venta",
    imagen: imgPuntoVenta,
    description:
      "Sistema para gestionar productos, clientes, proveedores y seguimiento de ingresos y gastos del local.",
    points: [
      {
        text: "CRUD (Crear, Buscar, Actualizar, Eliminar) de todas las entidades del proyecto.",
      },
      {
        text: "Implementa sistema de usuario.",
      },
      {
        text: "Informes semanales, filtro de búsqueda variado, generación de facturas.",
      },
    ],
    tools: [
      <FaJava size={"2em"} title="Java" />,
      <SiSpring size={"2em"} title="Spring" />,
    ],
    web: {
      btnText: "Repositorio",
      url: "https://github.com/exequielraineri/puntoVenta-JavaFX",
    },
  },
  // {
  //   title: "Gestión de inventario",
  //   imagen: imgInventoryPauny,
  //   description:
  //     "Este proyecto se trata de un Punto de Venta y Control de Stock para un concesionario de Maquinaria Agrícola, donde también venden repuestos.",
  //   points: [
  //     {
  //       text: "Diseñado para dos locales, que comparten una base de datos para consultar precios y stock, sin necesidad de llamarse por teléfono.",
  //     },
  //     {
  //       text: "Ellos generan informes variados.",
  //     },
  //     {
  //       text: "Control total de efectivo y transacciones con Triggers.",
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
  //     "Lista de tareas con reacción capaz de almacenarlas en almacenamiento local.",
  //   points: [
  //     {
  //       text: "Crud de tareas.",
  //     },
  //     {
  //       text: "Opcion de marcado check.",
  //     },
  //     {
  //       text: "Muestra numeros de tareas completadas.",
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
