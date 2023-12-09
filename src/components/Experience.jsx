import "./css/experience.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const Experience = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      id="experience"
      className="container bloque-experience"
    >
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="bloque-titulos"
      >
        <h1 className="fondo-titulo">Experience</h1>
        <h2 className="titulo">Experience</h2>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="bloque-texto"
      >
        <p>May, 2023 - Present</p>
        <h3
          style={{
            fontSize: "1.3rem",
            margin: 0,
          }}
        >
          Freelancer
        </h3>
        <h4
          style={{
            fontSize: "1.5rem",
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
          <li>Creation of simulation software for an industrial process.</li>
        </ul>
        <div className="progreso"></div>
      </div>
    </div>
  );
};
