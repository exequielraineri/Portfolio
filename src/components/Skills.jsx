import "./css/skills.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import java from "../assets/java_original.png";
import css from "../assets/css.png";
import figma from "../assets/figma.png";
import bootstrap from "../assets/bootstrap.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import mysql from "../assets/mysql.png";
import react from "../assets/react.png";
import spring from "../assets/spring.png";
import html from "../assets/html.png";
import docker from "../assets/docker-solo.png";
import { counterContext } from "../context/contextCounter";
export const Skills = () => {
  const {
    value: { isEnglish },
  } = useContext(counterContext);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id="skills" className="bloque-skills">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="bloque-titulos"
      >
        {isEnglish ? (
          <>
            <h1 className="fondo-titulo">Skills</h1>
            <h2 className="titulo">Skills</h2>
          </>
        ) : (
          <>
            <h1 className="fondo-titulo">Habilidades</h1>
            <h2 className="titulo">Habilidades</h2>
          </>
        )}
      </div>
      <section className="container section-skills shadow">
        <article
          data-aos="fade-up"
          data-aos-duration="300"
          className="skill-item"
        >
          <img src={java} alt="java" />
          <p>Java</p>
        </article>
        <article
          data-aos="fade-up"
          data-aos-duration="400"
          className="skill-item"
        >
          <img src={mysql} alt="Mysql" />
          <p>MySql</p>
        </article>
        <article
          data-aos="fade-up"
          data-aos-duration="500"
          className="skill-item"
        >
          <img src={spring} alt="Spring" />
          <p>Spring</p>
        </article>
        <article
          data-aos="fade-up"
          data-aos-duration="600"
          className="skill-item"
        >
          <img src={html} alt="HTML" />
          <p>HTML</p>
        </article>
        <article
          data-aos="fade-up"
          data-aos-duration="700"
          className="skill-item"
        >
          <img src={css} alt="CSS" />
          <p>CSS</p>
        </article>
        <article
          data-aos="fade-up"
          data-aos-duration="800"
          className="skill-item"
        >
          <img src={javascript} alt="Javascript" />
          <p>Javascript</p>
        </article>
        <article
          data-aos="fade-up"
          data-aos-duration="900"
          className="skill-item"
        >
          <img src={react} alt="React Js" />
          <p>React Js</p>
        </article>
        <article
          data-aos="fade-up"
          data-aos-duration="1000"
          className="skill-item"
        >
          <img src={figma} alt="Figma" />
          <p>Figma</p>
        </article>
        <article
          data-aos="fade-up"
          data-aos-duration="1100"
          className="skill-item"
        >
          <img src={github} alt="GitHub" />
          <p>GitHub</p>
        </article>
        <article
          data-aos="fade-up"
          data-aos-duration="1200"
          className="skill-item"
        >
          <img src={bootstrap} alt="Bootstrap" />
          <p>Bootstrap</p>
        </article>
        <article
          data-aos="fade-up"
          data-aos-duration="1200"
          className="skill-item"
        >
          <img
            src={docker}
            alt="Bootstrap"
            style={{
              width: "100px",
            }}
          />
          <p>Docker</p>
        </article>
      </section>
    </div>
  );
};
