import "./css/skills.css";
import { useContext } from "react";
import { counterContext } from "../context/contextCounter";
import { SiGithub } from "react-icons/si";
import {
  java,
  bootstrap,
  css,
  docker,
  figma,
  html,
  javascript,
  mysql,
  react,
} from "../data/data";
export const Skills = () => {
  const skils = [
    {
      title: "Java",
      icon: (
        <img
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
          src={java}
          alt="Java"
          width={"100%"}
          height={"100%"}
        />
      ),
    },
    {
      title: "Spring",
      icon: (
        <img
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
          src="./spring.png"
          alt="Spring Boot"
          width={"100%"}
        />
      ),
    },
    {
      title: "MySql",
      icon: (
        <img
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
          src={mysql}
          alt="MySql"
          width={"100%"}
          height={"100%"}
        />
      ),
    },
    {
      title: "HTML5",
      icon: (
        <img
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
          src={html}
          alt="HTML5"
          width={"100%"}
          height={"100%"}
        />
      ),
    },
    {
      title: "CSS",
      icon: (
        <img
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
          src={css}
          alt="CSS"
          width={"100%"}
          height={"100%"}
        />
      ),
    },
    {
      title: "Javascript",
      icon: (
        <img
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
          src={javascript}
          alt="Javascript"
          width={"100%"}
          height={"100%"}
        />
      ),
    },
    {
      title: "React Js",
      icon: (
        <img
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
          src={react}
          alt="React Js"
          width={"100%"}
          height={"100%"}
        />
      ),
    },
    {
      title: "Bootstrap",
      icon: (
        <img
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
          src={bootstrap}
          alt="Bootstrap"
          width={"100%"}
          height={"100%"}
        />
      ),
    },
    {
      title: "Docker",
      icon: (
        <img
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
          src={docker}
          alt="Docker"
          width={"100%"}
          height={"100%"}
        />
      ),
    },
    {
      title: "GitHub",
      icon: (
        <SiGithub
          className="h-100"
          width={"100%"}
          height={"100%"}
          style={{
            fontSize: "3em",
          }}
        />
      ),
    },
    {
      title: "Figma",
      icon: <img src={figma} alt="Figma" width={"100%"} height={"100%"} />,
    },
  ];
  const {
    value: { isEnglish },
  } = useContext(counterContext);

  return (
    <div id="skills" className="bloque-skills">
      <div
        data-aos="fade-zoom-in"
        data-aos-duration="1000"
        className="bloque-titulos"
      >
        {isEnglish ? (
          <>
            <h3 className="fondo-titulo">Skills</h3>
            <h4 className="titulo">Skills</h4>
          </>
        ) : (
          <>
            <h3 className="fondo-titulo">Habilidades</h3>
            <h4 className="titulo">Habilidades</h4>
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
      </section>
    </div>
  );
};
