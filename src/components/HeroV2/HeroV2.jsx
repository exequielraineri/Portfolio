import { Button } from "@mui/material";
import { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";
import { counterContext } from "../../context/contextCounter";
import {
  URL_CV_EN,
  URL_CV_ES,
  URL_GITHUB,
  URL_INSTAGRAM,
  URL_LINKEDIN,
} from "../../data/data";
import "./HeroV2.css";

export const HeroV2 = () => {
  const words = ["Java Developer", "Full Stack Developer"];
  const palabras = ["Desarrollador Java", "Desarrollador Full Stack"];
  const { value } = useContext(counterContext);
  return (
    <div
      style={{
        minHeight: "60vh",
        // width: "100%",
      }}
      className="hero text-white"
    >
      <img
        style={{
          zIndex: "-1",
          position: "fixed",
          top: "0",
          left: "0",
          height: "100vh",
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          opacity: 0.5,
        }}
        width={100}
        className="imagen-fondo"
        src="./programmer.webp"
        alt="Fondo Body"
        loading="lazy"
      />
      <div className="d-flex  container flex-wrap align-items-end py-3 pt-5 gap-3">
        <div className="d-flex flex-column gap-3">
          <div className=" border-bottom   ">
            {/* <h1>Exequiel Raineri</h1> */}
            <h1
              className="mb-0 pb-0 "
              style={{
                fontSize: "3em",
                fontWeight: "bold",
                // backgroundColor: "white",
                // mixBlendMode: "screen",
                color: "transparent",
                background: "linear-gradient(158deg, rgb(98, 114, 255), white)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                backgroundSize: "cover",
              }}
            >
              Exequiel Raineri
            </h1>
            <h2
              style={{
                fontSize: "1.3em",
              }}
            >
              {value.isEnglish ? "I'm a " : "Soy "}
              <span
                style={{
                  fontSize: "1em",
                }}
                className="type_writer fw-bold "
              >
                <Typewriter
                  words={value.isEnglish ? words : palabras}
                  cursor
                  loop={true}
                  cursorStyle="<"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            {value.isEnglish ? (
              <>
                <p
                  className="fw-light"
                  style={{
                    marginTop: 15,
                    maxWidth: "700px",
                    fontSize: ".9em",
                  }}
                >
                  Junior Java Developer with experience in Spring technologies
                  and web application development, as well as in relational
                  database design and management. Proactive and
                  results-oriented, I stand out for my ability to learn quickly,
                  collaborate in multidisciplinary teams and solve technical
                  problems efficiently.
                </p>
                <p
                  className="fw-light"
                  style={{
                    marginTop: 15,
                    maxWidth: "700px",
                    fontSize: ".9em",
                  }}
                >
                  I am looking for an opportunity in an innovative company where
                  I can apply my skills and continue to grow professionally in
                  the IT sector.
                </p>
              </>
            ) : (
              <>
                <p
                  // className="fw-light"
                  style={{
                    marginTop: 15,
                    maxWidth: "700px",
                    fontSize: ".9em",
                  }}
                >
                  Desarrollador Java Junior con experiencia en tecnologías
                  Spring y el desarrollo de aplicaciones web, así como en el
                  diseño y gestión de bases de datos relacionales. Proactivo y
                  orientado a resultados, destaco por mi capacidad para aprender
                  rápidamente, colaborar en equipos multidisciplinarios y
                  resolver problemas técnicos de forma eficiente.
                </p>
                <p
                  // className="fw-light"
                  style={{
                    marginTop: 15,
                    maxWidth: "700px",
                    fontSize: ".9em",
                  }}
                >
                  Busco una oportunidad en una empresa innovadora donde pueda
                  aplicar mis habilidades y seguir creciendo profesionalmente en
                  el sector IT.
                </p>
              </>
            )}
          </div>
          <div
            className="d-grid align-items-center"
            style={{
              gridTemplateColumns: "1fr 1fr",
              placeContent: "center",
            }}
          >
            <div
              style={
                {
                  // transform: "translateZ(20px)",
                }
              }
              // data-aos="fade-right"
              // data-aos-duration="2500"
              className="redes d-flex gap-1"
            >
              <a
                href={URL_INSTAGRAM}
                target="_blank"
                className="icon-redes"
                rel="noreferrer"
              >
                <i
                  style={{
                    fontSize: "1.3em",
                  }}
                  title="Instagram"
                  className="fa-brands fa-instagram"
                ></i>
              </a>
              <a
                href={URL_GITHUB}
                target="_blank"
                className="icon-redes"
                rel="noreferrer"
              >
                <i
                  style={{
                    fontSize: "1.3em",
                  }}
                  title="GitHub"
                  className="fa-brands fa-github"
                ></i>
              </a>
              <a
                href={URL_LINKEDIN}
                target="_blank"
                className="icon-redes"
                rel="noreferrer"
              >
                <i
                  style={{
                    fontSize: "1.3em",
                  }}
                  title="LinkedIn"
                  className="fa-brands fa-linkedin"
                ></i>
              </a>
            </div>
            <div className="d-flex gap-1 align-items-center justify-content-end">
              <Button
                href="#contacto"
                variant="outlined"
                color="primary"
                // className="px-2"
                size="small"
              >
                {value.isEnglish ? "Contact me" : "Contáctame"}
              </Button>
              <Button
                href={value.isEnglish ? URL_CV_EN : URL_CV_ES}
                target="_blank"
                variant="contained"
                color="primary"
                size="small"
              >
                {value.isEnglish ? "Resume" : "Currículum"}
              </Button>
            </div>
          </div>
        </div>

        <div className="mx-auto d-none d-lg-block">
          <img
            className="imagen-hero"
            src="./exe.webp"
            alt="Exequiel Raineri Imagen"
            width={"200px"}
            height={"200px"}
            style={{
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
    </div>
  );
};
