/* eslint-disable react/prop-types */
import "./css/projects.css";
import { useContext, useState } from "react";
import imgVivero from "../assets/vivero_so.png";
import imgPuntoVenta from "../assets/venta_so.png";
import imgInventoryPauny from "../assets/inventory_so.png";
import imgToDoList from "../assets/tasks_so.png";
import imgZero_so from "../assets/zero_so.png";
import imgFlota from "../assets/track_so.png";
import { Fade } from "react-awesome-reveal";
import { v1 } from "uuid";
import {
  SiBootstrap,
  SiDocker,
  SiJavascript,
  SiMysql,
  SiReact,
  SiSpring,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { counterContext } from "../context/contextCounter";
export const Projects = () => {
  const {
    value: { isEnglish },
  } = useContext(counterContext);

  const [proyectos, setProyectos] = useState([
    {
      title: "Landing Page - Food Delivery",
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
      tools: [
        <SiReact key={v1()} size={"2em"} />,
        <SiJavascript key={v1()} size={"2em"} />,
        <SiBootstrap key={v1()} size={"2em"} />,
      ],
      web: {
        btnText: "Web",
        url: "https://zona-058-frontend-twsh.vercel.app/",
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
        <FaJava key={v1()} size={"2em"} />,
        <SiSpring key={v1()} size={"2em"} />,
        <SiMysql key={v1()} size={"2em"} />,
        <SiReact key={v1()} size={"2em"} />,
        <SiJavascript key={v1()} size={"2em"} />,
        <SiDocker key={v1()} size={"2em"} />,
        <SiBootstrap key={v1()} size={"2em"} />,
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
      tools: [
        <SiReact key={v1()} size={"2em"} />,
        <SiJavascript key={v1()} size={"2em"} />,
        <SiBootstrap key={v1()} size={"2em"} />,
      ],
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
        <FaJava key={v1()} size={"2em"} />,
        <FaAws key={v1()} size={"2em"} />,
        <SiSpring key={v1()} size={"2em"} />,
      ],
      web: {
        btnText: "Repositorio",
        url: "https://github.com/exequielraineri/puntoVenta-JavaFX",
      },
    },
    {
      title: "Gestión de inventario",
      imagen: imgInventoryPauny,
      description:
        "Este proyecto se trata de un Punto de Venta y Control de Stock para un concesionario de Maquinaria Agrícola, donde también venden repuestos.",
      points: [
        {
          text: "Diseñado para dos locales, que comparten una base de datos para consultar precios y stock, sin necesidad de llamarse por teléfono.",
        },
        {
          text: "Ellos generan informes variados.",
        },
        {
          text: "Control total de efectivo y transacciones con Triggers.",
        },
      ],
      tools: [
        <SiSpring key={v1()} size={"2em"} />,
        <FaJava key={v1()} size={"2em"} />,
        <FaAws key={v1()} size={"2em"} />,
        <SiMysql key={v1()} size={"2em"} />,
      ],
      web: {
        btnText: "Repositorio",
        url: "https://github.com/exequielraineri/Inventario-Pauny",
      },
    },
    {
      title: "ToDo List",
      imagen: imgToDoList,
      description:
        "Lista de tareas con reacción capaz de almacenarlas en almacenamiento local.",
      points: [
        {
          text: "Crud de tareas.",
        },
        {
          text: "Opcion de marcado check.",
        },
        {
          text: "Muestra numeros de tareas completadas.",
        },
      ],
      tools: [
        <SiReact key={v1()} size={"2em"} />,
        <SiJavascript key={v1()} size={"2em"} />,
        <SiBootstrap key={v1()} size={"2em"} />,
      ],
      web: {
        btnText: "Web",
        url: "https://exequielraineri.github.io/TodoApp/",
      },
    },
  ]);
  const [proyects_all, setProjectsAll] = useState([
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
      tools: [
        <SiReact key={v1()} size={"2em"} />,
        <SiJavascript key={v1()} size={"2em"} />,
        <SiBootstrap key={v1()} size={"2em"} />,
      ],
      web: {
        btnText: "Web",
        url: "https://zona-058-frontend-twsh.vercel.app/",
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
        <FaJava key={v1()} size={"2em"} />,
        <SiSpring key={v1()} size={"2em"} />,
        <SiMysql key={v1()} size={"2em"} />,
        <SiReact key={v1()} size={"2em"} />,
        <SiJavascript key={v1()} size={"2em"} />,
        <SiDocker key={v1()} size={"2em"} />,
        <SiBootstrap key={v1()} size={"2em"} />,
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
      tools: [
        <SiReact key={v1()} size={"2em"} />,
        <SiJavascript key={v1()} size={"2em"} />,
        <SiBootstrap key={v1()} size={"2em"} />,
      ],
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
    {
      title: "Inventory management",
      imagen: imgInventoryPauny,
      description:
        "This project is about a Point of Sale and Stock Control for an Agricultural Machinery dealership, where they also sell spare parts.",
      points: [
        {
          text: "Designed for two locations, which share a database to check prices and stock, without having to call each other by phone.",
        },
        {
          text: "They generate varied reports.",
        },
        {
          text: "Full control of cash and transactions with Triggers.",
        },
      ],
      tools: [
        <SiSpring key={v1()} size={"2em"} />,
        <FaJava key={v1()} size={"2em"} />,
        <FaAws key={v1()} size={"2em"} />,
        <SiMysql key={v1()} size={"2em"} />,
      ],
      web: {
        btnText: "Repositorio",
        url: "https://github.com/exequielraineri/Inventario-Pauny",
      },
    },
    {
      title: "ToDo List",
      imagen: imgToDoList,
      description:
        "List of tasks with react capable of storing them in localstorage.",
      points: [
        {
          text: "Task crud.",
        },
        {
          text: "Mark completed.",
        },
        {
          text: "Show number of completed..",
        },
      ],
      tools: [
        <SiReact key={v1()} size={"2em"} />,
        <SiJavascript key={v1()} size={"2em"} />,
        <SiBootstrap key={v1()} size={"2em"} />,
      ],
      web: {
        btnText: "Web",
        url: "https://exequielraineri.github.io/TodoApp/",
      },
    },
  ]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div id="projects" className="container ">
        <div
          // data-aos="fade-zoom-in"
          // data-aos-duration="1500"
          className="bloque-titulos"
        >
          {isEnglish ? (
            <>
              <h3 className="fondo-titulo">Projects</h3>
              <h4 className="titulo">Projects</h4>
            </>
          ) : (
            <>
              <h3 className="fondo-titulo">Proyectos</h3>
              <h4 className="titulo">Proyectos</h4>
            </>
          )}
        </div>
        <section className="bloque-projects gap-4">
          <Fade cascade damping={0.2}>
            {isEnglish == true
              ? proyects_all.map((project, index) => {
                  return <Proj key={index + project} project={project}></Proj>;
                })
              : proyectos.map((proy, index) => {
                  return <Proj key={index + proy.title} project={proy}></Proj>;
                })}
          </Fade>
        </section>
        {/* <Carrusel products={productos}></Carrusel> */}
      </div>
      {/* <button
        // data-aos="fade-zoom-in"
        // data-aos-duration="1500"
        onClick={() => {
          if (cantidadMostrar == 2) {
            setCantidadMostrar(projects.length);
          } else {
            setCantidadMostrar(2);
          }
        }}
        className="btn btn-sm btn-secondary shadow"
      >
        {cantidadMostrar == 2 ? "View More..." : "View Less"}
      </button> */}
    </div>
  );
};

const Proj = ({ project }) => {
  return (
    <div className="bloque-items p-0 m-0 h-100">
      <div className="item">
        <div className="contenido py-3">
          <img
            loading="eager"
            width={"100%"}
            height={"100%"}
            src={project?.imagen}
            alt={project?.imagen}
            className="img"
            style={{
              zIndex: 3,
            }}
          />
          <h4>
            <b
              style={{
                color: "#83a5ff",
                fontWeight: "bold",
                fontSize: "1em",
              }}
            >
              {project?.title}
            </b>
          </h4>

          <p className="fw-light">{project?.description}</p>
          <ul className="fw-light">
            {project?.points?.map((point) => {
              return <li key={v1()}>{point.text}</li>;
            })}
          </ul>
        </div>
        <div className="item-caracteristicas d-flex flex-column gap-3 flex-wrap">
          <div
            style={{
              borderBottom: "solid 1px rgba(255,255,255,.2)",
            }}
            className="w-100 pb-2"
          >
            {project?.tools?.map((tool) => {
              return tool;
            })}
          </div>
          <div className="w-100 justify-content-end">
            <a
              target={"_blank"}
              rel="noreferrer"
              href={project?.web?.url != "#" ? project.web.url : ""}
              className={"btn btn-sm btn-primary shadow px-3 rounded-1 ".concat(
                project.web.url == "#" ? " disabled" : ""
              )}
              style={{
                borderRadius: "10px",
              }}
            >
              {project?.web?.btnText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
