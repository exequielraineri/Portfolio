import "./css/aboutMe.css";
import { useContext } from "react";
import { counterContext } from "../context/contextCounter";
import { imgExeAbout } from "../data/data";
import { sobreMiEN } from "../data/dataComponent";
import { sobreMi } from "../data/dataComponent";
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
