import "./css/aboutMe.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import imgExeAbout from "../assets/exeNieve.webp";
import { counterContext } from "../context/contextCounter";
export const AboutMe = () => {
  const {
    value: { isEnglish },
  } = useContext(counterContext);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="2000"
      id="about"
      className="container bloque-aboutMe pt-5"
    >
      <div
        data-aos="fade-left"
        data-aos-duration="2500"
        className="bloque-titulos"
      >
        {isEnglish ? (
          <>
            <h1 className="fondo-titulo">About Me</h1>
            <h2 className="titulo">About Me</h2>
          </>
        ) : (
          <>
            <h1 className="fondo-titulo">Sobre Mi</h1>
            <h2 className="titulo">Sobre Mi</h2>
          </>
        )}
      </div>

      <div className="bloque-parrafo shadow py-3">
        <img
          loading="eager"
          className="shadow imagen-about"
          src={imgExeAbout}
          alt="Exequiel"
        />
        {isEnglish ? (
          <>
            <p>
              University student studying{" "}
              <b>
                {" "}
                University Programmer in Computer Science at UNSE (National
                University of Santiago del Estero)
              </b>
              . For the last two years I have been actively involved in
              programming, working on <b> personal projects </b> that have
              allowed me to gain practical experience with various technologies,
              focusing particularly on <b>Java</b>.
            </p>
            <p>
              {" "}
              In 2021, I successfully completed a certification in{" "}
              <b>Web Development from CoderHouse</b>, which expanded my skills.
              My goal is to continue my <b>development as a programmer</b> and
              contribute to practical and <b>innovative solutions</b>. I look
              forward to meeting the <b>challenges</b> and <b>opportunities</b>
              ahead in the ever-evolving field of technology.
            </p>
          </>
        ) : (
          <>
            <p>
              Estudiante universitario de la carrera{" "}
              <b>
                {" "}
                Programador Universitario en Informática de la UNSE (Nacional
                universidad de santiago del estero)
              </b>
              . Durante los últimos 2 años he estado activamente programando,
              trabajando en<b> proyectos personales</b>, eso me han permitido
              adquirir experiencia práctica con varios tecnologías, centrándose
              especialmente en <b>Java</b>.
            </p>
            <p>
              {" "}
              En 2021, completé con éxito una certificación en{" "}
              <b>Desarrollo web de CoderHouse</b>, lo que amplió mis
              habilidades. Mi objetivo es continuar mi{" "}
              <b>Desarrollo como programador</b> y contribuir a la práctica y{" "}
              <b>soluciones innovadoras</b>. Espero conocer a la <b>desafíos</b>{" "}
              y <b>oportunidades</b>
              por delante en el siempre cambiante campo de la tecnología.
            </p>
          </>
        )}
      </div>
    </div>
  );
};
