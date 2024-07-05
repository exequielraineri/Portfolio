import "./css/aboutMe.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import imgExeAbout from "../assets/exeNieve.webp";
import { counterContext } from "../context/contextCounter";
import { sobreMi, sobreMiEN } from "../data/data";
export const AboutMe = () => {
  const {
    value: { isEnglish },
  } = useContext(counterContext);

  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-duration="1000"
      id="about"
      className="container bloque-aboutMe pt-5"
    >
      <div
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
        className="bloque-titulos"
      >
        {isEnglish ? (
          <>
            <h3 className="fondo-titulo">About Me</h3>
            <h4 className="titulo">About Me</h4>
          </>
        ) : (
          <>
            <h3 className="fondo-titulo">Sobre Mi</h3>
            <h4 className="titulo">Sobre Mi</h4>
          </>
        )}
      </div>

      <div className="bloque-parrafo shadow py-3">
        <img
          loading="lazy"
          className="shadow imagen-about"
          src={imgExeAbout}
          alt="Exequiel"
        />
        {isEnglish ? sobreMiEN : sobreMi}
      </div>
    </div>
  );
};
