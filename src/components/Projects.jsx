/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { counterContext } from "../context/contextCounter";
import "./css/projects.css";
import { projects, proyectos } from "../data/dataComponent";
export const Projects = () => {
  const {
    value: { isEnglish },
  } = useContext(counterContext);

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
          data-aos="fade-zoom-in"
          data-aos-duration="1500"
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
              ? projects?.map((project, index) => {
                  return <Proj key={index + project} project={project}></Proj>;
                })
              : proyectos?.map((proyecto, index) => {
                  return (
                    <Proj
                      key={index + proyecto.title}
                      project={proyecto}
                    ></Proj>
                  );
                })}
          </Fade>
        </section>
      </div>
    </div>
  );
};

const Proj = ({ project }) => {
  return (
    <div className="bloque-items p-0 m-0 h-100">
      <div className="item">
        <div className="contenido py-3">
          <img
            loading="lazy"
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
              return <li>{point.text}</li>;
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
