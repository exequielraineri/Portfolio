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
            <p>Jan, 2024 - Present</p>
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
                I designed and developed a management system using Java, Spring
                Boot, React, achieving a significant improvement in query times,
                reports, and business alternatives.
              </li>
              <li>
                I designed and developed a landing page for a gastronomic
                venture using React, achieving a better vision of the business.
              </li>
            </ul>
            <div className="progreso shadow"></div>
          </>
        ) : (
          <>
            <p>Ener, 2024 - Actualidad</p>
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
                Diseñé y desarrollé un sistema de gestión utilizando Java,
                Spring Boot, React, logrando una mejora significativa en los
                tiempos de consultas, reportes, y alternativas de negocio.
              </li>
              <li>
                Diseñé y desarrollé un landing page para una emprendimiento
                gastronómico utilizando React, logrando una mejor visión del
                negocio.
              </li>
            </ul>
            <div className="progreso shadow"></div>
          </>
        )}
      </div>
    </div>
  );
};
