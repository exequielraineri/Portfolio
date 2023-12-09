import "./css/aboutMe.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import imgExeAbout from "../assets/exe.jpg";
export const AboutMe = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="2000"
      id="about"
      className="container bloque-aboutMe"
    >
      <div
        data-aos="fade-left"
        data-aos-duration="2500"
        className="bloque-titulos"
      >
        <h1 className="fondo-titulo">About Me</h1>
        <h2 className="titulo">About Me</h2>
      </div>

      <div className="bloque-parrafo">
        <img
          width={100}
          src={imgExeAbout}
          alt="Exequiel"
        />
        <p>
          University student studying{" "}
          <b>
            {" "}
            University Programmer in Computer Science at UNSE (National
            University of Santiago del Estero)
          </b>
          . For the last two years I have been actively involved in programming,
          working on <b> personal projects </b> that have allowed me to gain
          practical experience with various technologies, focusing particularly
          on <b>Java</b>.
        </p>
        <p>
          {" "}
          In 2021, I successfully completed a certification in{" "}
          <b>Web Development from CoderHouse</b>, which expanded my skills. My
          goal is to continue my <b>development as a programmer</b> and
          contribute to practical and <b>innovative solutions</b>. I look
          forward to meeting the <b>challenges</b> and <b>opportunities</b>ahead
          in the ever-evolving field of technology.
        </p>
      </div>
    </div>
  );
};
