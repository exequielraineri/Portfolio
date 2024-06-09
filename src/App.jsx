/* eslint-disable react/no-unknown-property */
import { Menu } from "./components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { Link } from "react-scroll";
import video1 from "./assets/video-fondo1.mp4";
import video2 from "./assets/video-fondo2.mp4";
import { HeroV2 } from "./components/HeroV2/HeroV2";

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

  return (
    <>
      <div
        style={{
          position: "relative",
        }}
      >
        {/* <video
          src={video2}
          loop={true}
          autoPlay={true}
          muted={true}
          width={"100%"}
          height={"100%"}
          style={{
            maxWidth: "700px",
            opacity: 0.05,
            position: "fixed",
            top: 0,
            right: 0,
            objectFit: "cover",
            objectPosition: "center",
          }}
        ></video> */}
        <Menu></Menu>
        {/* <Hero></Hero> */}
        <HeroV2></HeroV2>
        <main
          style={{
            backgroundColor: "#050505",
          }}
        >
          <AboutMe></AboutMe>
          <Experience></Experience>
          <Projects></Projects>
          <Skills></Skills>
        </main>
        <Footer></Footer>

        <Link
          id="btnFloating"
          className="btn btn-light shadow btnFloating"
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </Link>
      </div>
    </>
  );
}

export default App;
