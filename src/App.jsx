/* eslint-disable react/no-unknown-property */
import { Menu } from "./components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { AboutMe } from "./components/AboutMe";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { Link } from "react-scroll";
import { HeroV2 } from "./components/HeroV2/HeroV2";
import { FaArrowUp, FaPlus } from "react-icons/fa";
import { Contacto } from "./components/Contacto/Contacto";
import CountUp from "react-countup";
import { useContext } from "react";
import { counterContext } from "./context/contextCounter";
import Aos from "aos";
import GitHubCalendar from "react-github-calendar";
function App() {
  window.addEventListener("scroll", function () {
    var scrollValue = window.scrollY;

    const botonFloating = this.document.getElementById("btnFloating");
    if (scrollValue > 500) {
      botonFloating.classList.add("aparecer");
    } else {
      botonFloating.classList.remove("aparecer");
    }
  });

  const { value } = useContext(counterContext);
  Aos.init();
  return (
    <>
      <div
        style={{
          // backgroundColor: "#000011",
          minHeight: "100vh",
          background: "linear-gradient(to bottom,  transparent,#000011 70vh)",
        }}
      >
        <div
          className="mx-auto"
          style={{
            maxWidth: "1200px",
          }}
        >
          <Menu></Menu>
          <HeroV2></HeroV2>
          <div
            className="d-grid gap-3 container my-3"
            style={{
              width: "100%",
              placeContent: "center",
              gridTemplateColumns: "repeat(auto-fit, minmax(10px, 40%))",
            }}
          >
            <div
              style={{
                maxWidth: "200px",
                border: "#264066 1px solid",
                boxShadow: "0 0 5px rgba(255,255,255,.1)",
              }}
              className="w-100 mx-auto rounded-1 p-2 d-flex flex-column"
            >
              <div className="text-primary fw-bold d-flex align-items-center gap-1 justify-content-start">
                <FaPlus />
                <CountUp
                  duration={2}
                  end={2}
                  style={{
                    fontSize: "1.8em",
                  }}
                />
              </div>
              <span
                style={{
                  color: "#264066",
                  fontWeight: "bold",
                }}
              >
                {value.isEnglish ? "Experience" : "Experiencia"}
              </span>
            </div>
            <div
              style={{
                maxWidth: "200px",
                border: "#264066 1px solid",
                boxShadow: "0 0 5px rgba(255,255,255,.1)",
              }}
              className="mx-auto w-100 rounded-1 p-2 d-flex flex-column"
            >
              <div className="text-primary fw-bold d-flex align-items-center w-100 gap-1 justify-content-start">
                <FaPlus />
                <CountUp
                  duration={2}
                  end={10}
                  style={{
                    fontSize: "1.8em",
                  }}
                />
              </div>
              <span
                style={{
                  color: "#264066",
                  fontWeight: "bold",
                }}
              >
                {value.isEnglish ? "Projects" : "Proyectos"}
              </span>
            </div>
          </div>
          <AboutMe></AboutMe>
          <Experience></Experience>
          <Projects></Projects>
          <Skills></Skills>
          <div
            className="d-flex justify-content-center my-3"
            style={{ maxWidth: "1200px" }}
          >
            <GitHubCalendar username="exequielraineri" colorScheme="dark" />
          </div>
          {/* <Contacto></Contacto> */}
          <Footer></Footer>
          <Link
            id="btnFloating"
            className="btn btn-light shadow btnFloating"
            style={{}}
            to="hero"
            href="#hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <FaArrowUp />
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
