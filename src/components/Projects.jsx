/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./css/projects.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import imgVivero from "../assets/vivero.webp";
import imgPuntoVenta from "../assets/ptoVenta.webp";
import imgInventoryPauny from "../assets/inventory.webp";
import imgToDoList from "../assets/todoApp.webp";
import VanillaTilt from "vanilla-tilt";
import { counterContext } from "../context/contextCounter";
export const Projects = () => {
  const {
    value: { isEnglish },
  } = useContext(counterContext);

  const [projects, setProjects] = useState(
    isEnglish
      ? [
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
              "fa-brands fa-js",
              "fa-brands fa-html5",
              "fa-brands fa-css3",
              "fa-brands fa-bootstrap",
              "fa-brands fa-react",
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
              "fa-brands fa-java",
              "fa-solid fa-database",
              "fa-brands fa-aws",
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
              "fa-brands fa-html5",
              "fa-brands fa-react",
              "fa-brands fa-css3",
            ],
            web: {
              btnText: "Web",
              url: "https://exequielraineri.github.io/TodoApp/",
            },
          },
        ]
      : [
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
              "fa-brands fa-js",
              "fa-brands fa-html5",
              "fa-brands fa-css3",
              "fa-brands fa-bootstrap",
              "fa-brands fa-react",
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
            tools: ["fa-brands fa-java", "fa-solid fa-database"],
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
              "fa-brands fa-java",
              "fa-solid fa-database",
              "fa-brands fa-aws",
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
              "fa-brands fa-html5",
              "fa-brands fa-react",
              "fa-brands fa-css3",
            ],
            web: {
              btnText: "Web",
              url: "https://exequielraineri.github.io/TodoApp/",
            },
          },
        ]
  );

  const [cantidadMostrar, setCantidadMostrar] = useState(2);
  useEffect(() => {
    Aos.init();
  }, []);
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
          data-aos="fade-right"
          data-aos-duration="1500"
          className="bloque-titulos"
        >
          {isEnglish ? (
            <>
              <h1 className="fondo-titulo">Projects</h1>
              <h2 className="titulo">Projects</h2>
            </>
          ) : (
            <>
              <h1 className="fondo-titulo">Proyectos</h1>
              <h2 className="titulo">Proyectos</h2>
            </>
          )}
        </div>
        <div className="bloque-projects">
          {projects.map((project, index) => {
            if (index >= cantidadMostrar) {
              return;
            }
            return <Proj key={index} project={project}></Proj>;
          })}
        </div>
      </div>
      <button
        data-aos="fade-right"
        data-aos-duration="200"
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
      </button>
    </div>
  );
};

const Proj = ({ project }) => {
  useEffect(() => {
    Aos.init();
    VanillaTilt.init(document.querySelectorAll(".card-tilt"), {
      speed: 400,
      max: 15,
    });
  }, []);
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="200"
      className="bloque-items "
    >
      <div className="item">
        <div className="contenido">
          <img
            loading="eager"
            data-tilt
            data-tilt-scale="1.2"
            data-aos="fade-right"
            data-aos-duration="200"
            src={project?.imagen}
            alt={project?.title}
            width={100}
            className="card-tilt shadow"
            style={{
              zIndex: 3,
            }}
          />
          <h3
            data-aos="fade-right"
            data-aos-duration="200"
            style={{
              textAlign: "center",
            }}
          >
            <b>{project?.title}</b>
          </h3>
          <p data-aos="fade-right" data-aos-duration="200">
            <p>{project?.description}</p>
            <ul>
              {project?.points?.map((point, index) => {
                return <li key={index}>{point.text}</li>;
              })}
            </ul>
          </p>
        </div>
        <div className="item-caracteristicas">
          <div data-aos="fade-right" data-aos-duration="200">
            {project?.tools?.map((tool, index) => {
              return <i key={index} className={tool}></i>;
            })}
          </div>
          <div data-aos="fade-left" data-aos-duration="200">
            <a
              target="_blank"
              rel="noreferrer"
              href={project?.web?.url}
              className="btn btn-sm btn-primary shadow"
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
