import "./css/experience.css";
import { useContext } from "react";
import { counterContext } from "../context/contextCounter";
export const Experience = () => {
  const {
    value: { isEnglish },
  } = useContext(counterContext);

  return (
    <div id="experience" className="bloque-experience">
      <div
        // data-aos="fade-zoom-in"
        // data-aos-duration="2000"
        className="bloque-titulos"
      >
        {isEnglish ? (
          <>
            <h3 className="fondo-titulo">Experience</h3>
            <h4 className="titulo">Experience</h4>
          </>
        ) : (
          <>
            <h3 className="fondo-titulo">Experiencia</h3>
            <h4 className="titulo">Experiencia</h4>
          </>
        )}
      </div>

      <div
        data-aos="fade-zoom-in"
        data-aos-duration="2000"
        className="bloque-texto shadow"
      >
        {isEnglish ? (
          <>
            <p>May, 2023 - Present</p>
            <h3
              style={{
                margin: 0,
              }}
            >
              Freelancer
            </h3>
            <h4
              style={{
                margin: 0,
                marginBottom: "5px",
              }}
            >
              Full Stack Developer
            </h4>
            <ul>
              <li>
                Creation of Landing Page for agricultural machinery dealership.
              </li>
              <li>
                Creation of simulation software for an industrial process.
              </li>
            </ul>
            <div className="progreso shadow"></div>
          </>
        ) : (
          <>
            <p>Mayo, 2023 - Actualidad</p>
            <h3
              style={{
                margin: 0,
              }}
            >
              Freelancer
            </h3>
            <h4
              style={{
                margin: 0,
                marginBottom: "5px",
              }}
            >
              Desarrollador Full - Stack
            </h4>
            <ul>
              <li>
                Creación de Landing Page para concesionario de maquinaria
                agrícola.
              </li>
              <li>
                Creación de software de simulación de un proceso industrial.
              </li>
            </ul>
            <div className="progreso shadow"></div>
          </>
        )}
      </div>
    </div>
  );
};
