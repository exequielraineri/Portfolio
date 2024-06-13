import { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./HeroV2.css";
import { counterContext } from "../../context/contextCounter";
export const HeroV2 = () => {
  const words = ["Java Developer", "Full Stack Developer"];
  const palabras = ["Desarrollador Java", "Desarrollador Full Stack"];
  const { value } = useContext(counterContext);
  return (
    <div
      style={{ minHeight: "60vh" }}
      className="hero text-white bg-transparent"
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
        }}
        width={"100%"}
        src="./programmer.jpg"
        alt="Fondo Body"
        loading="eager"
      />
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          width: "100%",
          backgroundColor: "rgba(0,0,0,.8)",
          height: "100%",
          zIndex: "-1",
        }}
      ></div>
      <div className="d-flex  container flex-wrap align-items-end py-3 pt-5 gap-3">
        <div className="d-flex flex-column gap-3">
          <div className=" border-bottom   ">
            {/* <h1>Exequiel Raineri</h1> */}
            <h1
              className="mb-0 pb-0 "
              style={{
                fontSize: "3em",
                fontWeight: "bold",
              }}
            >
              {" "}
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
                  With over 2 years of experience in backend development, I
                  specialize in creating robust and efficient solutions using
                  Java. Although I have worked on a few projects, each one has
                  given me the opportunity to focus on quality, efficiency, and
                  delivering a great user experience.
                </p>
                <p
                  className="fw-light"
                  style={{
                    marginTop: 15,
                    maxWidth: "700px",
                    fontSize: ".9em",
                  }}
                >
                  My goal is to continue applying my knowledge and skills to
                  build software that not only meets technical requirements but
                  also provides an excellent user experience.
                </p>
              </>
            ) : (
              <>
                <p
                  className="fw-light"
                  style={{
                    marginTop: 15,
                    maxWidth: "700px",
                    fontSize: ".9em",
                  }}
                >
                  Con más de 2 años de experiencia en el desarrollo backend, me
                  especializo en crear soluciones robustas y eficientes
                  utilizando Java. Aunque he trabajado en algunos proyectos,
                  cada uno me ha brindado la oportunidad de enfocarme en la
                  calidad, la eficiencia y en ofrecer una excelente experiencia
                  al usuario.
                </p>
                <p
                  className="fw-light"
                  style={{
                    marginTop: 15,
                    maxWidth: "700px",
                    fontSize: ".9em",
                  }}
                >
                  Mi objetivo es seguir aplicando mis conocimientos y
                  habilidades para construir software que no solo cumpla con los
                  requisitos técnicos, sino que también proporcione una
                  excelente experiencia al usuario.
                </p>
              </>
            )}
          </div>
          <div
            className="d-flex flex-row  w-100 justify-content-between align-items-center"
            style={
              {
                // width: "100%",
                // justifyContent: "space-between",
              }
            }
          >
            <div
              style={{
                transform: "translateZ(20px)",
              }}
              data-aos="fade-right"
              data-aos-duration="2500"
              className="redes d-flex gap-2 align-items-center "
            >
              <a
                href="https://www.instagram.com/exeraineri/"
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
                href="https://github.com/exequielraineri"
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
                href="https://www.linkedin.com/in/exequielraineri/"
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
            <div className="d-flex gap-2">
              <a
                title={value.isEnglish ? "Contact me" : "Contáctame"}
                rel="noreferrer"
                target="_blank"
                href="https://es.fiverr.com/exer46"
                className="btn  btn-outline-primary shadow px-3"
                style={{
                  fontWeight: "600",
                }}
              >
                {value.isEnglish ? "Contact me" : "Contáctame"}
              </a>

              <a
                title={value.isEnglish ? "Resume" : "Currículum"}
                rel="noreferrer"
                target="_blank"
                href="https://drive.google.com/file/d/1vy22WDL6IB1k-7OqfYwjIKc7XZS3xvZ-/view?usp=sharing"
                className="btn  btn-primary shadow px-3"
                style={{
                  fontWeight: "600",
                }}
              >
                {value.isEnglish ? "Resume" : "Currículum"}
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto d-none d-lg-block">
          <img
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
