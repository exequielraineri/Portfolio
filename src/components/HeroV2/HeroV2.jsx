import { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./HeroV2.css";
import { counterContext } from "../../context/contextCounter";
export const HeroV2 = () => {
  const words = ["Java Developer", "Full Stack Developer"];
  const palabras = ["Desarrollador Java", "Desarrollador Full Stack"];
  const { value } = useContext(counterContext);
  return (
    <div style={{ minHeight: "60vh" }} className="text-white bg-transparent">
      <img
        style={{
          zIndex: "-1",
          position: "fixed",
          top: "0",
          left: "0",
          height: "90vh",
          objectFit: "cover",
          objectPosition: "center",
        }}
        width={"100%"}
        src="./public/programmer.jpg"
        alt="Fondo Body"
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
          <h3
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
          </h3>

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
                My goal is to continue applying my knowledge and skills to build
                software that not only meets technical requirements but also
                provides an excellent user experience.
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
                especializo en crear soluciones robustas y eficientes utilizando
                Java. Aunque he trabajado en algunos proyectos, cada uno me ha
                brindado la oportunidad de enfocarme en la calidad, la
                eficiencia y en ofrecer una excelente experiencia al usuario.
              </p>
              <p
                className="fw-light"
                style={{
                  marginTop: 15,
                  maxWidth: "700px",
                  fontSize: ".9em",
                }}
              >
                Mi objetivo es seguir aplicando mis conocimientos y habilidades
                para construir software que no solo cumpla con los requisitos
                técnicos, sino que también proporcione una excelente experiencia
                al usuario.
              </p>
            </>
          )}
        </div>
        <div className="mx-auto d-none d-sm-block">
          <img
            src="./public/exe.webp"
            alt=""
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
