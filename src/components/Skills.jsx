import "./css/skills.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import java from "../assets/java_original.png";
import css from "../assets/css.png";
import figma from "../assets/figma.png";
import bootstrap from "../assets/bootstrap.png";
import javascript from "../assets/javascript.png";
import mysql from "../assets/mysql.png";
import react from "../assets/react.png";
import html from "../assets/html.png";
import docker from "../assets/docker-solo.png";
import { counterContext } from "../context/contextCounter";
import { SiGithub } from "react-icons/si";
export const Skills = () => {
  const skils = [
    {
      title: "Java",
      icon: <img src={java} alt="Java" />,
    },
    {
      title: "Spring",
      icon: <img src="./spring.png" alt="Spring Boot" />,
    },
    {
      title: "MySql",
      icon: <img src={mysql} alt="MySql" />,
    },
    {
      title: "HTML5",
      icon: <img src={html} alt="HTML5" />,
    },
    {
      title: "CSS",
      icon: <img src={css} alt="CSS" />,
    },
    {
      title: "Javascript",
      icon: <img src={javascript} alt="Javascript" />,
    },
    {
      title: "React Js",
      icon: <img src={react} alt="React Js" />,
    },
    {
      title: "Bootstrap",
      icon: <img src={bootstrap} alt="Bootstrap" />,
    },
    {
      title: "Docker",
      icon: <img src={docker} alt="Docker" />,
    },
    {
      title: "GitHub",
      icon: (
        <SiGithub
          style={{
            fontSize: "3em",
          }}
        />
      ),
    },
    {
      title: "Figma",
      icon: <img src={figma} alt="Figma" />,
    },
  ];
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
        {skils.map((skill, index) => {
          return (
            <article
              key={index}
              data-aos="fade-up"
              data-aos-duration={(index + 1) * 100}
              className="skill-item"
            >
              {skill.icon}
              <p>{skill.title}</p>
            </article>
          );
        })}
        {/* <article
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
        </article> */}
      </section>
    </div>
  );
};
