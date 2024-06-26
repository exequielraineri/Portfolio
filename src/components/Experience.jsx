import "./css/experience.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import { counterContext } from "../context/contextCounter";
export const Experience = () => {
  const {
    value: { isEnglish },
  } = useContext(counterContext);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id="experience" className="bloque-experience">
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="bloque-titulos"
      >
        {isEnglish ? (
          <>
            <h1 className="fondo-titulo">Experience</h1>
            <h2 className="titulo">Experience</h2>
          </>
        ) : (
          <>
            <h1 className="fondo-titulo">Experiencia</h1>
            <h2 className="titulo">Experiencia</h2>
          </>
        )}
      </div>
      <div
        data-aos="fade-right"
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
