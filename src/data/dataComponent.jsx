import { FaAndroid, FaBootstrap, FaDocker, FaJava } from "react-icons/fa";
import {
  SiDocker,
  SiMysql,
  SiReact,
  SiSpring
} from "react-icons/si";
import {
  imgFlota,
  imgLaBelgrano,
  imgSelAgropauny,
  imgVivero,
  imgZero_so,
  personalTrainer
} from "./data";

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
    title: "Personal Trainer - Landing Page",
    imagen: personalTrainer,
    description:
      "Landing Page para Personal Trainer. Diseño responsive y agradable para el usuario. Implementación de React Js.",
    points: [
      {
        text: "Diseño UX/UI minimalista.",
      },
      {
        text: "Navegación intuitiva y responsive.",
      },
      {
        text: "Implementación de React Js.",
      },
    ],
    tools: [
      <SiReact size={"2em"} title="React Js" />,
      <FaBootstrap size={"2em"} title="Bootstrap" />,
    ],
    web: {
      btnText: "Visitar Web",
      url: "https://trainer.exeraineri.com",
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
];
